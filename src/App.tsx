import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Resume from "./pages/Resume.tsx";
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";

 function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}
export default App;