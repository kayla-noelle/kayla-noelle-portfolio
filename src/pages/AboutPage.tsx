import About from "../components/sections/About";
import Footer from "../components/sections/Footer";

/** The homepage's About section as its own page. */
export default function AboutPage() {
  return (
    <>
      {/* pt-16 clears the fixed navbar */}
      <div className="bg-[#E0A4B0] pt-16">
        <About />
      </div>
      <Footer />
    </>
  );
}
