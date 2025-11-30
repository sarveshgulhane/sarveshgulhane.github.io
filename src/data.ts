// Types
export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutDetail {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  body: string;
  details: AboutDetail[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface ProjectsData {
  title: string;
  items: ProjectItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ExperienceData {
  title: string;
  jobs: ExperienceItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface EducationData {
  title: string;
  educations: EducationItem[];
}

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  url: string;
}

export interface BlogData {
  title: string;
  posts: BlogPost[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactData {
  title: string;
  text: string;
  email: string;
  socials: SocialLink[];
}

// Dummy content

export const HERO: HeroData = {
  name: "Sarvesh Gulhane",
  role: "AI/ML Engineer & Data Scientist",
  tagline: "AI/ML engineer with 3.5+ years of experience building scalable ML and GenAI solutions that solve real business problems.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Contact Me",
};

export const ABOUT: AboutData = {
  title: "About Me",
  body: `I'm an AI/ML Engineer & Data Scientist with 3.5+ years of hands-on experience delivering production-grade ML and GenAI systems. I enjoy taking ownership from problem discovery to deployment, asking the right questions, and turning ideas into solutions that drive measurable business value.

I'm especially interested in GenAI, LLMs, and MLOps — leveraging these to boost productivity for teams and organizations.`,
  details: [
    { label: "Location", value: "Pune, India" },
    {
      label: "Current Role",
      value: "Senior Software Engineer (AI/ML) at Persistent Systems",
    },
    {
      label: "Experience",
      value: "3.5+ years in AI/ML Engineering & Data Science",
    },
    { label: "Availability", value: "Open to full-time roles" },
  ],
};

export const SKILLS: SkillsData = {
  title: "Skills",
  categories: [
    {
      label: "Languages & Data",
      items: [
        "Python",
        "SQL",
        "Cypher",
        "Pandas",
        "Polars",
        "NumPy",
        "scikit-learn",
        "PyTorch",
      ],
    },
    {
      label: "ML & Analytics",
      items: [
        "Regression",
        "Classification",
        "Clustering",
        "Boosting",
        "Optimization",
        "Time Series Analysis",
        "PCA",
        "Feature Engineering",
        "Deep Learning",
        "EDA",
        "Statistics",
        "Data Visualization",
      ],
    },
    {
      label: "GenAI & LLM",
      items: [
        "RAG",
        "GraphRAG",
        "GenAI Applications",
        "LLM Fine-tuning (LoRA/PEFT)",
        "Agentic AI",
        "LangChain",
        "Hugging Face",
        "Ollama",
      ],
    },
    {
      label: "Backend & Databases",
      items: [
        "FastAPI",
        "PostgreSQL",
        "Neo4j",
        "SQLAlchemy",
        "pydantic",
        "REST APIs",
      ],
    },
    {
      label: "Cloud & MLOps",
      items: [
        "AWS (SageMaker, Lambda, S3, Textract)",
        "Azure (AZ-104, AzureML)",
        "Docker",
        "CI/CD",
      ],
    },
    {
      label: "Tools & Others",
      items: [
        "matplotlib",
        "seaborn",
        "Git / GitHub / GitLab",
        "LaTeX",
        "pytest",
      ],
    },
  ],
};

export const PROJECTS: ProjectsData = {
  title: "Projects",
  items: [
    {
      name: "Serverless ML Document Intelligence Platform",
      description:
        "End-to-end serverless application on AWS to extract, classify, and manage text from complex circuit and electrical diagrams using OCR and ML, backed by a structured PostgreSQL datastore.",
      tech: [
        "AWS Lambda",
        "AWS Textract",
        "SageMaker",
        "PostgreSQL",
        "Python",
      ],
      liveUrl: "",
      githubUrl: "",
    },
    {
      name: "GenAI-Powered Technical Document Translator",
      description:
        "GenAI application to translate technical documents (with strong German focus), featuring translation memory, custom glossaries, and support for both proprietary and self-hosted LLMs to balance privacy, cost, and accuracy.",
      tech: ["LLMs", "RAG", "LangChain", "Azure", "Python", "FastAPI",],
      liveUrl: "",
      githubUrl: "",
    },
    {
      name: "LaTeX Auto-Refinement Assistant",
      description:
        "GenAI system that auto-refines LaTeX documents using chunk-based processing and parallel LLM calls, significantly cutting down manual editing time for users.",
      tech: ["FastAPI", "LangChain", "Docker", "Azure", "LLMs"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      name: "GraphRAG Support Assistant",
      description:
        "GenAI-based support assistant using GraphRAG and Neo4j to ground LLM responses in a knowledge graph, reducing hallucinations and improving retrieval relevance for enterprise support use cases.",
      tech: ["Neo4j", "GraphRAG", "Python", "LangChain", "Azure", "Docker"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      name: "Knowledge Graph–Driven E-commerce POC",
      description:
        "Proof-of-concept e-commerce application backed by a Neo4j knowledge graph for richer product relationships and smarter retrieval over traditional relational schemas.",
      tech: ["Neo4j", "Cypher", "Python"],
      liveUrl: "",
      githubUrl: "",
    },
  ],
};

export const EXPERIENCE: ExperienceData = {
  title: "Experience",
  jobs: [
    {
      role: "Senior Software Engineer",
      company: "Persistent Systems",
      period: "Jun 2024 – Present",
      description:
        "Designing and delivering serverless ML and GenAI solutions on AWS and Azure, including OCR pipelines, document translation systems, and LaTeX refinement tools, with a focus on cost, scalability, and impact.",
    },
    {
      role: "Software Engineer",
      company: "Persistent Systems",
      period: "Jun 2022 – Jun 2024",
      description:
        "Built GenAI-based assistants, automated knowledge graph workflows, and data visualizations; improved data-processing performance and applied optimization techniques to drive real business value.",
    },
    {
      role: "Intern",
      company: "Persistent Systems",
      period: "Dec 2021 – Jun 2022",
      description:
        "Led a team to deliver an end-to-end ML proof of concept deployed on AzureML, practising MLOps best practices from experimentation to deployment.",
    },
  ],
};

export const EDUCATION: EducationData = {
  title: "Education",
  educations: [
    {
      degree: "B.Tech in Computer Engineering",
      institution:
        "Vishwakarma Institute of Information Technology, Pune, India",
      period: "Aug 2018 – May 2022",
      description:
        "Studied core computer science with a focus on algorithms, data structures, and applied machine learning.",
    },
  ],
};

export const BLOG: BlogData = {
  title: "Blog & Articles",
  posts: [
    {
      title: "Backpropagation",
      date: " (Comming soon!)",
      summary:
        "?back propagating we are What",
      url: "https://sarveshlogs.substack.com/",
    },
  ],
};

export const CONTACT: ContactData = {
  title: "Contact",
  text: "Have a project in mind or just want to say hi? Let's talk.",
  email: "sarvesh.gulhane@outlook.com",
  socials: [
    { label: "GitHub", url: "https://github.com/sarveshgulhane" },
    { label: "LinkedIn", url: "https://linkedin.com/in/sarvesh-gulhane" },
    { label: "Substack", url: "https://substack.com/@sarveshgulhane" },
  ],
};
