"use client";

import { motion, MotionConfig } from "framer-motion";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";
import Hobbies from "@/components/Hobbies";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}
    >
      <ScrollProgress />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Hobbies />
      <SectionDivider />
      <Contact />
      <Footer />
    </motion.div>
    </MotionConfig>
  );
}