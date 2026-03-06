import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>

      <ScrollProgress />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      <Footer />

    </main>
  );
}

