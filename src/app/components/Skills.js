import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Server, Brain } from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "C/C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 75 },
      { name: "HTML/CSS", level: 90 },
    ],
    "Systems/Frameworks": [
      { name: "Linux", level: 80 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "React", level: 85 },
      { name: "Express.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
    "Key Skills": [
      { name: "Test automation", level: 80 },
      { name: "Debugging", level: 85 },
      { name: "System architecture", level: 75 },
      { name: "Agile methodologies", level: 80 },
      { name: "Problem-solving", level: 90 },
      { name: "Team collaboration", level: 85 },
    ],
  };

  const getIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return <Code className="w-6 h-6 text-[#e0bf5f]" />;
      case "Systems/Frameworks":
        return <Server className="w-6 h-6 text-[#e0bf5f]" />;
      case "Key Skills":
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
              className="bg-[#181818] border border-[#e0bf5f]/20 hover:border-[#e0bf5f]/50 transition-colors"
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
