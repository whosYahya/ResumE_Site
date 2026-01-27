import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Building Scalable ERP &{" "}
            <span className="gradient-text text-glow">
              Intelligent Software Solutions
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          ERPNext Engineer | Software Developer | Python | JavaScript | Data & ML
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="glow hover:glow-lg transition-all duration-300"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={scrollToContact}
            className="hover:bg-primary/20 transition-all duration-300"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/whosYahya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/yahyashaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:yahyaarshadshaikh0@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="animate-float text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
