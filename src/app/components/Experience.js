import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { inter, playfair } from "@/app/styles/fonts";

export default function Experience() {
  const experiences = [
    {
      company: "ETA Solutions",
      position: "Software Engineering Intern",
      location: "Addis Ababa, Ethiopia",
      date: "July 2024 – Aug 2024",
      responsibilities: [
        "Developed and maintained responsive web applications using HTML, CSS, and JavaScript (React), ensuring mobile and cross-browser compatibility.",
        "Collaborated with design and engineering teams to create a balance between functional and aesthetic design.",
        "Implemented reusable code components, reducing development time by 30%.",
        "Participated in debugging and testing phases, achieving a 20% reduction in error rates.",
      ],
    },
    {
      company: "AISEC",
      position: "Content Developer",
      location: "Addis Ababa, Ethiopia",
      date: "Mar 2020 - Nov 2020",
      responsibilities: [
        "Designed content-driven websites, enhancing user experience through efficient navigation.",
        "Produced multimedia content, including videos and infographics, to support digital content strategies.",
        "Conducted industry trend analysis to inform content direction, boosting website traffic by 20%.",
      ],
    },
  ];

  return (
    <section id="experience" className={`py-12 md:py-20 ${inter.className}`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#e0bf5f] ${playfair.className}`}
        >
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-[#181818] border border-[#e0bf5f]/20 hover:border-[#e0bf5f]/50 transition-colors"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <CardTitle className="text-xl md:text-2xl text-[#e0bf5f] mb-2 md:mb-0">
                    {exp.position}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="text-[#e0bf5f] border-[#e0bf5f]"
                  >
                    {exp.company}
                  </Badge>
                </div>
                <p className="text-sm text-[#fff] opacity-80">
                  {exp.location} | {exp.date}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-[#fff]">
                      <span className="w-2 h-2 bg-[#e0bf5f] rounded-full mr-2 mt-2"></span>
                      <span>{resp}</span>
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
