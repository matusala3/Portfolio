"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { inter, playfair, jetbrains } from "@/app/styles/fonts";

export default function Introduction() {
  const typedTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const text = "Hello, World!";
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenLoops = 1500;

    let i = 0;
    let isErasing = false;

    function type() {
      if (typedTextRef.current) {
        if (!isErasing && i <= text.length) {
          typedTextRef.current.textContent = text.substring(0, i);
          i++;
          setTimeout(type, typingSpeed);
        } else if (isErasing && i >= 0) {
          typedTextRef.current.textContent = text.substring(0, i);
          i--;
          setTimeout(type, erasingSpeed);
        } else if (i > text.length) {
          isErasing = true;
          setTimeout(type, delayBetweenLoops);
        } else if (i < 0) {
          isErasing = false;
          i = 0;
          setTimeout(type, delayBetweenLoops);
        }
      }
    }

    const typingTimeout = setTimeout(type, delayBetweenLoops);

    return () => clearTimeout(typingTimeout); // Clean up the timeout
  }, []);

  return (
    <section id="about" className="py-12 md:py-20">
      <div className={`container mx-auto px-4 ${inter.className}`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className={`md:w-1/2 mb-8 md:mb-0 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto group">
              <div className="absolute inset-0 rounded-full bg-[#e0bf5f]/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <Image
                src="/profile.jpg"
                alt="Profile picture of Matusala K. Gebrehiwot"
                width={256}
                height={256}
                className="rounded-full shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-[#e0bf5f] text-[#181818] rounded-full p-2 md:p-4 shadow-lg transition-transform duration-300 hover:scale-110 z-20">
                <code className={`text-xs md:text-sm ${jetbrains.className}`}>
                  <span ref={typedTextRef}></span>
                </code>
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 text-center md:text-left transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1
              className={`text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-[#e0bf5f] ${playfair.className} animate-in fade-in slide-in-from-bottom-4 duration-700`}
            >
              Matusala K. Gebrehiwot
            </h1>
            <h2
              className={`text-xl md:text-2xl text-[#fff] opacity-80 mb-4 font-thin ${playfair.className} animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150`}
            >
              Software Engineering Student
            </h2>
            <p className="text-base md:text-lg mb-6 text-[#fff] leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Software engineering student with 6+ months of professional internship experience
              specializing in designing, developing, and deploying scalable web applications. Proficient in
              modern JavaScript frameworks (React, Next.js, Node.js), relational and NoSQL databases, and
              secure authentication systems. Strong foundation in C/C++ through intensive system programming
              curriculum at Hive Helsinki (42 Network). Demonstrated ability to lead cross-functional teams,
              collaborate with business stakeholders, and deliver production-quality code following SDLC best practices.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[400ms]">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-[#e0bf5f] hover:bg-[#e0bf5f] hover:text-[#181818] bg-[#181818] text-[#e0bf5f] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e0bf5f]/50"
              >
                <a
                  href="https://github.com/matusala3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="bg-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f]/80 border-[#e0bf5f] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e0bf5f]/50"
              >
                <a
                  href="https://www.linkedin.com/in/matusala-gebrehiwot-b0435624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
            </div>
            <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-[500ms]">
              <Button
                asChild
                className="bg-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f]/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e0bf5f]/50"
              >
                <a
                  href="/CV.pdf"
                  download="Matusala_Gebrehiwot_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#e0bf5f] hover:bg-[#e0bf5f] hover:text-[#181818] bg-[#181818] text-[#e0bf5f] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#e0bf5f]/50"
              >
                <a
                  href="/CV.docx"
                  download="Matusala_Gebrehiwot_CV.docx"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span>DOCX</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
