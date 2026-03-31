import { useNavigate } from "react-router-dom";
import sky from "../assets/sky1.png";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img src={sky} alt="background" className="absolute inset-0 w-full h-full object-top"/>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-[var(--font-heading)] text-[var(--color-primary)]">
          BookShelf
        </h1>
        <p className="mt-4 text-lg md:text-xl font-[var(--font-heading)] text-[var(--color-primary)] opacity-80">
          A peaceful place to explore stories
        </p>
        <button className="mt-8 bg-[var(--color-secondary)] text-primary px-6 py-2 rounded-full" onClick={() => navigate("/home")}>
            Explore
        </button>
      </div>
    </section>
  );
}