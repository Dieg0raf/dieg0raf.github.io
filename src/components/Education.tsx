import { Calendar, MapPin, Award, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Davis",
      icon: "/davis-logo.webp",
      location: "Davis, CA",
      duration: "Sept 2023 - June 2025",
      gpa: "3.5",
      highlights: [
        {
          icon: Award,
          text: "3.5 GPA",
          subtext: "Dean's List",
        },
        {
          icon: BookOpen,
          text: "CS Core",
          subtext: "Algorithms & Data Structures",
        },
        {
          icon: GraduationCap,
          text: "Hackathons",
          subtext: "Active Participant",
        },
      ],
      achievements: [
        "Completed comprehensive computer science curriculum with focus on algorithms, data structures, and software engineering",
        "Maintained Dean's List status with 3.7 GPA while balancing full-time studies and professional development",
        "Developed strong foundation in systems programming, database design, and full-stack development",
        "Actively participated in hackathons, applying theoretical knowledge to real-world problems and collaborating with peers",
      ],
      coursework: [
        "Algorithm Design & Analysis",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "Artificial Intelligence",
        "Computer Architecture",
        "Programming Languages",
      ],
      institutionUrl: "https://www.ucdavis.edu/",
    },
    {
      degree: "Associates in Computer Science",
      institution: "Diablo Valley College",
      icon: "/dvc-logo.webp",
      location: "Pleasant Hill, CA",
      duration: "Aug 2021 - May 2023",
      gpa: "3.7",
      highlights: [
        {
          icon: Award,
          text: "3.7 GPA",
          subtext: "Honor Roll",
        },
        {
          icon: BookOpen,
          text: "CS Foundation",
          subtext: "Core Programming",
        },
        {
          icon: GraduationCap,
          text: "2023 Transferred",
          subtext: "Associate's Degree",
        },
      ],
      achievements: [
        "Completed foundational computer science coursework with focus on programming fundamentals and problem-solving",
        "Maintained strong academic performance while developing core programming skills in multiple languages",
        "Built strong foundation in software development principles and computer science fundamentals",
        "Successfully transferred to UC Davis with completed prerequisites for upper-division coursework",
      ],
      coursework: [
        "Advanced Programming with C++",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Assembly Language Programming",
        "Python Programming",
        "Linear Algebra",
        "Calculus I & II",
        "Physics for Engineers",
      ],
      institutionUrl: "https://www.dvc.edu/",
    },
    {
      degree: "IGETC Certificate",
      institution: "Los Medanos College",
      icon: "/lmc-logo.webp",
      location: "Pittsburg, CA",
      duration: "2020 - 2023",
      gpa: "3.7",
      highlights: [
        {
          icon: Award,
          text: "3.7 GPA",
          subtext: "Transfer Ready",
        },
        {
          icon: BookOpen,
          text: "IGETC Complete",
          subtext: "General Education",
        },
        {
          icon: GraduationCap,
          text: "2023 Complete",
          subtext: "Transfer Curriculum",
        },
      ],
      achievements: [
        "Completed Intersegmental General Education Transfer Curriculum (IGETC) while pursuing CS degree at DVC",
        "Fulfilled all general education requirements for seamless transfer to UC system",
        "Maintained strong academic performance across diverse subject areas including humanities, social sciences, and natural sciences",
        "Successfully completed transfer pathway requirements enabling smooth transition to UC Davis",
      ],
      coursework: [
        "English Composition",
        "Critical Thinking",
        "Mathematics",
        "Physical Sciences",
        "Biological Sciences",
        "Arts & Humanities",
        "Social & Behavioral Sciences",
        "History & Government",
      ],
      institutionUrl: "https://www.losmedanos.edu/",
    },
  ];

  return (
    <section id="my-education" className="pb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Education
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building a strong foundation in computer science and software
          engineering
        </p>
        <div className="mx-auto mt-6 w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="group bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.01] rounded-2xl overflow-hidden"
          >
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-4 sm:p-6 border-b border-border/30">
                <div className="flex flex-col gap-4">
                  {/* Institution and Logo Row */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={edu.icon}
                        alt={`${edu.institution} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background border border-border/50 object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground truncate">
                          {edu.institution}
                        </h3>
                        <a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent/80 transition-colors flex-shrink-0"
                          aria-label={`Visit ${edu.institution} website`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 break-words">
                        {edu.degree}
                      </h4>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="bg-accent/20 text-accent px-2 py-1 rounded-md font-medium text-sm w-fit">
                      {edu.gpa} GPA
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="truncate">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="flex-shrink-0" />
                        <span className="truncate">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                {/* Key Achievements */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Academic Achievements
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 bg-gradient-to-r from-background/30 to-background/10 border border-border/20 rounded-lg"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-accent/10 to-secondary/10 text-foreground border border-border/40 rounded-full text-xs font-medium hover:from-accent/20 hover:to-secondary/20 hover:border-accent/40 transition-colors duration-200"
                      >
                        {course}
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

export default EducationSection;
