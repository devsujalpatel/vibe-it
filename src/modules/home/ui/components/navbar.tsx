"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserControl } from "@/components/user-control";
import { Github, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" width={24} height={24} alt="Vibe" />
          <span className="font-semibold text-lg">Vibe It</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            size={"sm"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunMoonIcon className="size-4" />
          </Button>
          <Link
            href="https://github.com/devsujalpatel/vibeit"
            className="mr-2"
            target="_blank"
          >
            <Button
              variant={"tertiary"}
              className="text-sm flex items-center"
              size={"sm"}
            >
              <Github className="size-4" /> Give a Star
            </Button>
          </Link>

          <SignedOut>
            <div className="flex gap-2">
              <SignUpButton>
                <Button variant={"outline"} size="sm">
                  Sign up
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button size="sm">Sign in</Button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserControl showName />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
