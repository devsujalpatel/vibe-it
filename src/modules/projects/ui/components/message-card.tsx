import { Fragment, MessageType } from "@/generated/prisma";

interface MessageCardProps {
  content: string;
  role: string;
  fragment: Fragment | null;
  createdAt: Date;
  isActiveFragment: boolean;
  onFragment: (fragment: Fragment) => void;
  type: MessageType;
}

export const MessageCard = ({
  content,
  role,
  fragment,
  createdAt,
  isActiveFragment,
  onFragment,
  type,
}: MessageCardProps) => {
  if (role === "ASSISTANT") {
    return <p>ASSISTANT</p>;
  }
  return <div>
    USER
  </div>;
};
