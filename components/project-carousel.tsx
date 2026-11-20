"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaAws, FaGithub } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

import Carousel from "@/components/Carousel";
import { BrandIcon } from "@/components/brand-icon";
import type { Project, ProjectAccent } from "@/data/portfolio";

const accentStyles: Record<
  ProjectAccent,
  { icon: string; glow: string; label: string; badge: string; line: string }
> = {
  azure: {
    icon: "border-[#0078D4]/30 bg-[#0078D4]/15 text-[#65BFFF]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(0,120,212,0.24),transparent_44%)]",
    label: "text-[#65BFFF]",
    badge: "border-[#0078D4]/25 bg-[#0078D4]/10 text-[#8ACBFA]",
    line: "from-[#0078D4]/70 to-sky-300/10",
  },
  aws: {
    icon: "border-[#FF9900]/30 bg-[#FF9900]/10 text-[#FFB84D]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(255,153,0,0.18),transparent_44%)]",
    label: "text-[#FFB84D]",
    badge: "border-[#FF9900]/25 bg-[#FF9900]/10 text-[#FFC266]",
    line: "from-[#FF9900]/70 to-[#FF9900]/10",
  },
  kubernetes: {
    icon: "border-[#326CE5]/30 bg-[#326CE5]/15 text-[#79A2F5]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(50,108,229,0.22),transparent_44%)]",
    label: "text-[#79A2F5]",
    badge: "border-[#326CE5]/25 bg-[#326CE5]/10 text-[#9AB8F7]",
    line: "from-[#326CE5]/70 to-[#326CE5]/10",
  },
  cloud: {
    icon: "border-sky-400/25 bg-sky-400/10 text-sky-300",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_44%)]",
    label: "text-sky-300",
    badge: "border-sky-400/20 bg-sky-400/10 text-sky-200",
    line: "from-sky-400/70 to-sky-400/10",
  },
};

const projectIcons = {
  azure: VscAzure,
  aws: FaAws,
  kubernetes: SiKubernetes,
  cloud: VscAzure,
} as const;

function ProjectSlide({ project, index, total }: { project: Project; index: number; total: number }) {
  const Icon = projectIcons[project.accent];
  const accent = accentStyles[project.accent];

  return (
    <article className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#111F33] shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
      <div className={`absolute inset-0 opacity-80 ${accent.glow}`} aria-hidden="true" />
      <div className="relative grid h-full lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex min-h-0 flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4">
            <span className={`flex size-12 items-center justify-center rounded-2xl border ${accent.icon}`}>
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <div className="flex items-center gap-3">
              <span className={`rounded-full border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.15em] ${accent.badge}`}>
                {project.status}
              </span>
              <span className="font-mono text-[0.68rem] tabular-nums text-slate-500">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="mt-8 lg:mt-10">
            <p className={`font-mono text-[0.66rem] uppercase tracking-[0.2em] ${accent.label}`}>
              Cloud deployment case study
            </p>
            <h3 className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              {project.description}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="inline-flex items-center gap-2 rounded-full border border-white/7 bg-[#08111F]/65 px-3 py-1.5 text-xs text-slate-300"
              >
                <BrandIcon name={technology} className="size-3.5 shrink-0" />
                {technology}
              </span>
            ))}
          </div>

          {(project.repositoryUrl || project.liveUrl) && (
            <div className="mt-auto flex flex-wrap gap-3 border-t border-white/8 pt-6">
              {project.repositoryUrl && (
                <a
                  className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="size-4" aria-hidden="true" /> View Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-300"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="size-4" aria-hidden="true" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        <div className="relative border-t border-white/8 bg-[#08111F]/45 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.19em] text-slate-500">Deployment flow</p>
                <p className="mt-1 text-sm text-slate-300">From commit to runtime</p>
              </div>
              <ArrowUpRight className={`size-5 ${accent.label}`} aria-hidden="true" />
            </div>

            <ol className="mt-6 space-y-2.5 sm:mt-8">
              {project.flow.map((step, stepIndex) => (
                <li key={step} className="relative flex items-center gap-3 rounded-2xl border border-white/8 bg-[#172A42]/95 px-4 py-3">
                  {stepIndex < project.flow.length - 1 && (
                    <span className={`absolute left-[1.82rem] top-[calc(100%+1px)] h-3 w-px bg-gradient-to-b ${accent.line}`} aria-hidden="true" />
                  )}
                  <span className={`flex size-7 shrink-0 items-center justify-center rounded-lg border ${accent.icon}`}>
                    <BrandIcon
                      name={step}
                      className="size-3.5"
                      fallback={<span className="font-mono text-[0.58rem]">{stepIndex + 1}</span>}
                    />
                  </span>
                  <span className="text-sm font-medium text-slate-100">{step}</span>
                  <span className="ml-auto font-mono text-[0.6rem] text-slate-600">0{stepIndex + 1}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(
    () => projects.map((project, index) => <ProjectSlide key={project.title} project={project} index={index} total={projects.length} />),
    [projects],
  );

  return (
    <div>
      <nav className="mb-6 flex gap-2 overflow-x-auto pb-2" aria-label="Choose a project">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`focus-ring inline-flex min-w-max items-center gap-2 rounded-full border px-4 py-2 text-left text-xs transition sm:text-sm ${
              index === activeIndex
                ? "border-sky-400/30 bg-sky-400/10 text-sky-200"
                : "border-white/8 bg-white/[0.025] text-slate-500 hover:border-white/15 hover:text-slate-300"
            }`}
          >
            <span className="font-mono text-[0.62rem] tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            <span>{project.title}</span>
          </button>
        ))}
      </nav>

      <Carousel
        items={items}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
        baseWidth="100%"
        minHeight={690}
        aspectRatio={1.65}
        peek={34}
        gap={18}
        radius={28}
        frame={false}
        effect="slide"
        indicator="dots"
        arrows
        autoplay={false}
        loop={false}
        draggable
        ariaLabel="Selected cloud and DevOps projects"
        className="px-1 sm:px-3"
        style={
          {
            "--carousel-tile": "#111F33",
            "--carousel-tile-edge": "rgba(255,255,255,0.08)",
            "--carousel-tile-highlight": "rgba(255,255,255,0.1)",
            "--carousel-tile-shadow": "0 24px 80px rgba(0,0,0,0.3)",
            "--carousel-ink": "#F5F7FA",
            "--carousel-muted": "#94A3B8",
            "--carousel-faint": "rgba(148,163,184,0.22)",
            "--carousel-soft": "rgba(56,189,248,0.5)",
            "--carousel-badge": "rgba(56,189,248,0.08)",
            "--carousel-hover": "brightness(1.02)",
          } as CSSProperties
        }
      />

      <p className="mt-4 text-center font-mono text-[0.62rem] uppercase tracking-[0.15em] text-slate-600">
        Drag, swipe, or use the arrow keys
      </p>
    </div>
  );
}
