import { Database, Server, Code2, Star, Zap, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    languages: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        level: "expert",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        level: "expert",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        level: "expert",
      },
      {
        name: "C/C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        level: "advanced",
      },
      {
        name: "HTML/CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        level: "expert",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        level: "advanced",
      },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
        level: "advanced",
      },
      {
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        level: "advanced",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        level: "intermediate",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        level: "intermediate",
      },
    ],
    frameworks: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        level: "expert",
      },
      {
        name: "Django",
        icon: "/djangoLogoLight.svg",
        level: "expert",
      },

      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        level: "expert",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        level: "advanced",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        level: "advanced",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        level: "advanced",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        level: "advanced",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        level: "advanced",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        level: "intermediate",
      },
      {
        name: "AngularJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        level: "intermediate",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        level: "expert",
      },
      { name: "REST API", Component: Server, level: "expert" },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        level: "advanced",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        level: "advanced",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        level: "advanced",
      },
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
        level: "advanced",
      },
      {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
        level: "advanced",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        level: "intermediate",
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        level: "advanced",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        level: "advanced",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        level: "advanced",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
        level: "advanced",
      },
    ],
  };

  interface SkillItem {
    name: string;
    icon?: string;
    Component?: React.ComponentType<{ className?: string }>;
    level: "expert" | "advanced" | "intermediate";
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "text-accent";
      case "advanced":
        return "text-secondary";
      case "intermediate":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getLevelStars = (level: string) => {
    switch (level) {
      case "expert":
        return 3;
      case "advanced":
        return 2;
      case "intermediate":
        return 1;
      default:
        return 0;
    }
  };

  const SkillCard = ({
    title,
    items,
    icon: Icon,
  }: {
    title: string;
    items: SkillItem[];
    icon: React.ComponentType<{ className?: string }>;
  }) => (
    <div className="group relative bg-gradient-to-br from-card to-card/80 border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02]">
      {/* Header with icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="group/skill flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-background/50 to-background/30 border border-border/30 hover:border-accent/40 hover:bg-gradient-to-r hover:from-accent/5 hover:to-secondary/5 transition-all duration-200"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              {item.icon ? (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 group-hover/skill:scale-110 transition-transform duration-200"
                />
              ) : item.Component ? (
                <item.Component className="w-6 h-6 text-accent group-hover/skill:scale-110 transition-transform duration-200" />
              ) : null}
            </div>

            {/* Name and Level */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground truncate">
                  {item.name}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < getLevelStars(item.level)
                          ? getLevelColor(item.level)
                          : "text-muted-foreground/30"
                      }`}
                      fill={
                        i < getLevelStars(item.level) ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="text-xs text-muted-foreground capitalize">
                {item.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="pb-16" id="my-skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across different
          domains
        </p>
        <div className="mx-auto mt-6 w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <SkillCard
          title="Programming Languages"
          items={skills.languages.map((lang) => ({
            ...lang,
            level:
              lang.level === "expert" ||
              lang.level === "advanced" ||
              lang.level === "intermediate"
                ? lang.level
                : "intermediate",
          }))}
          icon={Code2}
        />
        <SkillCard
          title="Frameworks & Libraries"
          items={skills.frameworks.map((framework) => ({
            ...framework,
            level:
              framework.level === "expert" ||
              framework.level === "advanced" ||
              framework.level === "intermediate"
                ? framework.level
                : "intermediate",
          }))}
          icon={Zap}
        />
        <SkillCard
          title="Developer Tools"
          items={skills.tools.map((tool) => ({
            ...tool,
            level:
              tool.level === "expert" ||
              tool.level === "advanced" ||
              tool.level === "intermediate"
                ? tool.level
                : "intermediate",
          }))}
          icon={Cpu}
        />
        <SkillCard
          title="Databases & Storage"
          items={skills.databases.map((database) => ({
            ...database,
            level:
              database.level === "expert" ||
              database.level === "advanced" ||
              database.level === "intermediate"
                ? database.level
                : "intermediate",
          }))}
          icon={Database}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
