"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-white/40 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_14px_26px_rgba(15,23,42,0.07)] backdrop-blur-2xl hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent focus:outline-none focus:ring-4 focus:ring-accent/15 dark:border-white/15 dark:bg-white/7 dark:hover:border-accent/55 dark:hover:text-white"
      aria-label="切换浅色与深色模式"
      title="切换主题"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none" aria-hidden="true">
          <path
            d="M12 3.75V5.25M12 18.75V20.25M5.636 5.636L6.697 6.697M17.303 17.303L18.364 18.364M3.75 12H5.25M18.75 12H20.25M5.636 18.364L6.697 17.303M17.303 6.697L18.364 5.636M15.75 12A3.75 3.75 0 1 1 8.25 12A3.75 3.75 0 0 1 15.75 12Z"
            className="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none" aria-hidden="true">
          <path
            d="M21 12.79A9 9 0 0 1 11.21 3A7.5 7.5 0 1 0 21 12.79Z"
            className="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
