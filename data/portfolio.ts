export type ProjectStatus = "Featured" | "Completed" | "In progress" | "Lab";
export type ProjectAccent = "azure" | "aws" | "kubernetes" | "cloud";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  flow: string[];
  status: ProjectStatus;
  accent: ProjectAccent;
  featured: boolean;
  enabled: boolean;
  repositoryUrl: string;
  liveUrl: string;
};

export type TimelineEntry = {
  type: "experience" | "education";
  organization: string;
  role: string;
  date: string;
  summary: string;
  highlights: string[];
};

export const portfolio = {
  profile: {
    name: "Shiran Lakshitha",
    title: "Computer Science Undergraduate · Cloud & DevOps",
    intro:
      "I’m a Computer Science undergraduate with software engineering internship experience. I’m developing my cloud and DevOps skills by containerizing applications, building CI/CD pipelines, and practicing cloud deployments on AWS and Azure.",
    about:
      "I started in software development, where I learned how applications are built, tested, and improved with a team. I’m now moving deeper into cloud engineering and DevOps—learning how to package applications, automate delivery, and run them reliably. I’m pursuing a BSc (Hons) in Computer Science in the Software Engineering stream, and I’m looking for opportunities to grow through practical cloud and infrastructure work.",
  },
  social: {
    email: "",
    github: "https://github.com/shiranlakshitha",
    linkedin: "https://www.linkedin.com/in/shiran-lakshitha",
  },
  cv: {
    url: "",
    label: "Download CV",
  },
  projects: [
    {
      title: "Azure VM Deployment with CI/CD",
      description:
        "A containerized Next.js and Node.js application delivered to an Azure virtual machine through an automated GitHub Actions workflow, with Nginx routing traffic to the application.",
      technologies: ["Azure VM", "Docker", "GitHub Actions", "Nginx", "Next.js", "Node.js"],
      flow: ["GitHub Actions", "Docker", "Azure VM", "Nginx"],
      status: "Featured",
      accent: "azure",
      featured: true,
      enabled: true,
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      title: "AWS ECR Container Pipeline",
      description:
        "A secure build-and-push pipeline for a Next.js Docker image, using GitHub Actions and AWS IAM OIDC to publish images to Amazon ECR without long-lived access keys.",
      technologies: ["AWS", "Amazon ECR", "IAM OIDC", "Docker", "GitHub Actions", "Next.js"],
      flow: ["GitHub Actions", "IAM OIDC", "Docker build", "Amazon ECR"],
      status: "In progress",
      accent: "aws",
      featured: false,
      enabled: true,
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      title: "Kubernetes Deployment Lab",
      description:
        "A hands-on Next.js container deployment using Kubernetes Deployment and Service resources, tested locally with minikube.",
      technologies: ["Kubernetes", "minikube", "Docker", "Next.js"],
      flow: ["Docker image", "Deployment", "Service", "minikube"],
      status: "Lab",
      accent: "kubernetes",
      featured: false,
      enabled: true,
      repositoryUrl: "",
      liveUrl: "",
    },
    {
      title: "Next.js Deployment to Amazon EKS",
      description:
        "A planned delivery path that builds a Next.js container in GitHub Actions, stores it in Amazon ECR, and deploys it to an Amazon EKS cluster.",
      technologies: ["Amazon EKS", "Amazon ECR", "Kubernetes", "Docker", "GitHub Actions"],
      flow: ["GitHub Actions", "Amazon ECR", "Amazon EKS"],
      status: "In progress",
      accent: "aws",
      featured: false,
      enabled: true,
      repositoryUrl: "",
      liveUrl: "",
    },
  ] satisfies Project[],
  skills: [
    { category: "Cloud", items: ["AWS", "Azure"] },
    { category: "Containers & orchestration", items: ["Docker", "Docker Compose", "Kubernetes"] },
    { category: "CI/CD & infrastructure", items: ["GitHub Actions", "Terraform basics", "Linux", "Nginx"] },
    { category: "Development", items: ["Next.js", "React", "TypeScript", "Node.js", "SQL Server"] },
  ],
  timeline: [
    {
      type: "experience",
      organization: "Wishmiq Ltd",
      role: "Software Engineering Intern",
      date: "",
      summary:
        "Contributed to application development and quality assurance while collaborating through a pull-request-based workflow.",
      highlights: ["Application development", "QA testing", "Pull-request collaboration"],
    },
    {
      type: "experience",
      organization: "NexteraTech",
      role: "Software Engineering Intern",
      date: "",
      summary:
        "Worked on Pulze-HR features supporting day-to-day workforce and payroll operations.",
      highlights: ["Shift scheduling", "Rosters and attendance", "Payroll features"],
    },
    {
      type: "education",
      organization: "BSc (Hons) Computer Science",
      role: "Software Engineering stream · In progress",
      date: "",
      summary:
        "Undergraduate study focused on software engineering foundations and applied computing.",
      highlights: [],
    },
    {
      type: "education",
      organization: "Higher National Diploma",
      role: "Software Engineering",
      date: "",
      summary: "Completed higher national diploma studies in software engineering.",
      highlights: [],
    },
    {
      type: "education",
      organization: "Diploma",
      role: "Software Engineering",
      date: "",
      summary: "Completed diploma studies in software engineering.",
      highlights: [],
    },
  ] satisfies TimelineEntry[],
} as const;

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
