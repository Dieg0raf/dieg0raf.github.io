import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

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
          name: "Next.js",
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
      title: "TCP Congestion Control Implementation",
      description:
        "Developed a Python-based implementation of TCP congestion control algorithms, leveraging Docker to introduce latency. The project simulates the behavior of algorithms such as TCP Reno, TCP Tahoe, Stop-and-Wait, and Fixed Sliding Window.",
      image: "/tcpImg.png",
      githubLink:
        "https://github.com/Dieg0raf/TCP-Congestion-Control-Implementation",
      techStack: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
      ],
    },
    {
      title: "Wish Shell",
      description:
        "Developed a custom shell implementation in C++ using system calls to understand " +
        "operating system process management. This project features command execution, " +
        "process creation, program switching, and I/O redirection. Through this implementation, " +
        "I gained deep insights into how operating systems handle process creation, program " +
        "execution, and file descriptor manipulation.",
      image: "/wish-shell.png",
      githubLink:
        "https://github.com/Dieg0raf/ECS150-2025-Winter/blob/main/projects/project_2/wish.cpp",
      techStack: [
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
      ],
    },
    {
      title: "Rivas Pro Painting v2",
      description:
        "Rivas Pro Painting Inc. – a modern, user-friendly website designed to showcase the company’s services, highlight past projects, and make it easy for potential customers to get in touch. The site features a project gallery, service details, and a contact form for requesting a free quote directly from the owner.",
      image: "/RivasSite.png",
      demoLink: "https://rivas-pro-painting.com",
      demoWord: "Live Site",
      githubLink: "https://github.com/Dieg0raf/RivasProPainting-v2",
      techStack: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Django",
          icon: "/djangoLogoLight.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      title: "Redis Persistence Framework",
      description:
        "Developed a custom Java persistence framework that leverages reflection and annotations " +
        "to seamlessly store and retrieve objects in Redis. The framework implements advanced " +
        "features like lazy loading through dynamic proxies, session-based persistence management, " +
        "and annotation-based object mapping. Built with clean architecture principles, it " +
        "demonstrates mastery of Java reflection, runtime annotations, and design patterns while " +
        "maintaining high code quality and separation of concerns.",
      image: "/redis-framework.webp",
      githubLink: "https://github.com/Dieg0raf/ECS160-Winter-HW-2", // TODO: Update this link after approval to share
      techStack: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
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
    <section id="my-projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative h-[400px] lg:h-full min-h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent lg:hidden" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {project.title}
                  </h3>

                  <div className="prose prose-invert max-w-none mb-8 flex-grow">
                    <p className="text-gray-300 whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack?.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group relative flex items-center bg-gray-700/50 rounded-lg px-3 py-2"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-5 h-5 mr-2"
                        />
                        <span className="text-sm text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />{" "}
                        {project.demoWord || "Live Demo"}
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <Github size={16} /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
