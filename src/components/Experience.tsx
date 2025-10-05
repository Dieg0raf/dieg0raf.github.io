import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Trinchero Family Estates",
      icon: "/tfe-logo-2.png",
      location: "Lodi, CA",
      duration: "Sept 2024 - Present",
      type: "Full-Time",
      achievements: [
        "Built and maintained <span class='text-accent font-semibold'>60+ winery websites</span> (<span class='text-accent font-semibold'>15+ e-commerce</span>), including sites generating <span class='text-accent font-semibold'>$1.8M</span>, <span class='text-accent font-semibold'>$580k</span>, and <span class='text-accent font-semibold'>$165k</span>",
        "Led hosting/framework migrations and manage AWS infrastructure for high-traffic e-commerce sites (One Stop Wine Shop: <span class='text-accent font-semibold'>330k+ users</span>; Napa Cellars Wine: <span class='text-accent font-semibold'>71k+ users</span>), improving reliability and security",
        "Developed automation scripts and optimized backend workflows using Python, JavaScript, PHP, streamlining operations and enhancing user engagement",
      ],
      technologies: [
        "Python",
        "JavaScript",
        "React",
        "AWS",
        "Cloudflare",
        "WordPress",
        "PHP",
      ],
      companyUrl: "https://www.tfewines.com/",
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Trinchero Family Estates",
      icon: "/tfe-logo-2.png",
      location: "Lodi, CA",
      duration: "June 2024 - Aug 2024",
      type: "Internship",
      achievements: [
        "Built AWS Lambda functions integrating Commerce7 CMS with Algolia and Yotpo, automating workflows and saving <span class='text-accent font-semibold'>50+ hours</span> of manual work weekly",
        "Improved Sutter Home website accessibility, raising WCAG compliance from <span class='text-accent font-semibold'>40% to 90%</span>, reducing ADA risk and enhancing inclusivity",
        "Enhanced front-end and back-end functionality using JavaScript, React, PHP and WordPress, ensuring a stable and seamless user experience",
      ],
      technologies: [
        "AWS",
        "Algolia",
        "Yotpo",
        "WordPress",
        "Commerce7",
        "JavaScript",
        "PHP",
      ],
      companyUrl: "https://www.tfewines.com/",
    },
    {
      title: "Full Stack Engineer",
      company: "ASUCD Pantry",
      icon: "/pantry-logo.png",
      location: "Davis, CA",
      duration: "Sept 2023 - Oct 2024",
      type: "Student Organization",
      achievements: [
        "Developed and deployed a React/Django-based ordering platform for <span class='text-accent font-semibold'>1,600+ students</span>, streamlining order processing and supporting ASUCD Pantry's mission to address student food insecurity",
        "Optimized API endpoints using Django views and Axios, and contributed to Nginx deployment, ensuring reliable production release",
      ],
      technologies: ["React", "Django", "PostgreSQL", "Axios", "Nginx"],
      companyUrl: "https://thepantry.ucdavis.edu/",
    },
  ];

  return (
    <section id="my-experience" className="pb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Professional Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building impactful solutions across diverse industries and
          technologies
        </p>
        <div className="mx-auto mt-6 w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="group bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.01] rounded-2xl overflow-hidden"
          >
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-4 sm:p-6 border-b border-border/30">
                <div className="flex flex-col gap-4">
                  {/* Company and Logo Row */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={exp.icon}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background border border-border/50 object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground truncate">
                          {exp.company}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors flex-shrink-0"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 break-words">
                        {exp.title}
                      </h4>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="bg-accent/20 text-accent px-2 py-1 rounded-md font-medium text-sm w-fit">
                      {exp.type}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="truncate">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="flex-shrink-0" />
                        <span className="truncate">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="p-6">
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 bg-gradient-to-r from-background/30 to-background/10 border border-border/20 rounded-lg"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span
                          className="text-sm text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: achievement }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-accent/10 to-secondary/10 text-foreground border border-border/40 rounded-full text-xs font-medium hover:from-accent/20 hover:to-secondary/20 hover:border-accent/40 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
