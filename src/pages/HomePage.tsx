import StackSection from "../components/StackSection";
import Home from "../components/sections/Home";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

/** Hero, selected work, then contact. */
export default function HomePage({ isLoaded }: { isLoaded: boolean }) {
  return (
    <>
      {/* Each StackSection pins in place while the next one slides over it */}
      <StackSection>
        <Home isLoaded={isLoaded} />
      </StackSection>
      <StackSection><Projects /></StackSection>
      {/* The About section (bio, skills, experience) lives on /about */}
      <StackSection>
        <Contact />
        <Footer />
      </StackSection>
    </>
  );
}
