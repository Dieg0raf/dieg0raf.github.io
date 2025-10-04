import { Database, Server, Code2, Bug } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    languages: [
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
    ],
    frameworks: [
      {
        name: "Django",
        icon: "/djangoLogoLight.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Vite JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      },
    ],
    tools: [
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      },
      {
        name: "GDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gnu/gnu-original.svg",
      },
      {
        name: "LLDB",
        Component: Bug,
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      },
      { name: "REST API", Component: Server },
      { name: "tRPC", Component: Code2 },
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      { name: "AWS S3", Component: Database },
    ],
  };

  interface SkillItem {
    name: string;
    icon?: string;
    Component?: React.ComponentType<{ className?: string }>;
  }

  // Helper to show only top N or all
  const getDisplay = (arr: SkillItem[]) => arr;

  const SkillCard = ({
    title,
    items,
  }: {
    title: string;
    items: SkillItem[];
  }) => (
    <div className="bg-card rounded-lg p-6 border border-gray-700 shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-2 rounded-lg"
          >
            {item.icon ? (
              <img src={item.icon} alt={item.name} className="w-7 h-7" />
            ) : item.Component ? (
              <item.Component className="w-7 h-7 text-accent" />
            ) : null}
            <span className="text-xs text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="pb-16" id="my-skills">
      <h2 className="text-3xl font-bold mb-2 text-center text-foreground">
        Technical Skills
      </h2>
      <div className="mx-auto mb-8 w-20 h-1 bg-accent rounded-full" />
      <div className="grid md:grid-cols-2 gap-6">
        <SkillCard title="Languages" items={getDisplay(skills.languages)} />
        <SkillCard
          title="Frameworks & Libraries"
          items={getDisplay(skills.frameworks)}
        />
        <SkillCard title="Developer Tools" items={getDisplay(skills.tools)} />
        <SkillCard title="Databases" items={getDisplay(skills.databases)} />
      </div>
    </section>
  );
};

export default SkillsSection;
