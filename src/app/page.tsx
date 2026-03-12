
import { Hero } from "@/components/sections/Hero";
import { StrategicProfile } from "@/components/sections/StrategicProfile";
import { Capabilities } from "@/components/sections/Capabilities";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StrategicProfile />
      <Capabilities />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
