import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Grants } from "./components/Grants";
import { Publications } from "./components/Publications";
import { CommunityService } from "./components/CommunityService";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Grants />
        <Publications />
        <CommunityService />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
