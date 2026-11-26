import { Link } from "react-router-dom";

export default function NotFoundPage({
  message = "The page you're looking for doesn't exist, or it may have moved.",
}: {
  message?: string;
}) {
  return (
    <main className="min-h-screen bg-[#E0A4B0] text-[#7C0116] flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-xl">
        <p className="font-abril text-8xl md:text-9xl leading-none mb-4">404</p>
        <h1 className="font-abril font-normal text-3xl md:text-4xl mb-4">Oops, wrong slice!</h1>
        <p className="font-montserrat mb-8">{message}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#7C0116] text-[#E0A4B0] border-2 border-[#7C0116] font-montserrat font-semibold hover:bg-[#5e0111] hover:border-[#5e0111] transition-colors"
          >
            Back Home
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center px-6 py-3 bg-[#E0A4B0] text-[#7C0116] border-2 border-[#7C0116] font-montserrat font-semibold hover:bg-[#ebbcc5] transition-colors"
          >
            View my Work
          </Link>
        </div>
      </div>
    </main>
  );
}
