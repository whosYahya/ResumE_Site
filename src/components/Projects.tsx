import { useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Airbnb Barcelona Analysis",
    description:
      "Comprehensive data analysis project using Python for data cleaning and Power BI for interactive dashboards. Uncovered insights on pricing trends, demand patterns, and occupancy rates.",
    tech: ["Python", "Pandas", "Power BI", "Data Analysis"],
    github: "https://github.com/whosYahya/airbnb-barcelona-analysis",
    image: "/projects/coverimg_airbnb.png",
  },
  {
    title: "FinSight AI",
    description:
      "AI-powered Financial Insights & Narrative Generator for ERPNext — converts GL data into executive narratives using LLMs",
    tech: ["JavaScript", "Python", "ERPNext", "GPT-4", "LLM"],
    github: "https://github.com/whosYahya/finsight_ai",
    image: "/projects/finsight.png",
  },
  {
    title: "WorkshopFlow",
    description:
      "Frappe app for auto shop management — Job Cards, Bays, Technicians, and Parts Requisitions, with AI-driven repair-time estimation and automated customer notifications.",
    tech: ["JavaScript", "Python", "Frappe", "Gemini"],
    github: "https://github.com/whosYahya/WorkshopFlow",
    image: "/projects/workshopflow.png",
  },
  {
    title: "Bunyan",
    description:
      "A comprehensive Islamic habit tracker and Deen companion app designed to help users monitor daily prayers, read Quran, stay hydrated, and build consistent spiritual habits.",
      tech: ["TypeScript", "React Native", "Firebase", "Expo"],
      github: "https://github.com/whosYahya/Bunyan-Life",
      image: "/projects/bunyan.png",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "CNN-based machine learning model trained on the MNIST dataset. Features a Tkinter GUI for real-time digit prediction with high accuracy.",
    tech: ["Python", "TensorFlow", "Tkinter", "CNN", "ML"],
    github: "https://github.com/whosYahya/handwritten-digit-recognition",
    image: "/projects/handwritten-digit-recognition.png",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const scrollProjects = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = Math.min(container.clientWidth * 0.8, 520);
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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

        <div className="relative">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Scroll projects left"
            onClick={() => scrollProjects("left")}
            className="hidden md:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-full border-primary/30 bg-background/80 backdrop-blur-xl shadow-lg hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Scroll projects right"
            onClick={() => scrollProjects("right")}
            className="hidden md:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-full border-primary/30 bg-background/80 backdrop-blur-xl shadow-lg hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          <div className="flex w-max gap-6 px-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="glass-card overflow-hidden group hover:glow transition-all duration-500 shrink-0 snap-start w-[85vw] sm:w-[420px] lg:w-[460px]"
              >
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
