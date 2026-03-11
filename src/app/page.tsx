
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { StrategyArchitect } from "@/components/sections/StrategyArchitect";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Capabilities />
      <Projects />
      <Experience />
      <StrategyArchitect />
      <Contact />
    </main>
  );
}
