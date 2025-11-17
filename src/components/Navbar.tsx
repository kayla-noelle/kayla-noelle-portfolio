import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-end gap-6 p-4">
      <Link to="/" className="hover:opacity-70">Home 1</Link>
      <Link to="/about" className="hover:opacity-70">About 1</Link>
      <Link to="/projects" className="hover:opacity-70">Projects 1</Link>
    </nav>
  );
}
