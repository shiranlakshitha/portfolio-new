import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import {
  SiDocker,
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

type BrandDefinition = {
  Icon: IconType;
  color: string;
};

const brands: Record<string, BrandDefinition> = {
  AWS: { Icon: FaAws, color: "#FF9900" },
  "Amazon ECR": { Icon: FaAws, color: "#FF9900" },
  "Amazon EKS": { Icon: FaAws, color: "#FF9900" },
  Azure: { Icon: VscAzure, color: "#0089D6" },
  "Azure VM": { Icon: VscAzure, color: "#0089D6" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Docker Compose": { Icon: SiDocker, color: "#2496ED" },
  "Docker image": { Icon: SiDocker, color: "#2496ED" },
  "Docker build": { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  minikube: { Icon: SiKubernetes, color: "#326CE5" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "Terraform basics": { Icon: SiTerraform, color: "#844FBA" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  "Next.js": { Icon: SiNextdotjs, color: "#F5F7FA" },
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "SQL Server": { Icon: DiMsqlServer, color: "#CC2927" },
};

export function BrandIcon({
  name,
  className = "size-4",
  fallback = null,
}: {
  name: string;
  className?: string;
  fallback?: ReactNode;
}) {
  const brand = brands[name];
  if (!brand) return fallback;

  const { Icon, color } = brand;
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
}
