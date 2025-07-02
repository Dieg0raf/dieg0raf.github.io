import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "CaMooRa",
      description:
        "Developed a platform for UC Davis students to easily connect with photographers, streamlining the booking process and improving campus event coverage.",
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
      title: "Distributed File System",
      description:
        "Built a distributed file server with a custom Unix-style file system, supporting robust file operations and crash consistency.",
      image: "/dfs-project.webp",
      githubLink:
        "https://github.com/Dieg0raf/ECS150-2025-Winter/tree/main/projects/project_4/gunrock_web",
      techStack: [
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "HTTP/REST",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "File Systems",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
      ],
    },
    {
      title: "Rivas Pro Painting v2",
      description:
        "Created a modern website for a painting company, featuring a project gallery, service details, and a direct contact form for quotes.",
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
      title: "Custom Web Server",
      description:
        "Implemented an HTTP web server in C++ to handle static files and secure file path validation, gaining hands-on experience with sockets and protocols.",
      image: "/webserver.png",
      githubLink: "https://github.com/Dieg0raf/web_server",
      demoWord: "GitHub Repository",
      techStack: [
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Sockets",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
        },
      ],
    },
    {
      title: "Wish Shell",
      description:
        "Developed a custom shell in C++ to understand OS process management, including command execution and I/O redirection.",
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
      title: "Social Media Post Processing Pipeline",
      description:
        "Designed a microservice pipeline for Bluesky posts, using AI for moderation and hashtag generation to demonstrate distributed systems skills.",
      image: "/pipeline.webp",
      githubLink:
        "https://github.com/Dieg0raf/Social-Media-Post-Processing-Pipeline",
      techStack: [
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        },
        {
          name: "LLAMA-3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", // Using PyTorch icon as a stand-in for LLMs
        },
        {
          name: "Microservices",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", // Using Docker icon as it's commonly associated with microservices
        },
      ],
    },

    {
      title: "Unix Utilities Implementation",
      description:
        "Recreated core Unix utilities (cat, grep, zip, unzip) in C++ using low-level system calls, demonstrating deep understanding of file I/O and POSIX standards.",
      image: "/unix-image.webp",
      githubLink:
        "https://github.com/Dieg0raf/ECS150-2025-Winter/tree/main/projects/project_1",
      techStack: [
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Unix/Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
      ],
    },
    {
      title: "TCP Congestion Control Implementation",
      description:
        "Simulated TCP congestion control algorithms in Python and Docker, visualizing network behavior and protocol performance.",
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
      title: "Redis Persistence Framework",
      description:
        "Built a Java framework for object persistence in Redis, leveraging reflection, annotations, and clean architecture principles.",
      image: "/redis-framework.webp",
      githubLink: "https://github.com/Dieg0raf/Redis-Persistence-Framework",
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
        "Developed a lineage-based database from scratch as a group project, implementing core database concepts and storage techniques.",
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
        "Created a Django REST API for users to track daily calorie intake, supporting account creation and secure logging.",
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
        "Simulated cache memory behavior using Logisim, demonstrating understanding of caching principles and digital logic.",
      image: "/logismImg.png",
      githubLink: "https://github.com/Dieg0raf/Cache-Implementation",
    },

    // ... other projects
  ];

  // Helper: get a short description (first sentence or 200 chars) (able to change depending on the project)
  const getShortDescription = (desc: string) => {
    const firstPeriod = desc.indexOf(".");
    if (firstPeriod !== -1 && firstPeriod < 200) {
      return desc.slice(0, firstPeriod + 1);
    }
    return desc.length > 200 ? desc.slice(0, 200) + "..." : desc;
  };

  return (
    <section id="my-projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center text-foreground">
          Featured Projects
        </h2>
        <div className="mx-auto mb-12 w-24 h-1 bg-accent rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {projects.map((project, index) => {
            const mainLink = project.demoLink || project.githubLink;
            return (
              <a
                key={index}
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
                tabIndex={0}
                aria-label={`View project: ${project.title}`}
              >
                <Card className="bg-card border border-gray-700 shadow-lg group-hover:scale-[1.025] group-hover:shadow-2xl group-focus-within:scale-[1.025] group-focus-within:shadow-2xl group-active:scale-[1.015] group-active:shadow-xl transition-all duration-200 rounded-xl overflow-hidden flex flex-col cursor-pointer focus-within:ring-2 focus-within:ring-primary/60 h-full">
                  <div className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-48 bg-background flex items-center justify-center border-b border-gray-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 gap-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.techStack &&
                          project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="flex items-center gap-1 px-2 py-1 bg-accent/20 text-white border border-gray-700 rounded-full text-xs font-medium"
                            >
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-4 h-4"
                              />
                              {tech.name}
                            </span>
                          ))}
                      </div>
                      <div className="mb-4 flex-1">
                        {getShortDescription(project.description)}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-accent hover:bg-primary text-accent-foreground font-semibold rounded-md transition-colors shadow"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />{" "}
                            {project.demoWord || "Live Demo"}
                          </a>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-accent/20 hover:bg-accent text-white border border-gray-700 font-semibold rounded-md transition-colors shadow"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
