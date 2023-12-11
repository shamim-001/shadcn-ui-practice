"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 flex h-[80px] justify-between bg-secondary text-secondary-foreground">
      <ul className="flex h-full flex-1 items-center justify-center gap-3 px-5">
        <Link href="/">Home</Link>
        <DropdownMenu>
          <DropdownMenuTrigger>Pages</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/1-typography">Typography</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/2-accordion">Accordion</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/3-alert-dialogue">Alert Dialogue</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/4-aspect-ratio">Aspect Ratio</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>

      <div className="flex h-full items-center justify-center px-5">
        {theme === "dark" ? (
          <Sun onClick={() => setTheme("light")} />
        ) : (
          <Moon onClick={() => setTheme("dark")} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
