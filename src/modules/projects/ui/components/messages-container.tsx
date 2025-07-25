import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MessageCard } from "./message-card";


interface Props {
  projectId: string;
}

export const MessagesContainer = ({ projectId }: Props) => {
  const trpc = useTRPC();
  const { data: messages } = useSuspenseQuery(
    trpc.messages.getMany.queryOptions({
      projectId,
    })
  );
  return <div className="flex flex-col flex-1 min-h-0">
    <div className="flex-1 min-h-0 overflow-y-auto">
      <div className="pt-2 pr-1">
        {messages.map((message) => (
          <MessageCard 
          key={message.id}
          content={message.content}
          role={message.role}
          fragment={message.fragment}
          createdAt={message.createdAt}
          isActiveFragment={false}
          onFragment={() => {}}
          type={message.type}
          />
        ))}
      </div>

    </div>
  </div>;
};
