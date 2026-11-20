"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BriefcaseBusiness, GraduationCap, Check } from "lucide-react";
import { useRef } from "react";
import type { TimelineEntry } from "@/data/portfolio";

// Adapted from Aceternity UI's scroll-following Timeline component.
export function Timeline({ entries }: { entries: readonly TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl">
      <div className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-white/10 md:left-[15rem]" aria-hidden="true">
        <motion.div
          className="w-px bg-gradient-to-b from-sky-300 via-sky-400 to-cyan-200"
          style={{ height: reduceMotion ? "100%" : height }}
        />
      </div>

      <div className="space-y-5 md:space-y-8">
        {entries.map((entry, index) => {
          const Icon = entry.type === "experience" ? BriefcaseBusiness : GraduationCap;
          return (
            <article key={`${entry.organization}-${entry.role}`} className="relative grid gap-3 pl-14 md:grid-cols-[13rem_1fr] md:gap-8 md:pl-0">
              <div className="md:sticky md:top-28 md:h-fit md:pr-5 md:text-right">
                <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-sky-300">
                  {entry.type === "experience" ? "Experience" : "Education"}
                </p>
                {entry.date && <p className="mt-1 text-sm text-slate-500">{entry.date}</p>}
              </div>

              <div className="absolute left-0 top-1 flex size-9 items-center justify-center rounded-full border border-sky-400/25 bg-[#08111F] text-sky-300 shadow-[0_0_0_7px_#08111F] md:left-[13.9rem]">
                <Icon className="size-4" aria-hidden="true" />
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{ delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.12), duration: reduceMotion ? 0 : 0.45 }}
                className="rounded-3xl border border-white/8 bg-[#172A42] p-6 sm:p-7"
              >
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{entry.organization}</h3>
                <p className="mt-1 text-sm font-medium text-sky-300">{entry.role}</p>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">{entry.summary}</p>
                {entry.highlights.length > 0 && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-slate-400">
                        <Check className="size-4 text-sky-400" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
