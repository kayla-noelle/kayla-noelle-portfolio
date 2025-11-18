import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-end gap-6 p-4">
      <Link to="/" className="hover:opacity-70">Home</Link>
      <Link to="/about" className="hover:opacity-70">About</Link>
      <Link to="/resume" className="hover:opacity-70">Resume</Link>
      <Link to="/contact" className="hover:opacity-70">Contact</Link>
    </nav>
  );
}
