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
      title: "Distributed File System",
      description:
        "Developed a working distributed file server with an HTTP/REST API similar to Amazon S3. " +
        "The system implements robust file storage with read, write, and delete operations for both files " +
        "and directories. Built on a custom Unix-style file system implementation with on-disk data " +
        "structures including inodes, bitmaps, and a directory structure, ensuring crash consistency " +
        "and proper error handling.",
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
        "Rivas Pro Painting Inc. – a modern, user-friendly website designed to showcase the company's services, highlight past projects, and make it easy for potential customers to get in touch. The site features a project gallery, service details, and a contact form for requesting a free quote directly from the owner.",
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
        "Developed a custom web server from scratch in C++, capable of handling HTTP requests, serving static files, and implementing secure file path validation. Gained hands-on experience with socket programming, HTTP protocols, and low-level file I/O operations.",
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
      title: "Social Media Post Processing Pipeline",
      description:
        "Designed and implemented a microservice-based pipeline for processing social media posts from Bluesky. " +
        "The system consists of two Spring Boot microservices: a Moderation Service that filters posts containing banned words " +
        "and a Hashtag Service that uses LLAMA-3 to generate relevant hashtags for posts. " +
        "This architecture demonstrates proficiency in designing distributed systems, implementing microservice patterns, " +
        "and integrating AI capabilities into practical applications.",
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
        "Implemented a collection of core Unix utilities (cat, grep, zip, unzip) from scratch in C++. " +
        "Each utility was built using low-level system calls such as open(), read(), write(), and close() " +
        "rather than high-level C++ streams. The project demonstrates deep understanding of file I/O, " +
        "command-line argument processing, and run-length encoding compression algorithms while maintaining " +
        "proper error handling and POSIX-compliant behavior.",
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
      title: "Redis Persistence Framework",
      description:
        "Developed a custom Java persistence framework that leverages reflection and annotations " +
        "to seamlessly store and retrieve objects in Redis. The framework implements advanced " +
        "features like lazy loading through dynamic proxies, session-based persistence management, " +
        "and annotation-based object mapping. Built with clean architecture principles, it " +
        "demonstrates mastery of Java reflection, runtime annotations, and design patterns while " +
        "maintaining high code quality and separation of concerns.",
      image: "/redis-framework.webp",
      githubLink: "https://github.com/Dieg0raf/Redis-Persistence-Framework", // TODO: Update this link after approval to share
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

  // Helper: get a short description (first sentence or 120 chars)
  const getShortDescription = (desc: string) => {
    const firstPeriod = desc.indexOf(".");
    if (firstPeriod !== -1 && firstPeriod < 120) {
      return desc.slice(0, firstPeriod + 1);
    }
    return desc.length > 120 ? desc.slice(0, 120) + "..." : desc;
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
