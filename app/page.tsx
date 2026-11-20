import {
  ArrowDownRight,
  Boxes,
  Braces,
  Cloud,
  Download,
  Mail,
  ServerCog,
  TerminalSquare,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BrandIcon } from "@/components/brand-icon";
import { BlurText } from "@/components/ui/blur-text";
import { DitherField } from "@/components/ui/dither-field";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Timeline } from "@/components/ui/timeline";
import { CloudOrbit } from "@/components/cloud-orbit";
import { DeploymentDiagram } from "@/components/deployment-diagram";
import { ProjectCarousel } from "@/components/project-carousel";
import { navigation, portfolio } from "@/data/portfolio";

const skillIcons = {
  Cloud,
  "Containers & orchestration": Boxes,
  "CI/CD & infrastructure": ServerCog,
  Development: Braces,
} as const;

const skillDescriptions = {
  Cloud: "Platforms and managed cloud services",
  "Containers & orchestration": "Packaging and workload orchestration",
  "CI/CD & infrastructure": "Delivery automation and infrastructure",
  Development: "Application and data foundations",
} as const;

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-sky-400" aria-hidden="true" />
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-sky-300">{eyebrow}</p>
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{copy}</p>}
    </div>
  );
}

export default function Home() {
  const projects = portfolio.projects.filter((project) => project.enabled);

  return (
    <main className="overflow-hidden">
      <a href="#content" className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-[#38BDF8] px-4 py-2 font-semibold text-[#08111F] transition focus:translate-y-0">
        Skip to content
      </a>
      <FloatingNav navItems={navigation} socialLinks={portfolio.social} />

      <section id="home" className="relative isolate flex min-h-screen scroll-mt-24 items-center border-b border-white/5 pt-28">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <DitherField
            pattern="clouds"
            color={["#06253D", "#0066A6", "#38BDF8"]}
            dotSize={1.6}
            intensity={0.58}
            speed={0.22}
            fps={24}
            interactive
            className="absolute inset-0 bg-[#08111F] opacity-65"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_14%,transparent_88%)]" />
          <div className="absolute -left-[12%] top-[8%] size-[42rem] rounded-full bg-[#0078D4]/12 blur-[115px]" />
          <div className="absolute -right-[10%] top-[16%] size-[38rem] rounded-full bg-[#FF9900]/8 blur-[125px]" />
          <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(ellipse_at_20%_50%,rgba(8,17,31,0.98)_0%,rgba(8,17,31,0.92)_34%,rgba(8,17,31,0.58)_56%,transparent_78%)] lg:w-[72%]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(8,17,31,0.42)_80%,#08111F_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08111F] to-transparent" />
        </div>
        <div id="content" className="site-container relative z-10 grid items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-24">
          <div className="[text-shadow:0_2px_18px_rgba(8,17,31,0.95)]">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-[#08111F]/80 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.19em] text-sky-200 shadow-lg backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" aria-hidden="true" />
              Open to internship opportunities
            </p>
            <BlurText text={portfolio.profile.name} className="max-w-3xl text-[clamp(3.35rem,8vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-white" />
            <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 sm:text-sm">
              {portfolio.profile.title}
            </p>
            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg">{portfolio.profile.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-6 py-3.5 text-sm font-semibold text-[#08111F] transition hover:bg-sky-300">
                View Projects <ArrowDownRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#08111F]/80 px-6 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition hover:border-white/25 hover:bg-[#111F33]">
                Contact Me
              </a>
            </div>

            {(portfolio.social.github || portfolio.social.linkedin) && (
              <div className="mt-8 flex gap-5 text-sm font-medium text-slate-300">
                {portfolio.social.github && <a className="focus-ring inline-flex items-center gap-2 hover:text-white" href={portfolio.social.github} target="_blank" rel="noreferrer"><FaGithub className="size-4" aria-hidden="true" />GitHub</a>}
                {portfolio.social.linkedin && <a className="focus-ring inline-flex items-center gap-2 hover:text-white" href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn className="size-4" aria-hidden="true" />LinkedIn</a>}
              </div>
            )}
          </div>

          <div className="relative isolate">
            <DeploymentDiagram />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 py-24 sm:py-32">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="Development taught me how to build. Cloud taught me how to ship." />
          <div>
            <p className="text-xl leading-9 text-slate-200 sm:text-2xl sm:leading-10">{portfolio.profile.about}</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-3">
              {[
                ["01", "Build", "Develop practical applications"],
                ["02", "Automate", "Create repeatable delivery"],
                ["03", "Operate", "Learn reliable cloud systems"],
              ].map(([number, title, copy]) => (
                  <div key={number} className="bg-[#111F33] p-6">
                  <span className="font-mono text-[0.65rem] text-sky-300">{number}</span>
                  <h3 className="mt-8 font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-y border-white/5 bg-[#0D192A] py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading eyebrow="Selected projects" title="Infrastructure practice, made tangible." copy="Hands-on projects focused on the path from a code change to a running container." />
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading eyebrow="Toolkit" title="Tools I’m learning by using." copy="A practical stack across cloud platforms, delivery automation, containers, and application development." />

          <CloudOrbit />

          <div className="mt-5 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.skills.map((group, index) => {
              const Icon = skillIcons[group.category];
              return (
                <article key={group.category} className="group relative min-h-64 bg-[#13243A] p-6 transition duration-300 hover:bg-[#172A42] sm:p-7">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/0 to-transparent transition duration-300 group-hover:via-sky-400/60" aria-hidden="true" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-sky-300/10 bg-sky-400/8 text-sky-300 shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[0.62rem] tracking-[0.18em] text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-6 text-white">{group.category}</h3>
                  <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">{skillDescriptions[group.category]}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="inline-flex items-center gap-2 rounded-full border border-white/7 bg-[#08111F]/65 px-3 py-1.5 text-xs text-slate-300 transition group-hover:border-white/10">
                        <BrandIcon name={item} className="size-3.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 border-y border-white/5 bg-[#0D192A] py-24 sm:py-32">
        <div className="site-container">
          <SectionHeading eyebrow="Experience & education" title="Learning through teams, products, and practice." copy="Software engineering experience alongside an ongoing transition into cloud engineering and DevOps." />
          <Timeline entries={portfolio.timeline} />
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-400/15 bg-[#172A42] px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-24 -top-32 size-96 rounded-full bg-sky-400/10 blur-[90px]" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-sky-300">Let’s connect</p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Looking for someone ready to grow into cloud and DevOps work?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                I’m interested in cloud, DevOps, and infrastructure internship opportunities where I can contribute, learn from experienced engineers, and keep building practical delivery skills.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {portfolio.social.email && <a className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-5 py-3 text-sm font-semibold text-[#08111F] hover:bg-sky-300" href={`mailto:${portfolio.social.email}`}><Mail className="size-4" />Email me</a>}
                {portfolio.social.github && <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5" href={portfolio.social.github} target="_blank" rel="noreferrer"><FaGithub className="size-4" aria-hidden="true" />GitHub</a>}
                {portfolio.social.linkedin && <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5" href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn className="size-4" aria-hidden="true" />LinkedIn</a>}
                {portfolio.cv.url && <a className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5" href={portfolio.cv.url} download><Download className="size-4" />{portfolio.cv.label}</a>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="site-container flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {portfolio.profile.name}</p>
          <div className="flex items-center gap-2">
            <a className="focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white" href={portfolio.social.github} target="_blank" rel="noreferrer">
              <FaGithub className="size-4" aria-hidden="true" /> GitHub
            </a>
            <a className="focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-[#65BFFF]" href={portfolio.social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn className="size-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>
          <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em]"><TerminalSquare className="size-4" /> Built for the next deployment</p>
        </div>
      </footer>
    </main>
  );
}
