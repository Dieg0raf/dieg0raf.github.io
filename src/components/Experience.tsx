import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full-Stack Developer (Part-time)",
      company: "Trinchero Family Estates",
      location: "Lodi, CA",
      duration: "August 2024 - December 2024",
      description:
        "Focused on backend development by automating scripts to streamline processes and integrating various third-party services to enhance system functionality. Worked on creating efficient workflows and ensuring seamless communication between services to support overall project goals.",
      responsibilities: [
        "Developed AWS Lambda functions for the One Stop Wine Shop eCommerce site (840k+ yearly views, 330k+ users), automating data transfers to Algolia, Yotpo, and other third-party services.",
        "Built a shopping feed script for Facebook and Google Merchant, increasing visibility and driving sales for key wine-selling sites",
        "Managed Cloudflare DNS for WP Engine-hosted sites, ensuring secure and reliable site operations",
        "Integrated Solid Security Pro, fortifying website defenses and addressing vulnerabilities, while taking on additional responsibilities with backend integrations.",
      ],
      technologies: [
        "Cloudflare",
        "GES",
        "AWS Lambda",
        "Algolia",
        "Yotpo",
        "Solid Security Pro",
      ],
    },
    {
      title: "Full-Stack Developer (Intern)",
      company: "Trinchero Family Estates",
      location: "Lodi, CA",
      duration: "June 2024 - August 2024",
      description:
        "Focused on improving website accessibility to create inclusive and user-friendly experiences for a diverse audience. Applied skills in PHP and WordPress to implement features that enhance navigation, usability, and compliance with accessibility standards.",
      responsibilities: [
        "Enhanced accessibility for multiple company sites, focusing on Napa Cellars Wine (120k+ yearly views, 71k+ users), ensuring WCAG compliance.",
        "Implemented semantic HTML, ARIA roles, and keyboard navigation using PHP and WordPress",
        "Worked with content, design, and engineering teams to deliver accessibility upgrades aligned with business goals.",
        "Improved usability and inclusivity, boosting site performance and reducing bounce rates.",
      ],
      technologies: [
        "PHP",
        "WordPress",
        "WP Engine",
        "FileZilla",
        "Local By FlyWheel",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "ASUCD Pantry",
      location: "Davis, CA",
      duration: "September 2022 - October 2024",
      description:
        "Developed and maintained the ASUCD Pantry website, a platform that provides food and resources to UC Davis students in need.",
      responsibilities: [
        "Developed agile strategies to improve system flexibility for 1600+ users.",
        "Led development of the ASUCD Pantry website, a platform that provides food and resources to UC Davis students in need.",
        "Developed a user-friendly interface for students to browse and request items from the pantry.",
        "Led weekly stand-ups, collaborating with the team to review code and build a positive culture.",
      ],
      technologies: ["React", "Django", "PostgreSQL"],
    },
  ];

  return (
    <section id="my-experience">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          return (
            <div
              key={index}
              tabIndex={0}
              className="group outline-none"
              aria-label={`Experience: ${exp.title} at ${exp.company}`}
            >
              <Card className="bg-gray-800 border-black hover:scale-[1.025] hover:shadow-2xl group-hover:scale-[1.025] group-hover:shadow-2xl transition-all duration-300 cursor-pointer focus:ring-2 focus:ring-accent">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-blue-400 font-medium mb-2">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 ml-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
