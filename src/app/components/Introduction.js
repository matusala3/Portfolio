"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { inter, playfair, jetbrains } from "@/app/styles/fonts";

export default function Introduction() {
  const typedTextRef = useRef(null); // Use ref to target the span element

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
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <Image
                src="/profile.jpg"
                alt="Profile picture of Matusala K. Gebrehiwot"
                width={256}
                height={256}
                className="rounded-full shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-[#e0bf5f] text-[#181818] rounded-full p-2 md:p-4">
                <code className={`text-xs md:text-sm ${jetbrains.className}`}>
                  <span ref={typedTextRef}></span>
                </code>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1
              className={`text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-[#e0bf5f] ${playfair.className}`}
            >
              Matusala K. Gebrehiwot
            </h1>
            <h2
              className={`text-xl md:text-2xl text-[#fff] opacity-80 mb-4 font-thin ${playfair.className}`}
            >
              Software Engineering Student
            </h2>
            <p className="text-base md:text-lg mb-6 text-[#fff]">
              Motivated and technically skilled 3rd-year Software Engineering
              student with hands-on experience in software development,
              particularly in full-stack web and mobile applications. Excellent
              in C++, Java, and low-level programming, with a strong interest in
              computer systems architecture and microprocessor fundamentals.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f] hover:text-[#181818]"
              >
                <a
                  href="https://github.com/matusala3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f] hover:text-[#181818]"
              >
                <a
                  href="https://www.linkedin.com/in/matusala-gebrehiwot-b0435624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
            </div>
            <Button
              asChild
              className="bg-[#e0bf5f] text-[#181818] hover:bg-[#e0bf5f]/80"
            >
              <a
                href="/CV.docx"
                download="CV.docx"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
