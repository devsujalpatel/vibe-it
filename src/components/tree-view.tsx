import { type TreeItem } from "@/types";
import React from "react";

interface TreeViewProps {
  data: TreeItem[];
  value?: string | null;
  onSelected?: (path: string) => void;
}

export const TreeView = ({ data, value, onSelected }: TreeViewProps) => {
  return <p>{JSON.stringify(data)}</p>;
};
