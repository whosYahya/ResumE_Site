import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Briefcase, Lightbulb } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const highlights = [
    {
      icon: CheckCircle,
      title: "QA Automation & Testing",
      description: "Playwright, API testing, and ERPNext quality assurance",
    },
    {
      icon: Briefcase,
      title: "ERP Engineering",
      description: "ERPNext & Frappe Framework expertise",
    },
    {
      icon: Lightbulb,
      title: "Data-Driven Solutions",
      description: "Analytics, ML, and intelligent automation",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-sm" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 glow-sm"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an <span className="text-primary font-semibold">ERPNext Engineer</span> and{" "}
              <span className="text-primary font-semibold">Software Developer</span> focused on
              building scalable, automation-driven business systems. With hands-on experience in
              Python, JavaScript, and the Frappe Framework, I develop custom ERP solutions that
              streamline operations and reduce manual workload.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in workflow automation, API integrations, and building real-world
              business logic into ERP systems. My work centers around creating efficient,
              reliable, and data-driven applications that solve practical problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              I'm continuously exploring ways to combine ERP systems with automation tools and AI
              to build smarter, more intelligent business solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 flex items-start gap-4 hover:glow transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
