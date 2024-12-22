import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "CaMooRa",
      description:
        "Currently, developing CaMooRa, an app that helps UC Davis students easily find and connect with the best photographers for their needs. The platform is designed to be simple and user-friendly, removing unnecessary hurdles and making connections effortless.",
      image: "/logo.svg",
      demoLink: "https://camoora.io",
      githubLink: "https://github.com/winzamark123/caMOOra",
      demoWord: "Live Site",
      techStack: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "tRPC",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "AWS S3 & CloudFront",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
      ],
    },
    {
      title: "Rivas Pro Painting",
      description:
        "Rivas Pro Painting Inc. web application – a dynamic and user-friendly platform developed to streamline operations for a painting company.",
      image: "/RivasSite.png",
      githubLink: "https://github.com/dieg0raf/RivasProPainting",
      techStack: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "Django",
          icon: "/djangoLogoLight.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      title: "L-Store Database",
      description:
        "L-Store is a lineage-based database designed and written from scratch. This was a group project created from material of UCDavis's Database class (ECS 165).",
      image: "/MemoryBufferDisk.png",
      githubLink: "https://github.com/Dieg0raf/LStore_Database",
      techStack: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
      ],
    },
    {
      title: "Calorie Tracker",
      description:
        "Calorie Tracker api is a Django REST API that allows users to track their daily calorie intake. Users can create an account, log in, and track their daily calorie intake.",
      image: "/djangoImg.jpg",
      githubLink: "https://github.com/Dieg0raf/Calorie-Tracker",
      techStack: [
        {
          name: "Django",
          icon: "/djangoLogoLight.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      title: "Cache Implementation",
      description:
        "Created a simple cache system that simulates the behavior of a cache memory. The cache is implemented using logism simulator.",
      image: "/logismImg.png",
      githubLink: "https://github.com/Dieg0raf/Cache-Implementation",
    },
    // ... other projects
  ];

  return (
    <section id="my-projects">
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
                  {project.techStack &&
                    project.techStack.map((tech, techIndex) => (
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
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <ExternalLink size={16} /> {project.demoWord || "Demo"}
                    </a>
                  )}

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
    </section>
  );
};

export default ProjectShowcase;
