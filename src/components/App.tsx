import Navbar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="relative z-10 container mx-auto px-4 pb-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}
