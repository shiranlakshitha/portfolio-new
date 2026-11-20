"use client";

import { useRef } from "react";
import { CheckCircle2, Terminal } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import { SiDocker, SiGithubactions } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BorderBeam } from "@/components/ui/border-beam";

const stages = [
  { label: "GitHub Actions", detail: "Build & test", Icon: SiGithubactions, color: "border-[#2088FF]/25 bg-[#2088FF]/10 text-[#2088FF]" },
  { label: "Docker image", detail: "Package", Icon: SiDocker, color: "border-[#2496ED]/25 bg-[#2496ED]/10 text-[#2496ED]" },
  { label: "AWS registry", detail: "Version & store", Icon: FaAws, color: "border-[#FF9900]/25 bg-[#FF9900]/10 text-[#FFB84D]" },
  { label: "Azure deploy", detail: "Run", Icon: VscAzure, color: "border-[#0078D4]/30 bg-[#0078D4]/15 text-[#65BFFF]" },
];

export function DeploymentDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLLIElement>(null);
  const imageRef = useRef<HTMLLIElement>(null);
  const registryRef = useRef<HTMLLIElement>(null);
  const cloudRef = useRef<HTMLLIElement>(null);
  const stageRefs = [githubRef, imageRef, registryRef, cloudRef];

  return (
    <div
      className="relative mx-auto w-full max-w-[36rem]"
      role="img"
      aria-label="Deployment workflow: GitHub Actions to Docker image to AWS registry to Azure deployment"
    >
      <div className="diagram-glow absolute inset-0 -z-10" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#111F33] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
        <BorderBeam
          size={110}
          duration={9}
          colorFrom="#FF9900"
          colorTo="#38BDF8"
          borderWidth={1.25}
        />
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-rose-400/70" />
            <span className="size-2.5 rounded-full bg-amber-300/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-500">deploy.yml</span>
          <Terminal className="size-4 text-slate-500" aria-hidden="true" />
        </div>

        <div ref={containerRef} className="relative p-5 sm:p-7">
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-slate-400">
            <CheckCircle2 className="size-4 text-emerald-400" aria-hidden="true" />
            Pipeline ready
            <span className="ml-auto rounded-full bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] text-emerald-300">passing</span>
          </div>

          <ol className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {stages.map(({ label, detail, Icon, color }, index) => (
              <li ref={stageRefs[index]} key={label} className="diagram-node relative rounded-2xl border border-white/8 bg-[#172A42] p-4">
                <div className="mb-5 flex items-start justify-between">
                  <span className={`flex size-9 items-center justify-center rounded-xl border ${color}`}>
                    <Icon className="size-[1.1rem]" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.62rem] text-slate-600">0{index + 1}</span>
                </div>
                <p className="text-sm font-semibold text-slate-100">{label}</p>
                <p className="mt-1 font-mono text-[0.68rem] text-slate-500">{detail}</p>
              </li>
            ))}
          </ol>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={githubRef}
            toRef={imageRef}
            pathColor="rgba(148,163,184,0.18)"
            pathWidth={1.5}
            pathOpacity={0.7}
            gradientStartColor="#38BDF8"
            gradientStopColor="#38BDF8"
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={imageRef}
            toRef={registryRef}
            curvature={72}
            pathColor="rgba(148,163,184,0.18)"
            pathWidth={1.5}
            pathOpacity={0.7}
            gradientStartColor="#38BDF8"
            gradientStopColor="#FF9900"
            duration={3.4}
            delay={0.25}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={registryRef}
            toRef={cloudRef}
            pathColor="rgba(148,163,184,0.18)"
            pathWidth={1.5}
            pathOpacity={0.7}
            gradientStartColor="#FF9900"
            gradientStopColor="#0078D4"
            duration={3.2}
            delay={0.4}
          />

          <div className="mt-5 rounded-xl border border-white/6 bg-[#08111F] px-4 py-3 font-mono text-[0.7rem] text-slate-500">
            <span className="text-sky-300">$</span> ship --target cloud <span className="terminal-cursor text-sky-300">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
