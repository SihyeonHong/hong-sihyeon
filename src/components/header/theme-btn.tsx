"use client";

import cn from "@/styles/className";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="border-button-group-border bg-button-group-background inline-flex border">
        <button
          type="button"
          className="text-button-group-text rounded-l-sm px-3 py-1.5 text-sm"
          disabled
        >
          Light
        </button>
        <button
          type="button"
          className="text-button-group-text px-3 py-1.5 text-sm"
          disabled
        >
          Dark
        </button>
        <button
          type="button"
          className="text-button-group-text rounded-r-sm px-3 py-1.5 text-sm"
          disabled
        >
          System
        </button>
      </div>
    );
  }

  return (
    <div className="border-button-group-border bg-button-group-background inline-flex rounded-sm border">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn("px-3 py-1.5 text-sm transition-colors", {
          "bg-button-group-active text-button-group-text": theme === "light",
          "text-button-group-text hover:bg-button-group-hover":
            theme !== "light",
        })}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "border-button-group-border border-l px-3 py-1.5 text-sm transition-colors",
          {
            "bg-button-group-active text-button-group-text": theme === "dark",
            "text-button-group-text hover:bg-button-group-hover":
              theme !== "dark",
          },
        )}
      >
        Dark
      </button>
      <button
        type="button"
        onClick={() => setTheme("system")}
        className={cn(
          "border-button-group-border rounded-r-sm border-l px-3 py-1.5 text-sm transition-colors",
          {
            "bg-button-group-active text-button-group-text": theme === "system",
            "text-button-group-text hover:bg-button-group-hover":
              theme !== "system",
          },
        )}
      >
        System
      </button>
    </div>
  );
}
