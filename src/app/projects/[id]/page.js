"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar, MapPin, Github, ArrowLeft,
  Monitor, Server, Database, Lock,
  Workflow, Code2, Layers, Users,
  CheckCircle2, Settings
} from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";

// Project data with organized technical architecture
const projectsData = {
  "hinura-thesis": {
    title: "AI-Driven Gamified Learning Platform (Bachelor's Thesis)",
    description: "Adaptive Educational Platform with AI Integration – Backend Lead & Algorithm Developer",
    summary: "Leading backend development for an AI-powered adaptive learning platform targeting learners aged 7-18. Features intelligent assessment system, gamification elements, and adaptive difficulty algorithms based on educational research.",
    image: "/hinura.png",
    date: "Sep 2024 – Dec 2024",
    location: "Helsinki, Finland",
    teamSize: "3 members",
    role: "Backend Lead & Algorithm Developer",
    github: "https://github.com/Hinura/Fullstack",

    techStack: {
      frontend: {
        tools: ["Next.js 14", "TypeScript", "React 19", "Tailwind CSS", "shadcn/ui"],
        description: "Built with modern Next.js App Router architecture, TypeScript for type safety, and Tailwind CSS with shadcn/ui components for responsive, accessible UI design."
      },
      backend: {
        tools: ["Next.js API Routes", "Supabase Functions", "TypeScript"],
        description: "Serverless backend using Next.js 14 API routes with TypeScript, handling authentication, assessment delivery, progress tracking, and adaptive difficulty adjustment."
      },
      database: {
        tools: ["PostgreSQL", "Supabase"],
        description: "Simplified 5-table schema (profiles, assessment_questions, user_assessments, user_assessment_answers, user_skill_levels) optimized for thesis scope, reducing complexity by 80% while maintaining core functionality."
      },
      security: {
        tools: ["Supabase Auth", "Row-Level Security (RLS)", "JWT Tokens"],
        description: "Comprehensive RLS policies across 8 tables with 16+ rules ensuring COPPA-compliant privacy, user data isolation, and controlled social features. Automated database triggers for profile initialization."
      },
      deployment: {
        tools: ["Vercel", "CI/CD", "Environment Variables"],
        description: "Deployed on Vercel with automated CI/CD pipeline, serverless functions, and secure environment configuration for seamless production deployment."
      }
    },

    keyFeatures: [
      {
        title: "Intelligent Assessment System",
        items: [
          "36 multi-subject questions across Math, Reading, and Science",
          "5-level skill proficiency determination (Beginner to Expert)",
          "Performance-based scoring with percentage thresholds",
          "Comprehensive tracking via user_assessments and user_assessment_answers tables"
        ]
      },
      {
        title: "Adaptive Learning Algorithm",
        items: [
          "Based on Zone of Proximal Development theory (Vygotsky, 1978)",
          "Knowledge Tracing implementation (Corbett & Anderson, 1994)",
          "Dynamic difficulty crossing: age-based levels overlap (e.g., Age 10 'hard' ≈ Age 11 'medium')",
          "Skill level adjustments based on assessment performance and user progress"
        ]
      },
      {
        title: "Gamification System",
        items: [
          "Points accumulation system integrated into user profiles",
          "Level progression tracking for motivation",
          "Streak tracking for consistent engagement",
          "Research-backed design to demonstrate impact on learning motivation"
        ]
      },
      {
        title: "Database Architecture",
        items: [
          "Automated profile creation with handle_new_user() trigger",
          "Auto-initialization of adaptive learning state and progress tracking",
          "Email confirmation flow with callback routing and welcome experiences",
          "Database synchronization for seamless user onboarding"
        ]
      },
      {
        title: "Phase 2 AI Integration (Planned)",
        items: [
          "OpenAI/Anthropic API integration for personalized recommendations",
          "Adaptive hints based on learner performance and context",
          "Difficulty suggestions with reasoning for transparency",
          "Learning pattern analysis identifying strengths and weaknesses"
        ]
      }
    ],

    achievements: [
      "Reduced database complexity by 80% (from 11 tables to 5) while preserving core research functionality",
      "Architected comprehensive RLS security framework with 16+ policies for COPPA compliance",
      "Implemented automated database triggers for seamless user onboarding and initialization",
      "Designed dynamic difficulty system maximizing question pool utilization across age groups",
      "Built assessment system capable of precise 5-level skill determination across 3 subjects"
    ]
  },

  "speedy-delivery": {
    title: "Speedy-Delivery Project",
    description: "Full Stack Web Delivery Service – Team Lead",
    summary: "Led 3-person development team building a full-stack web delivery service with real-time tracking, IoT locker integration, and secure authentication. Managed complete SDLC from planning to deployment.",
    image: "/speedy.png",
    date: "Oct 2023 – Dec 2023",
    location: "Helsinki, Finland",
    teamSize: "3 members",
    role: "Team Lead & Full Stack Developer",
    github: "https://github.com/Speed-Delivery",

    techStack: {
      frontend: {
        tools: ["React", "JavaScript", "CSS3", "Responsive Design"],
        description: "Two separate React applications: Consumer Web App for order management and Driver App for delivery operations. Built with responsive design for desktop and mobile."
      },
      backend: {
        tools: ["Node.js", "Express.js", "RESTful API", "Socket.io"],
        description: "20+ RESTful endpoints handling user registration, authentication, parcel tracking, and delivery management. Real-time communication via Socket.io for live tracking updates."
      },
      database: {
        tools: ["MongoDB", "Mongoose ODM"],
        description: "NoSQL database with collections for users, parcels, drivers, and lockers. Efficient data relationships and indexing strategies for optimal query performance."
      },
      security: {
        tools: ["JWT", "bcrypt", "Google OAuth 2.0", "Passport.js"],
        description: "Secure authentication with JWT tokens, bcrypt password hashing/salting, and Google OAuth 2.0 integration using Passport.js middleware for social login."
      },
      realtime: {
        tools: ["Socket.io", "WebSocket"],
        description: "Real-time tracking system providing live parcel location updates and bidirectional driver-consumer communication for delivery status changes."
      },
      deployment: {
        tools: ["Vercel", "Environment Variables", "CI/CD"],
        description: "Full application stack deployed to Vercel with configured environment variables and continuous integration/deployment practices."
      }
    },

    keyFeatures: [
      {
        title: "System Architecture",
        items: [
          "Four integrated components: Backend API, Consumer Web App, Driver App, IoT Locker Simulator",
          "RESTful API with 20+ endpoints for comprehensive functionality",
          "Modular architecture allowing independent scaling of components",
          "Complete SDLC management from planning to deployment"
        ]
      },
      {
        title: "Real-Time Tracking",
        items: [
          "Live parcel location updates via Socket.io WebSocket connections",
          "Bidirectional driver-consumer communication for status updates",
          "Real-time notifications for delivery events and status changes",
          "Efficient event-driven architecture for instant updates"
        ]
      },
      {
        title: "Authentication & Security",
        items: [
          "JWT token-based authentication with refresh token rotation",
          "bcrypt password hashing with salt rounds for security",
          "Google OAuth 2.0 social login integration",
          "Role-based access control for consumers, drivers, and admins"
        ]
      },
      {
        title: "IoT Integration (POC)",
        items: [
          "Proof of Concept for smart locker integration",
          "IoT Locker Simulator for testing parcel pickup/dropoff",
          "Technical feasibility analysis and documentation",
          "API endpoints designed for future hardware integration"
        ]
      }
    ],

    achievements: [
      "Led 3-person team through complete SDLC with successful on-time delivery",
      "Architected and deployed 4 integrated system components to production",
      "Implemented real-time tracking reducing customer inquiries by enabling self-service",
      "Designed scalable MongoDB schema supporting efficient queries across collections",
      "Conducted successful POC demonstrating IoT locker integration feasibility"
    ]
  },

  "suomistay": {
    title: "SuomiStay Oy",
    description: "Mobile Booking System – Team Leader",
    summary: "Directed 3-person team developing a React Native mobile booking application for hotels across Finland. Built complete booking workflow with RESTful API integration and cross-platform UI.",
    image: "/suomistay.png",
    date: "Apr 2023 – Jun 2023",
    location: "Helsinki, Finland",
    teamSize: "3 members",
    role: "Team Leader & Mobile Developer",
    github: "https://github.com/Mobile-Dev-Project",

    techStack: {
      frontend: {
        tools: ["React Native", "JavaScript", "iOS", "Android"],
        description: "Cross-platform mobile application built with React Native, ensuring consistent UI/UX across iOS and Android devices. Responsive design optimized for various screen sizes."
      },
      backend: {
        tools: ["Node.js", "RESTful API"],
        description: "RESTful API integration connecting mobile frontend with backend services for hotel data retrieval, availability checking, and reservation management."
      },
      mobile: {
        tools: ["React Native Components", "Navigation", "State Management"],
        description: "Native mobile UI components following React Native best practices, custom navigation flows, and efficient state management for smooth user experience."
      },
      testing: {
        tools: ["Unit Testing", "User Acceptance Testing (UAT)"],
        description: "Comprehensive testing strategy including unit tests for components and User Acceptance Testing to ensure application reliability and performance."
      }
    },

    keyFeatures: [
      {
        title: "Complete Booking Workflow",
        items: [
          "Search functionality with filters for location, dates, and amenities",
          "Real-time availability checking across hotel inventory",
          "Reservation system with booking confirmation and notifications",
          "User-friendly booking management and history tracking"
        ]
      },
      {
        title: "Cross-Platform Mobile UI",
        items: [
          "Responsive design working seamlessly on iOS and Android",
          "Native-feeling UI components following platform guidelines",
          "Smooth animations and transitions for better UX",
          "Optimized performance for various device specifications"
        ]
      },
      {
        title: "API Integration",
        items: [
          "RESTful API endpoints for hotel data and reservations",
          "Efficient data fetching and caching strategies",
          "Error handling and retry logic for network resilience",
          "Secure communication with backend services"
        ]
      },
      {
        title: "Data Management",
        items: [
          "Manual data population for hotel inventory across Finland",
          "Room types, pricing, and availability information",
          "Hotel amenities and facilities cataloging",
          "Image assets and property descriptions"
        ]
      }
    ],

    achievements: [
      "Directed 3-person team through successful 3-month development cycle",
      "Delivered cross-platform mobile app working on both iOS and Android",
      "Implemented complete booking workflow from search to confirmation",
      "Conducted thorough UAT ensuring high application reliability",
      "Managed data population for comprehensive hotel inventory across Finland"
    ]
  },

  "hive-projects": {
    title: "Low-Level System Programming Projects (Hive Helsinki/42)",
    description: "System Architecture & C Programming",
    summary: "Completed intensive low-level programming projects including Unix shell implementation, optimized sorting algorithms, and multithreading challenges. Focused on system architecture, memory management, and algorithm design.",
    image: "/cli.jpg",
    date: "Apr 2023 – Jun 2023",
    location: "Helsinki, Finland",
    teamSize: "Individual Projects",
    role: "System Programmer",
    github: "https://github.com/matusala3",

    techStack: {
      languages: {
        tools: ["C", "Shell Scripting", "Makefile"],
        description: "Pure C programming following 42 Network coding standards. No external libraries allowed, emphasizing deep understanding of system calls and low-level operations."
      },
      systemProgramming: {
        tools: ["Unix/Linux System Calls", "POSIX Standards", "Process Management"],
        description: "Direct use of Unix/Linux system calls for process creation, file operations, signal handling, and inter-process communication."
      },
      tools: {
        tools: ["GDB", "Valgrind", "Make", "Git"],
        description: "Debugging with GDB, memory leak detection with Valgrind, build automation with Make, and version control with Git."
      },
      concepts: {
        tools: ["Memory Management", "Algorithms", "Data Structures", "Concurrency"],
        description: "Manual memory allocation/deallocation, algorithm optimization, efficient data structure implementation, and thread synchronization."
      }
    },

    keyFeatures: [
      {
        title: "Minishell - Unix Shell Replica",
        items: [
          "Process management: fork(), execve(), wait() for command execution",
          "Pipe operations (|) for inter-process communication",
          "Input/output redirections (<, >, <<, >>)",
          "Environment variable handling ($PATH, $HOME, custom variables)",
          "Signal processing (SIGINT, SIGQUIT) for proper shell behavior",
          "Built-in commands (cd, echo, pwd, export, unset, env, exit)",
          "Demonstrates deep understanding of OS fundamentals and system architecture"
        ]
      },
      {
        title: "Push Swap - Optimized Sorting Algorithm",
        items: [
          "Sorting algorithm using two stacks with restricted operations",
          "Maximum efficiency constraints (3 numbers: ≤3 ops, 5 numbers: ≤12 ops)",
          "Algorithm complexity analysis and optimization",
          "Custom data structure implementation for stacks",
          "Advanced problem-solving with limited operation set",
          "Demonstrates algorithm design and complexity analysis skills"
        ]
      },
      {
        title: "Libft - Custom C Library",
        items: [
          "Implementation of standard C library functions from scratch",
          "String manipulation (strlen, strcpy, strdup, etc.)",
          "Memory operations (memset, memcpy, memmove, etc.)",
          "Character checking and conversion functions",
          "Linked list implementation and manipulation",
          "Foundation for all subsequent projects"
        ]
      },
      {
        title: "ft_printf - Printf Implementation",
        items: [
          "Custom implementation of printf with variadic functions",
          "Format specifier parsing (%c, %s, %d, %i, %u, %x, %X, %p)",
          "Buffer management for efficient output",
          "Flag and width handling for formatting",
          "Demonstrates understanding of variadic arguments and formatting"
        ]
      },
      {
        title: "Philosophers - Multithreading & Synchronization",
        items: [
          "Dining philosophers problem implementation with threads",
          "Mutex usage for resource synchronization",
          "Deadlock prevention and race condition avoidance",
          "Thread creation and lifecycle management",
          "Precise timing with gettimeofday() for simulation accuracy",
          "Demonstrates concurrent programming and synchronization mastery"
        ]
      }
    ],

    achievements: [
      "Completed intensive 42 Network curriculum emphasizing system-level programming",
      "Built Unix shell replica demonstrating OS and system architecture mastery",
      "Developed highly optimized sorting algorithm meeting strict complexity requirements",
      "Implemented complete C standard library from scratch without external dependencies",
      "Solved complex multithreading synchronization problems (dining philosophers)",
      "Gained deep proficiency in memory management, debugging, and low-level programming"
    ]
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const project = projectsData[params.id];

  if (!project) {
    return (
      <div className={`min-h-screen bg-[#181818] py-20 ${inter.className}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl font-bold text-[#e0bf5f] mb-4 ${playfair.className}`}>
            Project Not Found
          </h1>
          <Button
            variant="outline"
            onClick={() => router.push("/#projects")}
            className="border-[#e0bf5f] text-[#e0bf5f] hover:bg-[#e0bf5f]/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  // Icon mapping for tech stack categories
  const techStackIcons = {
    frontend: Monitor,
    backend: Server,
    database: Database,
    security: Lock,
    deployment: Workflow,
    realtime: Code2,
    mobile: Monitor,
    testing: CheckCircle2,
    languages: Code2,
    systemProgramming: Server,
    tools: Settings,
    concepts: Layers
  };

  return (
    <div className={`min-h-screen bg-[#181818] py-12 md:py-20 ${inter.className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.push("/#projects")}
          className="mb-6 text-[#e0bf5f] hover:bg-[#e0bf5f]/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className={`text-3xl md:text-5xl font-bold text-[#e0bf5f] mb-4 ${playfair.className}`}>
            {project.title}
          </h1>
          <p className="text-[#fff]/80 text-lg md:text-xl mb-4">{project.description}</p>

          {/* Project Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-[#fff]/80 mb-4">
            <span className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#e0bf5f]" />
              {project.date}
            </span>
            <span className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-[#e0bf5f]" />
              {project.location}
            </span>
            <span className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-[#e0bf5f]" />
              {project.teamSize}
            </span>
          </div>

          <Badge className="bg-[#e0bf5f]/20 text-[#e0bf5f] border-[#e0bf5f]/50 text-base px-4 py-2">
            {project.role}
          </Badge>
        </div>

        {/* Project Image */}
        <Card className="bg-[#181818] border border-[#e0bf5f]/20 overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover"
          />
        </Card>

        {/* Project Overview */}
        <Card className="bg-[#181818] border border-[#e0bf5f]/20 mb-8">
          <CardHeader>
            <CardTitle className={`text-2xl md:text-3xl text-[#e0bf5f] ${playfair.className}`}>
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#fff] text-base md:text-lg leading-relaxed">
              {project.summary}
            </p>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <div className="mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold text-[#e0bf5f] mb-6 ${playfair.className}`}>
            Technical Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(project.techStack).map(([category, data]) => {
              const IconComponent = techStackIcons[category] || Layers;
              return (
                <Card key={category} className="bg-[#181818] border border-[#e0bf5f]/20 hover:border-[#e0bf5f]/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-[#e0bf5f]">
                      <IconComponent className="w-6 h-6" />
                      <span className="capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {data.tools.map((tool, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-[#e0bf5f]/10 text-[#e0bf5f] border-[#e0bf5f]/30"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-[#fff]/80 text-sm md:text-base leading-relaxed">
                      {data.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold text-[#e0bf5f] mb-6 ${playfair.className}`}>
            Key Features & Implementation
          </h2>
          <div className="space-y-6">
            {project.keyFeatures.map((feature, idx) => (
              <Card key={idx} className="bg-[#181818] border border-[#e0bf5f]/20">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-[#e0bf5f]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#e0bf5f] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#fff]/90 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <Card className="bg-[#181818] border border-[#e0bf5f]/20 mb-8">
          <CardHeader>
            <CardTitle className={`text-2xl md:text-3xl text-[#e0bf5f] ${playfair.className}`}>
              Key Achievements & Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#e0bf5f] mr-3 font-bold text-xl">✓</span>
                  <span className="text-[#fff] text-base md:text-lg leading-relaxed flex-1">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* GitHub Link */}
        <div className="flex justify-center">
          <Button
            variant="default"
            size="lg"
            asChild
            className="bg-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f]/90 hover:scale-105 transition-all duration-300"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
