import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <Work />
        <Skills />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
