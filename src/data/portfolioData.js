export const personalData = {
  name: "SANKET DUDHADE",
  title: "Java Developer & Full Stack Engineer",
  subtitle: "Architecting resilient Spring Boot microservices, high-throughput REST APIs & modern web applications.",
  location: "Nashik, Maharashtra, India",
  phone: "+91 8888338317",
  email: "dudhadesanket378@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  availability: "Full-Time Roles & High-Impact Contracts",
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Savitribai Phule Pune University",
      location: "Nashik, Maharashtra",
      period: "Sep 2022 - Sep 2026",
      score: "CGPA: 8.65 / 10",
      highlight: "Specializing in Distributed Systems & Software Engineering"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shree Ganesh Junior College",
      location: "Korhale, Maharashtra",
      period: "Completed",
      score: "76%",
      highlight: "Science Stream with Mathematics Focus"
    }
  ],
  internship: {
    role: "Trainee Engineer",
    company: "CodeForSuccess",
    period: "Feb 2025 - May 2025",
    bullets: [
      "Developed RESTful APIs using Java, Spring Boot, Spring Data JPA, and MySQL following layered architecture.",
      "Built backend services with efficient database design, complex SQL queries, and transaction management.",
      "Integrated backend APIs with React applications for seamless full-stack state management.",
      "Utilized Docker for microservices containerization and Git for collaborative team development."
    ]
  },
  certifications: [
    {
      title: "AWS Academy Cloud Architecting",
      issuer: "AWS Academy",
      badge: "Cloud Architecture"
    },
    {
      title: "Java Programming Certification",
      issuer: "Oracle / Professional Institute",
      badge: "Core & Advanced Java"
    }
  ]
};

export const projectsData = [
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Backend Microservices",
    category: "Backend / Microservices",
    tagline: "Scalable Java 21 distributed backend with Spring Cloud API Gateway & Razorpay Payment Integration.",
    github: "https://github.com",
    demo: "#",
    techStack: ["Java 21", "Spring Boot", "Spring Cloud", "Eureka", "Spring Security", "MySQL", "Razorpay", "Docker"],
    featured: true,
    highlights: [
      "Architected 5 core microservices: Auth Service, Product Service, Cart Service, Order Service & Payment Gateway Service.",
      "Integrated Spring Cloud Gateway for centralized API routing and Eureka Server for dynamic service discovery.",
      "Implemented JWT Spring Security authentication with role-based access control.",
      "Integrated Razorpay Payment Gateway API with centralized exception handling and DTO pattern mapping."
    ],
    architecture: `
┌──────────────────┐
│  Client / React  │
└────────┬─────────┘
         │ HTTP/HTTPS
┌────────▼──────────────────────────────────────────────┐
│        Spring Cloud API Gateway (Port 8080)           │
└────────┬──────────────────────────────────────────────┘
         │ Service Discovery (Eureka Server)
 ┌───────┼────────────────────┬────────────────────┐
 │       │                    │                    │
▼       ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Auth Service │    │Product Service│   │ Order Service│    │Payment Gateway│
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                   │                   │
  ┌────▼───┐          ┌────▼───┐          ┌────▼───┐          ┌────▼───┐
  │ MySQL  │          │ MySQL  │          │ MySQL  │          │ Razorpay│
  └────────┘          └────────┘          └────────┘          └────────┘
    `
  },
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    category: "Backend / Java",
    tagline: "High-concurrency movie ticketing API engine with seat locking and transactional booking workflows.",
    github: "https://github.com",
    demo: "#",
    techStack: ["Java 21", "Spring Boot 3", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "Maven", "Postman"],
    featured: true,
    highlights: [
      "Developed a robust RESTful backend for real-time theater seat reservation, show scheduling, and instant ticket issuance.",
      "Engineered transactional seat-locking logic using pessimistic database locks to prevent double-booking during peak traffic.",
      "Built structured CRUD APIs across Shows, Theaters, Seats, and Bookings following layered Controller-Service-Repository architecture.",
      "Designed clean DTO request/response mapping with global exception handling and custom business error codes."
    ],
    architecture: `
┌─────────────────────────┐
│  Client / API Client    │
└────────────┬────────────┘
             │ HTTP / REST APIs (JSON)
┌────────────▼──────────────────────────────────────────┐
│      Spring Boot Controller Layer (@RestController)   │
└────────────┬──────────────────────────────────────────┘
             │ DTO Validation & Exception Handler
┌────────────▼──────────────────────────────────────────┐
│      Service Layer (@Service) - Seat Lock Engine      │
└────────────┬──────────────────────────────────────────┘
             │ Spring Data JPA / Hibernate ORM
┌────────────▼──────────────────────────────────────────┐
│      Database Layer (MySQL) - Pessimistic Locks      │
└───────────────────────────────────────────────────────┘
    `
  },
  {
    id: "cloud-file-handling",
    title: "Cloud File Storage & Management System",
    category: "Full Stack",
    tagline: "Secure cloud document storage engine with multipart uploads, real-time search & responsive UI.",
    github: "https://github.com",
    demo: "#",
    techStack: ["Java 21", "Spring Boot", "Spring Data JPA", "MySQL", "React", "Tailwind CSS", "REST APIs"],
    featured: true,
    highlights: [
      "Built high-speed multipart upload & download APIs supporting large file streaming.",
      "Designed real-time file search filtering, grid preview, and defensive state synchronization.",
      "Engineered frontend with React and Tailwind CSS matching responsive cloud storage dashboards."
    ]
  }
];

export const skillsCategories = [
  {
    title: "Backend & Core",
    icon: "Server",
    skills: [
      { name: "Java 21 / Core Java", level: "95%", badge: "Expert" },
      { name: "Spring Boot 3.x", level: "90%", badge: "Expert" },
      { name: "Microservices Architecture", level: "88%", badge: "Advanced" },
      { name: "RESTful API Design", level: "92%", badge: "Expert" },
      { name: "Spring Data JPA & Hibernate", level: "90%", badge: "Advanced" },
      { name: "Spring Cloud & Eureka", level: "85%", badge: "Advanced" }
    ]
  },
  {
    title: "Databases & Messaging",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "90%", badge: "Advanced" },
      { name: "Apache Kafka", level: "75%", badge: "Intermediate" },
      { name: "Spring Security & JWT", level: "85%", badge: "Advanced" },
      { name: "Data Structures & Algorithms", level: "88%", badge: "Strong" }
    ]
  },
  {
    title: "Frontend & Web",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "82%", badge: "Proficient" },
      { name: "Tailwind CSS", level: "85%", badge: "Proficient" },
      { name: "Visual Design & UI/UX", level: "80%", badge: "Proficient" },
      { name: "JavaScript / HTML5", level: "85%", badge: "Proficient" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "Cpu",
    skills: [
      { name: "Docker & Containerization", level: "80%", badge: "Proficient" },
      { name: "AWS Cloud (Architecting)", level: "78%", badge: "Certified" },
      { name: "Git & GitHub", level: "90%", badge: "Advanced" },
      { name: "Postman & API Testing", level: "92%", badge: "Expert" }
    ]
  }
];

export const testimonials = [
  {
    quote: "Sanket delivered outstanding Spring Boot microservices code that exceeded our performance expectations. His backend architecture design is clean and resilient.",
    author: "Technical Mentor",
    role: "Lead Engineer @ CodeForSuccess",
    rating: 5
  },
  {
    quote: "Extremely skilled in Java 21, REST APIs, and database optimization. Sanket brings exceptional problem-solving drive to complex enterprise projects.",
    author: "Project Guide",
    role: "SPPU Computer Science Dept",
    rating: 5
  }
];
