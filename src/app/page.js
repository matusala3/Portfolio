import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#181818] to-[#0a0a0a] text-[#fff] relative overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#e0bf5f]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#e0bf5f]/5 rounded-full blur-[120px]"></div>
      </div>

      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Introduction />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default page;
