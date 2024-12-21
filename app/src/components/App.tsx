import ProjectShowcase from "./ProjectShowCase";
import Landing from "./Landing";

function App() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background grid overlay for consistency with Landing component */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <main className="relative z-10 max-w-5xl mx-auto px-4 py-8">
          <Landing />
          <ProjectShowcase />
        </main>
      </div>
    </div>
  );
}

export default App;
