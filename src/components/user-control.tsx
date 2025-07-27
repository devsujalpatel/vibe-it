"use client";

import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { UserButton } from "@clerk/nextjs";

interface Props {
  showName?: boolean;
}

export const UserControl = ({ showName }: Props) => {
  const currentTheme = useCurrentTheme();
  return (
    <UserButton
      showName={showName}
      appearance={{
        elements: {
          userButtonBox: "rounded-md! p-1",
          userButtonAvatarBox: "rounded-full! size-8!",
          userButtonTrigger: "rounded-md!",
          footer: "hidden!"
        },
        baseTheme: currentTheme === "dark" ? dark : undefined,
      }}
    />
  );
};
