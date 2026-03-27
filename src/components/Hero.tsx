import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroLayout = {
  section: "relative flex items-center justify-center",
  container: "mx-auto w-full text-left z-10",
  intro: "space-y-4",
  title: "font-display font-bold leading-tight",
  subtitle: "text-muted-foreground",
  actions: "flex flex-wrap justify-start gap-4",
  socials: "flex justify-start gap-6",
  scroll: "absolute left-1/2 -translate-x-1/2",
};

const heroSizing = {
  minHeight: "100vh",
  paddingX: "1rem",
  paddingTop: "8rem",
  contentMaxWidth: "72rem",
  subtitleMaxWidth: "42rem",
  titleMaxWidth: "64rem",
};

const heroMedia = {
  imageSrc: "/profile.jpg",
  imageAlt: "Yahya profile picture",
};

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={heroLayout.section}
      style={{
        minHeight: heroSizing.minHeight,
        paddingTop: heroSizing.paddingTop,
        paddingLeft: heroSizing.paddingX,
        paddingRight: heroSizing.paddingX,
      }}
    >
      <div
        className={`${heroLayout.container} grid gap-12 lg:grid-cols-[1.25fr_0.75fr] items-center`}
        style={{ maxWidth: heroSizing.contentMaxWidth }}
      >
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={heroLayout.intro}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.35em] text-primary/100 font-bold">
              👋🏼 Hey there! I&apos;m Yahya
            </p>
            <h1
              className={`${heroLayout.title} text-4xl md:text-5xl lg:text-7xl mb-6`}
              style={{ maxWidth: heroSizing.titleMaxWidth }}
            >
              Building Scalable ERP Solutions
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${heroLayout.subtitle} text-lg md:text-xl mb-8`}
            style={{ maxWidth: heroSizing.subtitleMaxWidth }}
          >
            ERPNext Engineer | Software Developer | Python | JavaScript | Data & AI/ML
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${heroLayout.actions} mb-12`}
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
            className={heroLayout.socials}
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
              href="https://www.linkedin.com/in/yahya-shaikh0605"
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
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden lg:block justify-self-end"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[26rem] overflow-hidden rounded-[2rem] border border-primary/20 bg-secondary/30 shadow-2xl">
            <img
              src={heroMedia.imageSrc}
              alt={heroMedia.imageAlt}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className={`${heroLayout.scroll} bottom-8`}
      >
        <button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-float text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
