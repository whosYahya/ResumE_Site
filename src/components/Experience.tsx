import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const achievements = [
    "Developed custom ERPNext modules tailored to client business processes",
    "Automated workflows using Python & JavaScript for improved efficiency",
    "Built and integrated REST APIs for seamless data exchange",
    "Created interactive dashboards, reports, and print formats",
    "Collaborated with QA teams for debugging and testing",
    "Managed production deployment and maintenance",
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30" />

            <div className="pl-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Software Developer Intern
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    ERPNext Engineer
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>Zasmlabs Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Pune, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2024 - Present</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
