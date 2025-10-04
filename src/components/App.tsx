import Navbar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import ProjectsPage from "../pages/ProjectPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        </Routes>
      </main>
    </div>
  );
}
