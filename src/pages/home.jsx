import "../App.css";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/project";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
