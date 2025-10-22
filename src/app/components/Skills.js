"use client";

import Image from "next/image";
import { inter, playfair } from "@/app/styles/fonts";

export default function Skills() {
  const skillsRow1 = [
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  ];

  const skillsRow2 = [
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/FFFFFF" },
    { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "C", logo: "https://cdn.simpleicons.org/c/00599C" },
    { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "Jest", logo: "https://cdn.simpleicons.org/jest/C21325" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/FFFFFF" },
  ];

  const SkillCard = ({ skill }) => {
    return (
      <div className="group relative flex-shrink-0 mx-4 py-4">
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-[#181818] border border-[#e0bf5f]/20 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:border-[#e0bf5f] group-hover:shadow-2xl group-hover:shadow-[#e0bf5f]/50 group-hover:bg-[#1f1f1f]">
          <div className="relative w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="text-[#fff] text-sm text-center px-2 font-medium transition-colors duration-300 group-hover:text-[#e0bf5f]">
            {skill.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className={`py-12 md:py-20 ${inter.className}`}>
      <div className="container mx-auto px-4 mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 text-[#e0bf5f] ${playfair.className}`}
        >
          Skills & Technologies
        </h2>
        <p className="text-center text-[#fff]/70 mb-12">
          Hover over any skill to pause and explore
        </p>
      </div>

      {/* First Row - Scrolls Left to Right */}
      <div className="relative mb-8 py-8">
        <div className="flex overflow-x-hidden overflow-y-visible">
          <div className="flex animate-scroll-left hover:pause-animation">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Scrolls Right to Left */}
      <div className="relative py-8">
        <div className="flex overflow-x-hidden overflow-y-visible">
          <div className="flex animate-scroll-right hover:pause-animation">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
