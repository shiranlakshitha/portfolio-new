import { ArrowRight, CloudCog } from "lucide-react";
import { DiMsqlServer } from "react-icons/di";
import { FaAws, FaGithub } from "react-icons/fa6";
import {
  SiDocker,
  SiGit,
  SiGithubactions,
  SiKubernetes,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const iconShell =
  "flex size-full items-center justify-center rounded-full border border-white/10 bg-[#111F33]/95 shadow-[0_10px_35px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:scale-110";

export function CloudOrbit() {
  return (
    <div
      className="relative col-span-full flex h-[26rem] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0B1728] [perspective:900px] sm:h-[28rem]"
      role="img"
      aria-label="Multi-cloud engineering ecosystem connecting AWS, Azure, containers, infrastructure, delivery automation, and application development"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_45%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-[10%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300/10 to-transparent" aria-hidden="true" />
      <div className="absolute inset-y-[12%] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-300/10 to-transparent" aria-hidden="true" />

      <span className="absolute left-5 top-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
        Cloud ecosystem
      </span>
      <span className="absolute right-5 top-5 rounded-full border border-sky-300/10 bg-sky-300/5 px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-sky-300/70">
        15 tools · 3 layers
      </span>

      <div className="absolute left-6 top-1/2 z-20 hidden w-44 -translate-y-1/2 flex-col rounded-2xl border border-white/8 bg-[#08111F]/80 p-4 shadow-2xl backdrop-blur-md md:flex">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[#FFB84D]">Delivery path</span>
        <div className="mt-3 flex items-center gap-2 text-slate-400">
          <SiGithubactions className="size-4 text-[#2088FF]" />
          <ArrowRight className="size-3" />
          <SiDocker className="size-4 text-[#2496ED]" />
          <ArrowRight className="size-3" />
          <SiTerraform className="size-4 text-[#844FBA]" />
        </div>
        <span className="mt-3 text-[0.7rem] leading-5 text-slate-500">Build · package · provision</span>
      </div>

      <div className="absolute right-6 top-1/2 z-20 hidden w-44 -translate-y-1/2 flex-col rounded-2xl border border-white/8 bg-[#08111F]/80 p-4 shadow-2xl backdrop-blur-md md:flex">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-sky-300">Runtime path</span>
        <div className="mt-3 flex items-center gap-2 text-slate-400">
          <VscAzure className="size-4 text-[#0089D6]" />
          <ArrowRight className="size-3" />
          <SiKubernetes className="size-4 text-[#326CE5]" />
          <ArrowRight className="size-3" />
          <SiNginx className="size-4 text-[#009639]" />
        </div>
        <span className="mt-3 text-[0.7rem] leading-5 text-slate-500">Deploy · orchestrate · route</span>
      </div>

      <div className="relative z-10 flex size-28 items-center justify-center rounded-full border border-sky-300/35 bg-[#111F33] text-sky-300 shadow-[0_0_80px_rgba(56,189,248,0.24)]">
        <span className="absolute inset-2 rounded-full border border-sky-300/10" aria-hidden="true" />
        <CloudCog className="size-11" aria-hidden="true" />
        <span className="absolute -bottom-7 whitespace-nowrap font-mono text-[0.56rem] uppercase tracking-[0.18em] text-sky-300/60">Platform core</span>
      </div>

      <div aria-hidden="true">
        <OrbitingCircles radius={78} duration={16} iconSize={42}>
          <span className={`${iconShell} border-[#FF9900]/30 text-[#FFB84D]`} title="AWS">
            <FaAws className="size-6" />
          </span>
          <span className={`${iconShell} border-[#0078D4]/35 text-[#65BFFF]`} title="Azure">
            <VscAzure className="size-6" />
          </span>
          <span className={`${iconShell} text-sky-300`} title="Docker">
            <SiDocker className="size-6" />
          </span>
          <span className={`${iconShell} border-[#326CE5]/35 text-[#75A2FF]`} title="Kubernetes">
            <SiKubernetes className="size-6" />
          </span>
        </OrbitingCircles>

        <OrbitingCircles radius={130} duration={22} iconSize={40} reverse>
          <span className={`${iconShell} text-[#2088FF]`} title="GitHub Actions">
            <SiGithubactions className="size-5" />
          </span>
          <span className={`${iconShell} text-[#844FBA]`} title="Terraform">
            <SiTerraform className="size-5" />
          </span>
          <span className={`${iconShell} text-[#FCC624]`} title="Linux">
            <SiLinux className="size-5" />
          </span>
          <span className={`${iconShell} text-[#009639]`} title="Nginx">
            <SiNginx className="size-5" />
          </span>
          <span className={`${iconShell} text-white`} title="GitHub">
            <FaGithub className="size-5" />
          </span>
        </OrbitingCircles>

        <div className="hidden sm:block">
          <OrbitingCircles radius={184} duration={30} iconSize={38}>
            <span className={`${iconShell} text-[#F05032]`} title="Git">
              <SiGit className="size-5" />
            </span>
            <span className={`${iconShell} text-[#5FA04E]`} title="Node.js">
              <SiNodedotjs className="size-5" />
            </span>
            <span className={`${iconShell} text-white`} title="Next.js">
              <SiNextdotjs className="size-5" />
            </span>
            <span className={`${iconShell} text-[#3178C6]`} title="TypeScript">
              <SiTypescript className="size-5" />
            </span>
            <span className={`${iconShell} text-[#61DAFB]`} title="React">
              <SiReact className="size-5" />
            </span>
            <span className={`${iconShell} text-[#CC2927]`} title="SQL Server">
              <DiMsqlServer className="size-6" />
            </span>
          </OrbitingCircles>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-center justify-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-slate-600 sm:gap-4" aria-hidden="true">
        <span>Code</span><ArrowRight className="size-3" /><span>Build</span><ArrowRight className="size-3" /><span>Deploy</span><ArrowRight className="size-3" /><span>Operate</span>
      </div>
    </div>
  );
}
