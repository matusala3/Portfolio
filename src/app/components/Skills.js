import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Server, Brain } from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "JavaScript", level: 90 },
      { name: "C/C++", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
    "Frameworks & Tools": [
      { name: "React/Next.js", level: 90 },
      { name: "Node.js/Express", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Spring Boot", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Jest", level: 80 },
    ],
    "Development Practices": [
      { name: "RESTful API Design", level: 90 },
      { name: "Agile/SDLC", level: 85 },
      { name: "Unit Testing", level: 85 },
      { name: "Code Review", level: 80 },
      { name: "Authentication (JWT/OAuth)", level: 85 },
      { name: "System Architecture", level: 80 },
      { name: "Debugging & Root Cause Analysis", level: 90 },
      { name: "Problem-solving", level: 95 },
    ],
  };

  const getIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return <Code className="w-6 h-6 text-[#e0bf5f]" />;
      case "Frameworks & Tools":
        return <Server className="w-6 h-6 text-[#e0bf5f]" />;
      case "Development Practices":
        return <Brain className="w-6 h-6 text-[#e0bf5f]" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className={`py-12 md:py-20 ${inter.className}`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#e0bf5f] ${playfair.className}`}
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card
              key={category}
              className="bg-[#181818] border border-[#e0bf5f]/20 hover:border-[#e0bf5f]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#e0bf5f]/10 hover:-translate-y-1"
            >
              <CardHeader className="flex flex-row items-center space-x-2">
                {getIcon(category)}
                <CardTitle
                  className={`text-xl md:text-2xl text-[#e0bf5f] ${playfair.className}`}
                >
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {skillList.map((skill, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#fff]">{skill.name}</span>
                        <span className="text-[#e0bf5f] text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName="bg-[#e0bf5f] transition-all"
                        backgroundColor="bg-[#e0bf5f]/10"
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
