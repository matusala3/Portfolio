import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-[#fff] py-6 md:py-8 border-t border-[#e0bf5f]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Matusala K. Gebrehiwot. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/YourGitHubUsername"
              className="text-[#fff] hover:text-[#e0bf5f] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/YourLinkedInUsername"
              className="text-[#fff] hover:text-[#e0bf5f] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://YourWebsite.com"
              className="text-[#fff] hover:text-[#e0bf5f] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
