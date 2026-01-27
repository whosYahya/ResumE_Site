import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "ERPNext", level: 90 },
      { name: "Frappe Framework", level: 88 },
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 70 },
      { name: "Scikit-learn", level: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MariaDB", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "SQLite", level: 75 },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Bench CLI", level: 80 },
      { name: "Ngrok", level: 70 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Debugging", level: 88 },
      { name: "API Testing", level: 85 },
      { name: "Workflow Automation", level: 82 },
      { name: "QA Collaboration", level: 80 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-sm" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover:glow-sm transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
