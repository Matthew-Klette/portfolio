import Nav from "@/components/Nav";
import Doors from "@/components/hero/Doors";
import Work from "@/components/sections/Work";
import Builds from "@/components/builds/Builds";
import Stack from "@/components/sections/Stack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Doors />
        <Work />
        <Builds />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
