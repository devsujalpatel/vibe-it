import { useState } from "react";
import { ExternalLinkIcon, RefreshCcwIcon } from "lucide-react";

import { Fragment } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Props {
  data: Fragment;
}

export const FragmentWeb = ({ data }: Props) => {
  const [copied, setCopied] = useState(false);
  const [fragmentKey, setFragmentKey] = useState(0);

  const onRefresh = () => {
    setFragmentKey((prev) => prev + 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.sandboxUrl);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-2 border-b bg-sidebar flex items-center gap-x-2">
        <Button size={"sm"} variant={"outline"} onClick={onRefresh}>
          <RefreshCcwIcon />
        </Button>
        <Button
          className="flex-1 justify-start text-start font-normal"
          size={"sm"}
          variant={"outline"}
          onClick={handleCopy}
          disabled={!data.sandboxUrl || copied}
        >
          <span className="truncate">{data.sandboxUrl}</span>
        </Button>
        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => {
            if (!data.sandboxUrl) return;
            window.open(data.sandboxUrl, "_blank");
          }}
          disabled={!data.sandboxUrl}
        >
          <ExternalLinkIcon />
        </Button>
      </div>
      <iframe
        key={fragmentKey}
        className="h-full w-full"
        sandbox="allow-forms allow-scripts allow-same-origin"
        loading="lazy"
        src={data.sandboxUrl}
      />
    </div>
  );
};
