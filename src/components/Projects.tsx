import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Airbnb Barcelona Analysis",
    description:
      "Comprehensive data analysis project using Python for data cleaning and Power BI for interactive dashboards. Uncovered insights on pricing trends, demand patterns, and occupancy rates.",
    tech: ["Python", "Pandas", "Power BI", "Data Analysis"],
    github: "https://github.com/whosYahya/airbnb-barcelona-analysis",
    image: "/placeholder.svg",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "CNN-based machine learning model trained on the MNIST dataset. Features a Tkinter GUI for real-time digit prediction with high accuracy.",
    tech: ["Python", "TensorFlow", "Tkinter", "CNN", "ML"],
    github: "https://github.com/whosYahya/handwritten-digit-recognition",
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="projects"
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full glow-sm" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card overflow-hidden group hover:glow transition-all duration-500"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                    {index === 0 ? "📊" : "🧠"}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
