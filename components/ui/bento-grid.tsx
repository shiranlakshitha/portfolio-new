import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Magic UI Bento Grid's documented component pattern, themed for this portfolio.
export function BentoGrid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid auto-rows-[minmax(19rem,auto)] grid-cols-1 gap-4 lg:grid-cols-3", className)}
      {...props}
    />
  );
}

export function BentoCard({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#172A42] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/25 sm:p-7",
        className,
      )}
      {...props}
    />
  );
}
