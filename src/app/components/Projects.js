import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Github } from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";

export default function Projects() {
  const projects = [
    {
      title: "Speedy-Delivery Project",
      description: "Full Stack Web Delivery Service – Team Leader",
      details: [
        "Spearheaded the development of a comprehensive parcel delivery system, overseeing four key components:",
        "Backend API: Led the design and implementation using Node.js and Express",
        "Consumer Application: Directed the development of a React-based user application",
        "Driver Application: Supervised a React-based tool for delivery drivers",
        "Locker Simulator: Developed a simulator to emulate parcel locker operations",
      ],
      image: "/Speedy.jpg",
      date: "Oct 2023 – Dec 2023",
      location: "Helsinki, Finland",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      links: {
        github: "https://github.com/Speed-Delivery",
      },
    },
    {
      title: "SuomiStay Oy",
      description: "Mobile Booking System – Team Leader",
      details: [
        "Led the creation of a mobile application for hotel bookings across Finland, focusing on five main components:",
        "Project Planning and Coordination: Defined objectives and coordinated team tasks",
        "Front-End Development: Supervised UI development with React Native",
        "Agile Methodologies: Implemented agile practices such as sprint planning",
        "Quality Assurance: Implemented unit and integration tests",
        "Deployment and Maintenance: Oversaw app store deployment",
      ],
      image: "/suomistay.jpg",
      date: "Apr 2023 – Jun 2023",
      location: "Helsinki, Finland",
      technologies: ["React Native", "Node.js", "GraphQL", "AWS"],
      links: {
        github: "https://github.com/Mobile-Dev-Project",
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
                <div className="md:w-1/3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#e0bf5f]">
                      {project.title}
                    </CardTitle>
                    <p className="text-[#fff] mt-1">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-[#fff]/80 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-[#e0bf5f]" />
                        {project.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-[#e0bf5f]" />
                        {project.location}
                      </span>
                    </div>
                    <div className="mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="mr-2 mb-2 bg-[#e0bf5f]/20 text-[#e0bf5f] border-[#e0bf5f]/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-sm text-[#fff] space-y-1 mb-4">
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
