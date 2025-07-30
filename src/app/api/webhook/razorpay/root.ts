import { NextRequest, NextResponse } from "next/server";

import crypto from "crypto";
import { prisma } from "@/lib/db";

const RAZORPAY_ORDER_WEBHOOK_KEY = process.env.RAZORPAY_ORDER_WEBHOOK_KEY!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();

    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", RAZORPAY_ORDER_WEBHOOK_KEY)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const payload = JSON.parse(body);

    if (payload.event === "order.paid") {
      const payment = payload.payload.order.entity;

      const {
        id: razorpayOrderId,
        amount,
        currency = "INR",
        status,
        method,
      } = payment;

      try {
        await prisma.$transaction(async (tx) => {
          const order = await tx.order.findFirst({
            where: {
              razorpay_order_id: razorpayOrderId,
            },
          });

          if (!order || order.status === "paid")
            throw NextResponse.json({ error: "Order already paid" }, { status: 400 });

          const updatedOrder = await tx.order.update({
            where: {
              razorpay_order_id: razorpayOrderId,
            },
            data: {
              status: status, // padi hoga
              amount_paid: amount,
              currency,
              method,
            },
            include: {
              user: true,
            },
          });

          await tx.transaction.create({
            data: {
              event_type: "credit",
              order_id: updatedOrder.id,
              amount: amount,
              user_id: updatedOrder.user.cid,
              currency,
            },
          });
        });

        return NextResponse.json({ message: "Order paid successfully" }, { status: 200 });
      } catch (error) {
        console.error("Webhook DB error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
