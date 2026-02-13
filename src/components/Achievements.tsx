import { useRef } from "react";
import { Award, Trophy, Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const achievements = [
  {
    title: "GOOGLE - Build Wireframes and Low-Fidelity Prototypes",
    subtitle: "Business Analysis & UI/UX: Build Wireframes and Low-Fidelity Prototypes",
    year: "Oct 2025",
    referenceText: "Explore here",
    link: "https://www.coursera.org/account/accomplishments/verify/YJTBS0LKSJD1",  
    icon: Award,
  },
  {
    title: "GOOGLE - Agile Project Management",
    subtitle: "Business Analysis: Agile Project Management",
    year: "Oct 2025",
    referenceText: "Explore here",
    link: "https://www.coursera.org/account/accomplishments/records/ZWZGBXK1NWWK",  
    icon: Award,
  },
  {
    title: "GOOGLE - UX Certification",
    subtitle: "UI/UX: Conduct UX Research and Test Early Concepts",
    year: "Sep 2025",
    referenceText: "Explore here",
    link: "https://www.coursera.org/account/accomplishments/records/V6YK59F4V7FQ",  
    icon: Award,
  },
  {
    title: "SKILLUP EDTECH - Business Analysis Certification",
    subtitle: "Business Analysis: Process Modeling & Requirements Gathering",
    referenceText: "Explore here",
    link: "https://www.coursera.org/account/accomplishments/records/48ITT17X03BL",
    year: "Jul 2025",
    icon: Award,
  },
  {
    title: "IBM - Introduction to Business Analysis",
    subtitle: "Business Analysis: Certified for successful completion in IBM course",
    referenceText: "Explore here",
    link: "https://www.coursera.org/account/accomplishments/records/W1NRMH39X9F2",
    year: "Jul 2025",
    icon: Award,
  },
  {
    title: "Best Student Semester - Computing Major",
    subtitle: "Spring Semester 2024",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Best Student Semester - Computing Major",
    subtitle: "Fall Semester 2023",
    year: "2023",
    icon: Trophy,
  },
  {
    title: "First-Runner Up - English Presentation Competition",
    subtitle: "University of Greenwich",
    year: "2023",
    icon: Star,
  },
  {
    title: "First-Runner Up - English Presentation Competition",
    subtitle: "Vietnam Competition",
    year: "2023",
    icon: Star,
  },
  {
    title: "Best Class Performance",
    subtitle: "Levels 1 to 5 in Preparatory English Stage",
    year: "2021",
    icon: Trophy,
  },
];

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-24 px-6 lg:px-12 transition-all duration-1000"
      style={{
        backgroundColor: "var(--retro-beige)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: "var(--retro-blue)" }}
          >
            Recognition
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: "Georgia, serif", color: "var(--retro-text)" }}
          >
            Achievements & Awards
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: "var(--retro-text-light)" }}
          >
            Certifications and honors earned throughout my academic and
            professional journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--retro-blue)",
                    }}
                  >
                    <Icon size={24} color="white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <h3
                      className="text-lg leading-snug"
                      style={{
                        color: "var(--retro-text)",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {achievement.title}
                    </h3>

                    <p
                      className="text-sm"
                      style={{ color: "var(--retro-text-light)" }}
                    >
                      {achievement.subtitle}
                    </p>

                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-sm underline underline-offset-4 hover:opacity-80"
                        style={{ color: "var(--retro-blue)" }}
                        onClick={(e) => e.stopPropagation()} // tránh click ăn vào card nếu sau này bạn làm card clickable
                      >
                        {achievement.referenceText ?? "Explore here"}
                      </a>
                    )}

                    <span
                      className="block w-fit text-xs px-3 py-1 rounded-full mt-3"
                      style={{
                        backgroundColor: "var(--retro-warm-gray)",
                        color: "var(--retro-blue)",
                      }}
                    >
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
