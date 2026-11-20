"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

type NavItem = { name: string; href: string };
type SocialLinks = { github?: string; linkedin?: string };

// Aceternity UI Floating Navbar pattern: hides while scrolling down and returns on scroll up.
export function FloatingNav({ navItems, socialLinks }: { navItems: NavItem[]; socialLinks?: SocialLinks }) {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setVisible(current < 90 || current < previous || open);
  });

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -90 }}
      transition={{ duration: reduceMotion ? 0 : 0.24 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-[56rem] rounded-2xl border border-white/10 bg-[#08111F]/90 shadow-[0_16px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl md:rounded-full"
    >
      <div className="flex h-14 items-center justify-between px-3 pl-5 md:px-5">
        <a href="#home" className="focus-ring font-mono text-sm font-semibold tracking-[0.14em] text-sky-300">
          SL<span className="text-white/35">/</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          {(socialLinks?.github || socialLinks?.linkedin) && <span className="mx-2 h-5 w-px bg-white/10" aria-hidden="true" />}
          {socialLinks?.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="focus-ring inline-flex size-9 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/6 hover:text-white"
            >
              <FaGithub className="size-[1.1rem]" aria-hidden="true" />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring inline-flex size-9 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/6 hover:text-[#65BFFF]"
            >
              <FaLinkedinIn className="size-[1.1rem]" aria-hidden="true" />
            </a>
          )}
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="overflow-hidden border-t border-white/8 md:hidden"
          >
            <div className="grid grid-cols-2 gap-2 p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl bg-white/4 px-4 py-3 text-sm font-medium text-slate-200"
                >
                  {item.name}
                </a>
              ))}
              {(socialLinks?.github || socialLinks?.linkedin) && <span className="col-span-2 my-1 h-px bg-white/8" aria-hidden="true" />}
              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white/4 px-4 py-3 text-sm font-medium text-slate-200"
                >
                  <FaGithub className="size-4" aria-hidden="true" /> GitHub
                </a>
              )}
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white/4 px-4 py-3 text-sm font-medium text-slate-200"
                >
                  <FaLinkedinIn className="size-4" aria-hidden="true" /> LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
