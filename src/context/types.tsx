export interface WorkProject {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  techStack: string[];
  keyFeatures: string[];
  challenges?: string;
  githubLink?: string;
  liveDemo?: string;
}

export const projects: WorkProject[] = [
  {
    id: 1,
    title: "Altitude Branding",
    description: "A complete brand identity solution for modern startups.",
    category: "Brand Identity",
    year: "2024",
    image:
      "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg",
    techStack: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
    ],

    keyFeatures: [
      "Dynamic brand templates",
      "Real-time design updates",
      "Collaborative design workflow",
    ],
    challenges: "Scaling real-time collaboration across multiple clients.",
    githubLink: "https://github.com/yourusername/altitude-branding",
    liveDemo: "https://altitude-branding.demo",
  },
  {
    id: 2,
    title: "Novus E-Commerce",
    description:
      "An innovative e-commerce platform with real-time inventory sync.",
    category: "UI/UX Design",
    year: "2023",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
    techStack: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    keyFeatures: [
      "Live inventory management",
      "Secure payment processing",
      "Multi-vendor support",
    ],
    challenges: "Handling real-time inventory synchronization across vendors.",
    githubLink: "https://github.com/yourusername/novus-ecommerce",
    liveDemo: "https://novus-ecommerce.demo",
  },
  {
    id: 3,
    title: "Harmony Dashboard",
    description: "A web-based application for visualizing business analytics.",
    category: "Web Application",
    year: "2023",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    techStack: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    keyFeatures: [
      "Interactive data visualization",
      "User-based role management",
      "Real-time data updates",
    ],
    challenges: "Optimizing real-time updates with large data sets.",
    githubLink: "https://github.com/yourusername/harmony-dashboard",
    liveDemo: "https://harmony-dashboard.demo",
  },
  {
    id: 4,
    title: "Fusion Mobile App",
    description: "A sleek mobile application for on-demand services.",
    category: "Mobile Design",
    year: "2022",
    image: "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg",
    techStack: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    keyFeatures: [
      "Location-based service discovery",
      "Instant booking and confirmation",
      "In-app messaging system",
    ],
    challenges: "Ensuring real-time location tracking with low latency.",
    githubLink: "https://github.com/yourusername/fusion-mobile-app",
    liveDemo: "https://fusion-mobile.demo",
  },
];

export const rolesConfig = {
  "Frontend Developer": {
    projectIds: [1, 2],
    techStack: ["React", "Tailwind", "Vite"],
    colors: {
      primary: "#1A73E8",
      background: "#FFFFFF",
      secondary: "#333333",
      tertiary: "#666666",
      accent: "#888888",
    },
  },
  "Backend Developer": {
    projectIds: [3, 4],
    techStack: ["Node.js", "Go", "MongoDB"],
    colors: {
      primary: "#1E3A8A",
      background: "#F3F4F6",
      secondary: "#2D3748",
      tertiary: "#4A5568",
      accent: "#718096",
    },
  },
  "Full-Stack Developer": {
    projectIds: [1, 3],
    techStack: ["React", "Node.js", "PostgreSQL"],
    colors: {
      primary: "#4B5563",
      background: "#FFFFFF",
      secondary: "#2C2F33",
      tertiary: "#99AAB5",
      accent: "#7289DA",
    },
  },
};
