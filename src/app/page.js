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
    <div className="min-h-screen bg-[#181818] text-[#fff]">
      <Header />
      <main className="container mx-auto px-4 py-8">
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
