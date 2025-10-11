import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Github } from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";

export default function Projects() {
  const projects = [
    {
      title: "AI-Driven Gamified Learning Platform (Bachelor's Thesis)",
      description: "Adaptive Educational Platform with AI Integration – Backend Lead & Algorithm Developer",
      details: [
        "Leading backend development for AI-powered adaptive learning platform targeting learners aged 7-18 as part of 3-person thesis team (Sep-Dec 2024)",
        "Engineered intelligent assessment system with 36 multi-subject questions (Math, Reading, Science) determining 5-level skill proficiency (Beginner to Expert) based on performance percentages",
        "Architecting simplified database schema (5 essential tables, 40 columns) optimized for thesis demonstration, reducing complexity by 80% while preserving core adaptive learning functionality",
        "Implemented comprehensive assessment flow with user_assessments, user_assessment_answers, and user_skill_levels tables for precise skill tracking and adaptive algorithm input",
        "Designing research-backed gamification system integrated into user profiles: points accumulation, level progression, streak tracking to demonstrate engagement impact on learning motivation",
        "Built automated profile creation system with database triggers: handle_new_user() auto-initializes adaptive learning state, progress tracking, and gamification defaults upon registration",
        "Architected Row-Level Security (RLS) policies across 8 tables with 16+ comprehensive policies ensuring COPPA-compliant privacy, user data isolation, and controlled social feature access",
        "Developing dynamic difficulty crossing system where age-based difficulty levels overlap (e.g., Age 10 'hard' ≈ Age 11 'medium'), maximizing question pool utilization",
        "Planning Phase 2 AI integration with OpenAI/Anthropic APIs for personalized subject recommendations, adaptive hints, difficulty suggestions, and learning pattern analysis",
        "Implementing complete email confirmation flow with enhanced callback routing, smart redirects, welcome experiences, and database synchronization for seamless user onboarding",
      ],
      image: "/hinura.png",
      date: "Sep 2024 – Dec 2024",
      location: "Helsinki, Finland",
      technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Supabase", "AI Integration", "RLS Security", "Tailwind CSS", "shadcn/ui"],
      links: {
        github: "https://github.com/Hinura/Fullstack",
      },
    },
    {
      title: "Speedy-Delivery Project",
      description: "Full Stack Web Delivery Service – Team Lead",
      details: [
        "Led 3-person development team through complete Software Development Life Cycle (SDLC), managing project planning, task allocation, and timeline adherence",
        "Architected and developed four integrated system components: Backend API (Node.js/Express), Consumer Web App (React), Driver App (React), and IoT Locker Simulator",
        "Designed and implemented RESTful API with 20+ endpoints handling user registration, authentication, parcel tracking, real-time status updates, and delivery management",
        "Built real-time tracking system using Socket.io for live parcel location updates and driver-consumer communication",
        "Engineered secure authentication system with JWT tokens (bcrypt hashing/salting) and Google OAuth 2.0 integration using Passport.js",
        "Designed MongoDB database schema with collections for users, parcels, drivers, and lockers, implementing efficient data relationships and indexing strategies",
        "Deployed full application stack to Vercel, configuring environment variables and implementing CI/CD practices",
        "Conducted Proof of Concept (POC) for IoT locker integration, documenting technical findings and feasibility analysis",
      ],
      image: "/speedy.png",
      date: "Oct 2023 – Dec 2023",
      location: "Helsinki, Finland",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Passport.js", "Vercel"],
      links: {
        github: "https://github.com/Speed-Delivery",
      },
    },
    {
      title: "SuomiStay Oy",
      description: "Mobile Booking System – Team Leader",
      details: [
        "Directed 3-person team in developing React Native mobile application for hotel booking system across Finland",
        "Developed complete booking workflow including search functionality, availability checking, reservation system, and booking confirmation",
        "Implemented RESTful API integration connecting mobile frontend with backend services for hotel data and reservation management",
        "Designed responsive mobile UI components following React Native best practices, ensuring smooth user experience across iOS and Android platforms",
        "Managed manual data population for hotel inventory, room types, pricing, and availability information",
        "Conducted unit testing and user acceptance testing (UAT) to ensure application reliability and performance",
        "Coordinated team tasks, facilitated technical discussions, and resolved integration challenges throughout 3-month development cycle",
      ],
      image: "/suomistay.png",
      date: "Apr 2023 – Jun 2023",
      location: "Helsinki, Finland",
      technologies: ["React Native", "Node.js", "RESTful API", "iOS", "Android"],
      links: {
        github: "https://github.com/Mobile-Dev-Project",
      },
    },
    {
      title: "Low-Level System Programming Projects (Hive Helsinki/42)",
      description: "System Architecture & C Programming",
      details: [
        "Minishell: Engineered Unix shell replica in C, implementing process management, pipe operations, redirections, environment variable handling, and signal processing, demonstrating deep understanding of system architecture and OS fundamentals",
        "Push Swap: Developed optimized sorting algorithm in C with maximum efficiency constraints, showcasing advanced data structures and algorithm design skills with complexity analysis",
        "Additional Projects: Completed libft (custom C library), ft_printf (printf implementation), and philosophers (multithreading/synchronization), emphasizing memory management, debugging, and low-level programming proficiency",
      ],
      image: "/cli.jpg",
      date: "Apr 2023 – Jun 2023",
      location: "Helsinki, Finland",
      technologies: ["C", "Unix/Linux", "Shell Scripting", "Process Management", "Memory Management", "Algorithms"],
      links: {
        github: "https://github.com/matusala3",
      },
    },
  ];

  return (
    <section id="projects" className={`py-12 md:py-20 ${inter.className}`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#e0bf5f] ${playfair.className}`}
        >
          Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#181818] border border-[#e0bf5f]/20 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl text-[#e0bf5f]">
                      {project.title}
                    </CardTitle>
                    <p className="text-[#fff] text-base md:text-lg mt-2">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm md:text-base text-[#fff]/80 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-1 text-[#e0bf5f]" />
                        {project.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-1 text-[#e0bf5f]" />
                        {project.location}
                      </span>
                    </div>
                    <div className="mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="mr-2 mb-2 text-sm md:text-base bg-[#e0bf5f]/20 text-[#e0bf5f] border-[#e0bf5f]/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-sm md:text-base text-[#fff] space-y-2 mb-4">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f] hover:text-[#181818]"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
