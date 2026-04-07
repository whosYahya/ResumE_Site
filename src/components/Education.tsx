import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2025 – Present",
    status: "Currently Pursuing",
    icon: GraduationCap,
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2022 – 2025",
    status: "CGPA: 8.5",
    icon: Award,
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section id="education" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-sm" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 hidden md:block" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary glow hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                </div>

                <div className="glass-card p-6 hover:glow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 md:hidden">
                      <edu.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{edu.period}</span>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
