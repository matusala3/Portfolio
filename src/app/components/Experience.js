import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { inter, playfair } from "@/app/styles/fonts";

export default function Experience() {
  const experiences = [
    {
      company: "ZKHAUTO",
      position: "Software Development Engineering Intern",
      location: "Helsinki, Finland",
      date: "July 2024 – Present",
      responsibilities: [
        "Designed, developed, and deployed end-to-end car dealership web application from scratch using Next.js, Node.js/Express, and MongoDB, following Software Development Life Cycle (SDLC) and Agile methodology",
        "Engineered secure RESTful API with 15+ endpoints managing vehicle inventory, customer data, and dealership operations, implementing data validation using express validator to ensure data integrity",
        "Implemented comprehensive authentication and authorization system using JWT with bcrypt hashing/salting and Google OAuth 2.0 via Passport.js, adhering to secure coding practices",
        "Integrated Google Cloud Storage API for high-quality vehicle image management, resolving complex bucket configuration challenges and optimizing storage architecture",
        "Designed and implemented relational database schema with normalized tables, establishing efficient data relationships and query optimization strategies",
        "Conducted unit testing using Jest framework and performed system integration testing, achieving robust error handling and debugging throughout development lifecycle",
        "Collaborated in code reviews with engineering team, providing and incorporating technical feedback to maintain code quality standards and SOLID principles",
        "Applied problem determination methodologies to troubleshoot and resolve application defects, performing root cause analysis on critical issues",
      ],
    },
    {
      company: "ETA Solutions",
      position: "Software Development Engineering Intern",
      location: "Addis Ababa, Ethiopia",
      date: "June 2024 – Aug 2024",
      responsibilities: [
        "Developed user-facing interfaces for Point-of-Sale (POS) and cash register system using React focusing on user experience (UX) optimization for both customer and business workflows",
        "Collaborated with business partners to gather and define detailed business requirements, translating stakeholder needs into technical specifications",
        "Designed and implemented responsive UI components with HTML/CSS ensuring cross-browser compatibility and mobile responsiveness",
        "Participated in Agile sprint planning and daily standups, contributing to iterative development process and team collaboration",
        "Conducted usability testing and incorporated user feedback to enhance interface design, improving overall customer satisfaction",
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
              className="bg-[#181818] border border-[#e0bf5f]/20 hover:border-[#e0bf5f]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#e0bf5f]/10 hover:-translate-y-1"
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
