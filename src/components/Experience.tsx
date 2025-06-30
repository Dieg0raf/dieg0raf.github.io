import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Intern & Part-Time)",
      company: "Trinchero Family Estates",
      icon: "/tfe-logo-2.png",
      location: "Lodi, CA",
      duration: "June 2024 – Present",
      description: (
        <>
          <div className="mb-8 text-muted-foreground text-base">
            Served as a{" "}
            <span className="font-semibold text-accent">
              Full Stack Developer Intern
            </span>{" "}
            (June–August 2024, June–August 2025) and{" "}
            <span className="font-semibold text-accent">
              Part-Time Developer
            </span>{" "}
            (August–December 2024), working on accessibility, backend, and
            infrastructure projects for Sutter Home and other company sites.
          </div>
          <ul className="list-disc list-inside space-y-1 mb-8">
            <li>
              Developed AWS Lambda functions for One Stop Wine Shop eCommerce
              site (<span className="text-yellow-400 font-bold">840k+</span>{" "}
              yearly views,{" "}
              <span className="text-yellow-400 font-bold">330k+</span> users),
              automating data transfers to third-party services including
              Algolia and Yotpo.
            </li>
            <li>
              Built shopping feed scripts for Facebook/Google Merchant to
              increase visibility and drive sales for wine-selling sites.
            </li>
            <li>
              Managed Cloudflare DNS for WP Engine sites and integrated Solid
              Security Pro to fortify website defenses while handling backend
              integrations.
            </li>
            <li>
              Enhanced accessibility for multiple company sites, including Napa
              Cellars Wine (
              <span className="text-yellow-400 font-bold">120k+</span> yearly
              views, <span className="text-yellow-400 font-bold">71k+</span>{" "}
              users), implementing semantic HTML, ARIA roles, and keyboard
              navigation to ensure WCAG compliance.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver accessibility
              upgrades that improved usability and site performance while
              reducing bounce rates.
            </li>
          </ul>
          <div className="text-muted-foreground text-sm mt-2">
            <em>
              Rehired for multiple terms due to strong performance and impact on
              key projects.
            </em>
          </div>
        </>
      ),
      responsibilities: [],
      technologies: [
        "Cloudflare",
        "GES",
        "AWS Lambda",
        "Solid Security Pro",
        "Algolia",
        "Yotpo",
        "PHP",
        "WordPress",
        "WP Engine",
        "Local By FlyWheel",
        "FileZilla",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "ASUCD Pantry",
      icon: "/pantry-logo.png",
      location: "Davis, CA",
      duration: "September 2022 - October 2024",
      description: (
        <>
          Developed and maintained the ASUCD Pantry website, a platform that
          provides food and resources to UC Davis students in need.
        </>
      ),
      responsibilities: [
        <>
          Developed agile strategies to improve system flexibility for{" "}
          <span className="text-yellow-400 font-bold">1600+</span> users.
        </>,
        <>
          Led development of the ASUCD Pantry website, a platform that provides
          food and resources to UC Davis students in need.
        </>,
        <>
          Developed a user-friendly interface for students to browse and request
          items from the pantry.
        </>,
        <>
          Led weekly stand-ups, collaborating with the team to review code and
          build a positive culture.
        </>,
      ],
      technologies: ["React", "Django", "PostgreSQL"],
    },
  ];

  return (
    <section id="my-experience">
      <h2 className="text-3xl font-bold mb-2 text-center text-foreground">
        Experience
      </h2>
      <div className="mx-auto mb-8 w-20 h-1 bg-accent rounded-full" />
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const companyUrl =
            exp.company === "Trinchero Family Estates"
              ? "https://www.tfewines.com/"
              : exp.company === "ASUCD Pantry"
              ? "https://thepantry.ucdavis.edu/"
              : undefined;
          const cardContent = (
            <Card className="bg-card border border-gray-700 shadow-lg group-hover:scale-[1.025] group-hover:shadow-2xl group-focus-within:scale-[1.025] group-focus-within:shadow-2xl group-active:scale-[1.015] group-active:shadow-xl transition-all duration-200 rounded-xl cursor-pointer focus-within:ring-2 focus-within:ring-primary/60">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
                  <div>
                    <div className="flex items-center gap-3 text-white font-bold text-2xl">
                      {exp.icon && (
                        <img
                          src={exp.icon}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 rounded-full bg-background border border-gray-700 object-cover shrink-0"
                        />
                      )}
                      {exp.company === "Trinchero Family Estates" ? (
                        <a
                          href="https://www.tfewines.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline focus-visible:underline outline-none"
                          aria-label="Visit Trinchero Family Estates website"
                        >
                          <span className="leading-tight">{exp.company}</span>
                        </a>
                      ) : exp.company === "ASUCD Pantry" ? (
                        <a
                          href="https://thepantry.ucdavis.edu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline focus-visible:underline outline-none"
                          aria-label="Visit ASUCD Pantry website"
                        >
                          <span className="leading-tight">{exp.company}</span>
                        </a>
                      ) : (
                        <span className="leading-tight">{exp.company}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground leading-tight mt-1">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-1 md:min-w-[200px] mt-4 md:mt-0">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm md:text-base">
                      <Calendar size={18} className="inline-block mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm md:text-base">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/20 rounded-full text-sm text-white border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
          return companyUrl ? (
            <a
              key={index}
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              tabIndex={0}
              aria-label={`Visit ${exp.company} website`}
            >
              {cardContent}
            </a>
          ) : (
            <div key={index} className="group">
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
