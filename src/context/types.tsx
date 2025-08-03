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

export interface RoleConfig {
  projectIds: number[];
  techStackIds: number[];
  languages: string[];
  tools: string[];
  databases?: string[];
  colors: {
    primary: string;
    background: string;
    secondary: string;
    tertiary: string;
    accent: string;
  };
}

export const projects: WorkProject[] = [
  {
    id: 1,
    title: "Noatric",
    description: "A complete ecommerce store  for scifi weapons and tools.",
    category: "Full-Stack Development",
    year: "2024",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],

    keyFeatures: [
      "Fully function ecommerce store",
      "User authentication and authorization",
      "Product management",
      "Admin dashboard",
    ],
    challenges: "Filtering and Pagination.",
    githubLink: "https://github.com/jsndz/Noatric",
    liveDemo: "https://noatric.vercel.app/home",
  },
  {
    id: 2,
    title: "Skysense",
    description:
      "Get accurate, real-time weather updates, forecasts, and climate insights for any location.",
    category: "Full-Stack Development",
    year: "2023",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fjsndz.github.io%2FskysenseDeploy%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
    techStack: ["React", "TailwindCSS"],
    keyFeatures: [
      "Real-time weather updates",
      "Accurate forecasts",
      "Climate Insights",
    ],
    challenges: "Handling API Requests.",
    githubLink: "https://github.com/jsndz/SkySense",
    liveDemo: "https://jsndz.github.io/skysenseDeploy/",
  },
  {
    id: 3,
    title: "Dbace",
    description: "A simple sqlite clone built with C.",
    category: "Database",
    year: "2023",
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["C"],
    keyFeatures: [
      "Supports basic SQL operations like insert and select through a REPL interface",
      "B-tree data structure for efficient storage and retrieval, with features like node splitting and binary search",
      "Data is persisted with a page-based storage system, managed by a pager component that handles memory and disk I/O seamlessly",
    ],
    challenges: "Handling B-tree Implementation.",
    githubLink: "https://github.com/jsndz/dbaCe",
  },
  {
    id: 4,
    title: "PrimeBoard",
    description: "A leaderboard for product showcase.",
    category: "Full-Stack Development",
    year: "2022",
    image:
      "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    keyFeatures: [
      "Long pooling for real-time updates",
      "Product showcase",
      "Points allocation system",
    ],
    challenges: "Ensuring real-time updates.",
    githubLink: "https://github.com/jsndz/PrimeBoard",
  },
  {
    id: 5,
    title: "Mayaverse",
    description:
      "Mayaverse is a collaborative platform built for developers designed to create and manage virtual spaces.",
    category: "Full-Stack Development",
    year: "2022",
    image:
      "https://images.pexels.com/photos/12089403/pexels-photo-12089403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "Node.js",
      "Express",
      "Postgres",
      "Turbo Repo",
    ],
    keyFeatures: [
      "Test driven development",
      "Create and manage virtual spaces",
      "Real-time chat ",
      "1v1 Video Calls",
      "User authentication and authorization",
    ],
    challenges: "Handling avatar locations.",
    githubLink: "https://github.com/jsndz/mayaverse",
  },
  {
    id: 6,
    title: "Readit",
    description: "Minimalistic reddit clone.",
    category: "Full-Stack Development",
    year: "2022",
    image:
      "https://images.pexels.com/photos/5437588/pexels-photo-5437588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "NextJS",
      "TailwindCSS",
      "Golang",
      "Fiber",
      "Postgres",
      "Docker",
      "Redis",
    ],
    keyFeatures: [
      "Cache-aside Caching system",
      "Token-bucket rate limiting",
      "Microservice architecture",
      "Feed Generation",
    ],
    challenges: "Handling mutliple service with API gateway.",
    githubLink: "https://github.com/jsndz/readit",
  },
  {
    id: 7,
    title: "ercel",
    description: "Minimalistic Vercel clone.",
    category: "Backend Development",
    year: "2022",
    image:
      "https://images.pexels.com/photos/17323801/pexels-photo-17323801/free-photo-of-network-rack.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Typescript", "NodeJs", "Express", "S3 bucket"],
    keyFeatures: [
      "Redis-based Message Queue System",
      "Microservices Architecture",
      "Cloud Storage with AWS S3/R2",
      "TypeScript-based Backend",
    ],
    challenges: "Hosting files in S3/R2 and running build commands.",
    githubLink: "https://github.com/jsndz/ercel",
  },
  {
    id: 8,
    title: "Airbourne",
    description: "Functional Backend for Flight booking application.",
    category: "Backend Development",
    year: "2022",
    image:
      "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "NodeJS",
      "Express",
      "MySQL",
      "Sequelize",
      "RabbitMQ",
      "Nodemailer",
    ],
    keyFeatures: [
      "Database Integration with Sequelize",
      "Message Queuing with AMQP",
      "Microservice architecture",
    ],
    challenges: "Handling mutliple service with API gateway.",
    githubLink: "https://github.com/jsndz/Airbourne",
  },
  {
    id: 9,
    title: "Twitter Backend",
    description: "Functional backend of a twitter.",
    category: "Backend Development",
    year: "2022",
    image:
      "https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["NodeJS", "Express", "MongoDB", "Mongoose"],
    keyFeatures: [
      "Nested comments and likes",
      "Real-time notifications",
      "Database Integration with Mongoose",
    ],
    challenges: "Nested comments and likes.",
    githubLink: "https://github.com/jsndz/twitter",
  },
  {
    id: 10,
    title: "SafeTrace",
    description:
      "A real-time location tracking system using Kafka and modular Go services with live updates via SSE.",
    category: "Backend Development",
    year: "2025",
    image:
      "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "Go",
      "Kafka",
      "React",
      "Postgres",
      "Docker",
      "Kubernetes",
      "SSE",
    ],
    keyFeatures: [
      "Real-time location tracking from frontend",
      "Geo-fencing and proximity detection",
      "Kafka-based communication with multiple consumer services",
      "Live updates via Server-Sent Events (SSE)",
      "Dockerized microservices and Kubernetes-ready",
    ],
    challenges:
      "Coordinating real-time data flow and debugging Kafka consumers.",
    githubLink: "https://github.com/jsndz/safetrace",
  },
  {
    id: 11,
    title: "Signalbus",
    description:
      "Event-driven notification hub that sends real-time email and SMS alerts using Kafka and cloud APIs.",
    category: "Backend Development",
    year: "2025",
    image:
      "https://images.pexels.com/photos/73910/pexels-photo-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "Go",
      "Kafka",
      "Docker",
      "Mailgun",
      "Twilio",
      "Prometheus",
      "Grafana",
    ],
    keyFeatures: [
      "Microservices for Email and SMS notifications",
      "Event distribution using Kafka",
      "Observability with Prometheus and Grafana",
      "CI/CD with GitHub Actions",
      "Deployed on Railway with Docker Compose",
    ],
    challenges: "Reliable message delivery and monitoring Kafka failures.",
    githubLink: "https://github.com/jsndz/signalbus",
  },
  {
    id: 12,
    title: "HypeCard",
    description:
      "Create personalized, AI-generated video business cards using a simple form and automated backend logic.",
    category: "Full-Stack Development",
    year: "2025",
    image:
      "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Supabase",
      "Tavus API",
      "RevenueCat",
      "Vercel",
    ],
    keyFeatures: [
      "AI-generated talking video cards via Tavus API",
      "JWT-based authentication with Supabase Auth",
      "Freemium logic with Pro tier using RevenueCat",
      "User dashboard and video preview/download",
      "Unique shareable video URLs like hypecard.me/abc123",
    ],
    challenges:
      "Integrating third-party APIs (Tavus, RevenueCat) with access control.",
    githubLink: "https://github.com/jsndz/hypecard",
    liveDemo: "https://hypecard.me",
  },
  {
    id: 13,
    title: "Codexa",
    description:
      "An AI-powered GitHub App that performs automated code reviews with static analysis and LLM-driven insights.",
    category: "Developer Tools",
    year: "2025",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: [
      "Node.js",
      "TypeScript",
      "GitHub API",
      "Octokit",
      "tree-sitter",
      "Ollama",
      "Express.js",
    ],
    keyFeatures: [
      "Automated code review on every GitHub push",
      "Static analysis using AST parsing with tree-sitter",
      "Secret detection and API key leak prevention",
      "LLM-based suggestions with contextual explanations",
      "Reports via GitHub Checks with inline annotations",
    ],
    challenges:
      "Combining AST parsing with LLMs for meaningful and actionable feedback.",
    githubLink: "https://github.com/jsndz/codexa",
  },
  {
    id: 14,
    title: "Projector CLI",
    description:
      "A fast and flexible CLI tool to scaffold full-stack projects or custom templates in seconds, helping streamline prototyping and learning.",
    category: "Developer Tools",
    year: "2025",
    image:
      "https://images.pexels.com/photos/6437728/pexels-photo-6437728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Node.js", "TypeScript", "Commander.js", "Inquirer.js"],
    keyFeatures: [
      "Scaffold projects using full-stack or custom templates",
      "Interactive CLI with options to create, view, or delete templates",
      "Auto-generates file structures and runs setup commands",
      "Supports Go + React, Node + TypeScript, and more",
      "Future-ready for remote GitHub template support",
    ],
    challenges:
      "Designed and implemented a modular CLI architecture with support for dynamic templates.",
    githubLink: "https://github.com/jsndz/projector",
  },
  {
    id: 15,
    title: "Mimir – Stateless Telegram Notes Bot",
    description:
      "A zero-database Telegram bot for organizing and sharing study notes (PDFs/images) using folder-like tags. Designed for exam groups and classrooms.",
    category: "Bots",
    year: "2025",
    image:
      "https://images.pexels.com/photos/8438911/pexels-photo-8438911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Node.js", "Telegraf.js", "Render"],
    keyFeatures: [
      "Upload notes using /upload [topic] [subtopic]",
      "Uses Telegram chat history as the archive (no database)",
      "Searchable via Telegram’s built-in search",
      "Lightweight, privacy-friendly, and free to host",
      "Ideal for college groups, exam prep, and subject-wise sharing",
    ],
    challenges:
      "Built a stateless bot that uses Telegram itself as storage and indexing mechanism, avoiding the need for databases or external filesystems.",
    githubLink: "https://github.com/jsndz/mimir",
  },
];
export const rolesConfig = {
  "Software Engineer": {
    projectIds: [
      1, // Noatric – Full-stack ecommerce
      2, // Skysense – Real-time weather with React
      4, // PrimeBoard – Real-time product leaderboard
      5, // Mayaverse – Full-stack collab space with TDD and video calls
      6, // Readit – Reddit clone with microservices & caching
      10, // SafeTrace – Real-time Kafka + SSE system
      11, // Signalbus – Kafka-driven notification microservices
      12, // HypeCard – AI video cards, third-party API integration
    ],
    databases: [
      "/logos/MongoDB.svg",
      "/logos/Mysql.svg",
      "/logos/Postgres.svg",
      "/logos/Redis.svg",
    ],
    languages: [
      "logos/JS.svg",
      "logos/TS.svg",
      "logos/Golang.svg",
      "logos/C.svg",
      "logos/C++.svg",
    ],
    tools: [
      "logos/NodeJS.svg",
      "logos/NextJS.svg",
      "logos/ExpressJs.svg",
      "logos/React.svg",
      "logos/Graphql.svg",
      "logos/SocketIo.svg",
      "logos/Websocket.svg",
    ],
    services: [
      {
        service: "End-to-End Application Development",
        description:
          "Design and develop complete web applications with modern frontend (React, Next.js, ShadCN UI) and backend technologies (Node.js, Go), ensuring smooth client-server communication and optimal user experience.",
      },
      {
        service: "High-Performance API Development & Microservices",
        description:
          "Build scalable REST APIs and GraphQL services using Go, Node.js, and TypeScript, with microservices architecture for modularity and scalability.",
      },
      {
        service: "Database Design, Optimization & Real-Time Data Management",
        description:
          "Architect efficient database schemas and optimize queries using MongoDB, PostgreSQL, MySQL, and Redis, with real-time synchronization powered by WebSockets and Pion WebRTC.",
      },
      {
        service: "Scalable Cloud Deployment & DevOps",
        description:
          "Deploy microservices and applications to cloud platforms (AWS, Vercel, GCP) with Docker , while setting up CI/CD pipelines for seamless integration and delivery.",
      },
      {
        service: "Secure Authentication, Authorization & Data Encryption",
        description:
          "Implement robust authentication mechanisms with JWT, OAuth, and bcrypt, along with role-based access control and secure data encryption.",
      },
    ],
    colors: {
      primary: "#4B5563",
      background: "#FFFFFF",
      secondary: "#2C2F33",
      tertiary: "#99AAB5",
      accent: "#7289DA",
    },
  },
  "Frontend Developer": {
    projectIds: [
      1, // Noatric – React-based ecommerce
      2, // Skysense – Real-time weather app
      4, // PrimeBoard – Visual leaderboard
      5, // Mayaverse – Collab with video chat UI
      6, // Readit – Reddit-style interface
      12, // HypeCard – Form, dashboard, shareable video links
    ],
    languages: [
      "logos/HTML.svg",
      "logos/CSS.svg",
      "logos/JS.svg",
      "logos/TS.svg",
    ],
    databases: [],
    services: [
      {
        service: "Interactive and responsive UI development",
        description:
          "Build visually appealing, interactive user interfaces using React, Next.js, and ShadCN UI, ensuring smooth user experiences across all devices.",
      },
      {
        service: "State management and smooth client-side routing",
        description:
          "Manage complex application state efficiently with Redux and Zustand, while handling client-side routing seamlessly using Next.js.",
      },
      {
        service: "API integration and real-time data fetching",
        description:
          "Integrate REST APIs and GraphQL endpoints with Axios and Fetch, along with real-time updates through WebSockets and Socket.IO.",
      },
      {
        service: "UI animations, transitions, and PWA support",
        description:
          "Enhance user experience with Framer Motion for smooth animations support for offline usage.",
      },
      {
        service: "Cross-browser compatibility and performance optimization",
        description:
          "Ensure cross-browser consistency and optimize performance with lazy loading, code-splitting, and efficient resource management.",
      },
    ],
    tools: ["logos/Tailwind.svg", "logos/NextJS.svg"],
    colors: {
      primary: "#1A73E8",
      background: "#FFFFFF",
      secondary: "#333333",
      tertiary: "#666666",
      accent: "#888888",
    },
  },

  "Backend Developer": {
    projectIds: [
      5, // Mayaverse – TDD, real-time, backend-heavy
      6, // Readit – Go, caching, microservices
      7, // ercel – Redis queue, S3/R2, microservices
      8, // Airbourne – AMQP, microservices
      9, // Twitter Backend – Real-time notif, nested data
      10, // SafeTrace – SSE, Kafka, microservices
      11, // Signalbus – Kafka, Prometheus, Twilio/Mailgun
      13, // Codexa – GitHub app, AST parsing, LLM insights
    ],
    languages: ["logos/TS.svg", "logos/Golang.svg"],
    databases: [
      "/logos/MongoDB.svg",
      "/logos/Mysql.svg",
      "/logos/Postgres.svg",
      "/logos/Redis.svg",
    ],
    tools: [
      "logos/ExpressJs.svg",
      "logos/Graphql.svg",
      "logos/SocketIo.svg",
      "logos/Websocket.svg",
    ],
    services: [
      {
        service:
          "High-performance API development with Go, Node.js, and TypeScript",
        description:
          "Build scalable REST APIs and GraphQL endpoints using Express.js for Node.js and Fiber for Go, with TypeScript for type safety.",
      },
      {
        service:
          "Microservices implementation and service-to-service communication",
        description:
          "Design modular, scalable microservices architecture using Go, Docker, and gRPC, with service discovery and load balancing.",
      },
      {
        service: "Database architecture, indexing, and caching",
        description:
          "Design efficient database schemas with PostgreSQL, MongoDB, and MySQL, optimize queries, and implement caching with Redis.",
      },
      {
        service: "Real-time event handling with WebSocket and Pion WebRTC",
        description:
          "Enable real-time communication for video calls, live chats, and collaborative features using WebSocket and Pion WebRTC.",
      },
      {
        service: "Secure authentication, authorization, and data encryption",
        description:
          "Implement robust security protocols with JWT, OAuth, bcrypt for password hashing, and data encryption for secure access control.",
      },
    ],
    colors: {
      primary: "#1E3A8A",
      background: "#F3F4F6",
      secondary: "#2D3748",
      tertiary: "#4A5568",
      accent: "#718096",
    },
  },

  "Full-Stack Developer": {
    projectIds: [
      1, // Noatric – Full ecom with auth and admin
      4, // PrimeBoard – Leaderboard with real-time updates
      5, // Mayaverse – Real-time chat + video, full-stack infra
      6, // Readit – Microservices + frontend clone
      12, // HypeCard – AI app with frontend + backend
      14, // Projector CLI – CLI that scaffolds full-stack templates
    ],
    databases: [
      "/logos/MongoDB.svg",
      "/logos/Mysql.svg",
      "/logos/Postgres.svg",
      "/logos/Redis.svg",
    ],
    languages: [
      "logos/HTML.svg",
      "logos/CSS.svg",
      "logos/JS.svg",
      "logos/TS.svg",
      "logos/Golang.svg",
    ],
    tools: [
      "logos/Tailwind.svg",
      "logos/NextJS.svg",
      "logos/ExpressJs.svg",
      "logos/MongoDB.svg",
      "logos/Graphql.svg",
      "logos/SocketIo.svg",
      "logos/Websocket.svg",
    ],
    services: [
      {
        service: "End-to-end web application development",
        description:
          "Design and build full-stack applications with React and Next.js for frontend, Go and Node.js for backend, and MongoDB/PostgreSQL for data storage.",
      },
      {
        service: "Database design and optimization",
        description:
          "Architect and optimize database schemas for high performance using PostgreSQL, MongoDB, and MySQL, with proper indexing and relationships.",
      },
      {
        service: "Real-time communication",
        description:
          "Implement real-time features like live chat, video calls, and collaborative apps using WebSocket, Socket.IO, and Pion WebRTC.",
      },
      {
        service: "Scalable microservices architecture and cloud deployment",
        description:
          "Design scalable microservices with Docker and deploy seamlessly to cloud platforms like AWS, Vercel, and GCP.",
      },
      {
        service: "REST API and GraphQL service implementation",
        description:
          "Build powerful APIs with Express.js and GraphQL to handle data fetching and mutations efficiently, ensuring smooth client-server interaction.",
      },
    ],
    colors: {
      primary: "#4B5563",
      background: "#FFFFFF",
      secondary: "#2C2F33",
      tertiary: "#99AAB5",
      accent: "#7289DA",
    },
  },
};
