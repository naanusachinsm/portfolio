import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sachin",
  initials: "SM",
  url: "https://sachinsm.com",
  location: "Bengaluru, Karnataka",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "Full Stack Developer with 7+ years of experience crafting scalable web solutions for Telecom, IoT, and SaaS industries. Expert in Angular, React, Java, and Spring Boot, I optimize performance, enhance security, and deliver seamless user experiences. Proven leader in building 5G UIs, e-commerce platforms, and cybersecurity tools, with a passion for innovation and operational excellence.",
  avatarUrl: "/me1.jpg",
  skills: [
    "React",
    "Angular",
    "Typescript",
    "Javascript",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Java",
    "Spring Boot",
    "GitHub",
    "Azure",
    "CI/CD",
    "DevOps",
    "AI Automation",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "naanusachinsm@gmail.com",
    tel: "+91 96636 36324",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/naanusachinsm",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/naanusachinsm/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/naanusachinsm",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    // {
    //   company: "JMA Wireless",
    //   href: "https://jmawireless.com/",
    //   badges: [],
    //   location: "Bengaluru, Karnataka",
    //   title: "Senior Consultant",
    //   logoUrl:
    //     "https://www.radisys.com/sites/default/files/2021-01/xjma-wireless-logo.jpg.pagespeed.ic.bw0ntunYhJ.jpg",
    //   start: "January 2024",
    //   end: "December 2024",
    //   description:
    //     "Engineered responsive 5G user interfaces with Angular and TypeScript, boosting performance by 20% and cutting development time by 30% through reusable components and optimization techniques, while collaborating with 5G experts for seamless integration",
    // },
    // {
    //   company: "Optiv",
    //   href: "https://optiv.com/",
    //   badges: [],
    //   location: "Bengaluru, Karnataka",
    //   title: "Consultant",
    //   logoUrl:
    //     "https://mms.businesswire.com/media/20150603006401/en/470885/5/OPTIV_logo.jpg",
    //   start: "April 2023",
    //   end: "December 2023",
    //   description:
    //     "Led a 4-member team to build a cybersecurity vulnerability assessment platform using React and Node.js, streamlining releases by 40% with Azure DevOps CI/CD pipelines and ensuring robust API integration for scanning and reporting",
    // },
    // {
    //   company: "Dover",
    //   href: "https://dover.com/",
    //   badges: [],
    //   location: "Bengaluru, Karnataka",
    //   title: "Consultant",
    //   logoUrl:
    //     "https://www.dovercorporation.com/images/default-source/template-graphics/logo-dover_main.png?sfvrsn=9c8c1ac8_2",
    //   start: "April 2020",
    //   end: "March 2023",
    //   description:
    //     "Developed a scalable e-commerce platform for 50,000+ users with Java, Spring Boot, and Angular, improving query performance by 25% and enhancing UI responsiveness for a superior user experience.",
    // },
    // {
    //   company: "Infosys",
    //   href: "https://infosys.com/",
    //   badges: [],
    //   location: "Bengaluru, Karnataka",
    //   title: "Associate Consultant",
    //   logoUrl:
    //     "https://brandlogos.net/wp-content/uploads/2022/02/infosys-logo-brandlogos.net_.png",
    //   start: "February 2019",
    //   end: "March 2020",
    //   description:
    //     "Managed telecom applications for major clients like Telstra and Comcast using Node.js, ensuring reliability and security while automating testing with JUnit and Mockito to enhance release stability",
    // },
    {
      company: "Fubeus Inc",
      href: "https://fubeus.com/",
      badges: [],
      location: "Bengaluru, Karnataka",
      title: "Consultant",
      logoUrl:
        "https://fubeus.com/static/media/fubeus-logo-crop.e8c2f1d054d1428fc6f6.png",
      start: "October 2016",
      end: "Present",
      description:
        "Built ISeek and ISeek Merchant apps from scratch with Angular 2 and TypeScript, focusing on intuitive UI/UX design and performance optimization through rigorous testing and debugging",
    },
    {
      company: "Freelancer",
      href: "",
      badges: [],
      location: "Bengaluru, Karnataka",
      title: "Digital Transformation Consultant",
      logoUrl: "",
      start: "March 2020",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "Jain University",
      href: "https://www.jainuniversity.ac.in/",
      degree:
        "Bachelor's Degree of Electronics and Communication Engineering (ECE)",
      logoUrl:
        "https://i.pinimg.com/736x/a3/40/b7/a340b7e04e7c4b7c3040e2067779cdff.jpg",
      start: "2012",
      end: "2016",
    },
    {
      school: "STJ PU College",
      href: "https://www.stjabm.org/",
      degree: "Pre-University",
      logoUrl: "https://www.stjabm.org/assets/images/logo.png",
      start: "2010",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Credit Bridge Advisors",
      dates: "",
      location: "",
      description:
        "Developed a web application which aggregates credit scoore and report data, analyze score trends and provide insights to the users.",
      image:
        "https://creditbridgeadvisors.com/wp-content/uploads/2025/01/CBA-logo-2-2048x976.jpg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://creditbridgeadvisors.com/",
        },
      ],
    },
  ],
} as const;
