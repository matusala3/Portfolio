import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Target, BarChart } from "lucide-react";
import { inter, playfair } from "@/app/styles/fonts";

export default function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Objects & Design",
    "Machine Learning",
    "Object-Oriented Programming",
    "Statistics & Applications",
    "Database Systems",
    "System Architecture",
  ];

  return (
    <section
      id="education"
      className={`py-16 md:py-24 bg-gradient-to-b from-[#121212] to-[#1e1e1e] ${inter.className}`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#e0bf5f] ${playfair.className}`}
        >
          Education
        </h2>
        <Card className="bg-[#1e1e1e] border border-[#f5c842]/30 rounded-lg shadow-lg overflow-hidden">
          <CardHeader className="bg-[#f5c842]/10 border-b border-[#f5c842]/20 p-6">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-10 h-10 text-[#f5c842]" />
              <div>
                <CardTitle className="text-2xl md:text-3xl text-[#f5c842]">
                  Oulu University of Applied Science
                </CardTitle>
                <p className="text-[#dcdcdc] mt-1 text-sm md:text-base">
                  B.S. in Information Technology
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-[#dcdcdc]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-[#f5c842]" />
                <div>
                  <p className="font-bold text-sm md:text-base mb-1">
                    Expected Graduation
                  </p>
                  <p className="text-sm md:text-base">June 2026</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-[#f5c842]" />
                <div>
                  <p className="font-bold text-sm md:text-base mb-1">
                    Concentration
                  </p>
                  <p className="text-sm md:text-base">Software Engineering</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart className="w-6 h-6 text-[#f5c842]" />
                <div>
                  <p className="font-bold text-sm md:text-base mb-1">GPA</p>
                  <p className="text-sm md:text-base">4.3/5.00</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg md:text-xl mb-4 text-[#f5c842] flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                Related Coursework
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {courses.map((course, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-3 py-2 text-sm md:text-base text-[#dcdcdc] border-[#f5c842]/50 bg-[#f5c842]/10 hover:bg-[#f5c842]/20 transition duration-200 rounded-lg"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
