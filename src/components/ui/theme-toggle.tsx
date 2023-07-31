"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="rounded-sm p-0.5 focus:outline-none focus:ring-primary/30 focus-visible:ring-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-6 w-6 dark:hidden" />
      <MoonIcon className="hidden h-6 w-6 dark:block" />
    </button>
  );
};
