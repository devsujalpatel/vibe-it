"use client";

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Page = () => {
  const router = useRouter();
  const AMOUNT = 1;
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPayed, setIsPayed] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
      });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amout: AMOUNT * 100,
        currency: "INR",
        name: "Vibe It",
        description: "Payment for Vibe It",
        order_id: data.orderId,
        handler: (response: any) => {
          if (
            response.razorpay_payment_id &&
            response.razorpay_order_id &&
            response.razorpay_signature
          ) {
            setIsPayed(true);
            router.push("/");
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(`Payment Failed: ${error}`);
    } finally {
      setIsProcessing(false);
      setIsPayed(false);
    }
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <section className="space-y-6 pt-[16vh] 2xl:pt-48">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Vibe It"
            width={50}
            height={50}
            className="hidden md:block"
          />
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-center">
          Payment Page
        </h1>
        <p className="text-center text-sm md:text-lg">
          Pay {AMOUNT} ₹ to get 100 credits of Vibe It
        </p>
        <div className="flex justify-center">
          <Button variant={"tertiary"} onClick={handlePayment}>
            {isProcessing ? "Processing..." : "Pay Now"}
          </Button>
        </div>
        <div className="flex justify-center">
          {isPayed ? (
            <div className="flex flex-col items-center">
              <p className="text-green-500 text-lg">Payment Successful</p>
              <p>You have recieved 100 credits</p>
            </div>
          ) : (
            <p className="text-red-500 text-lg">Payment Failed</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;
