import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing. Features include shopping cart functionality, order tracking, and admin dashboard.",
      image: "/api/placeholder/400/250",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/example/project",
      techStack: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
      ],
    },
    // ... other projects
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col min-h-[500px] bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors"
          >
            <CardHeader className="p-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group relative flex items-center"
                      title={tech.name}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                      />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
