import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Bot,
  LineChart,
  Zap,
  Boxes,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  {
    icon: Code2,
    label: "ERPNext",
    sub: "Developer",
    position: "left-0 top-[12%] lg:-left-10",
  },
  {
    icon: Bot,
    label: "Automation",
    sub: "Enthusiast",
    position: "right-0 top-[28%] lg:-right-8",
  },
  {
    icon: LineChart,
    label: "Problem",
    sub: "Solver",
    position: "left-0 bottom-[22%] lg:-left-14",
  },
  {
    icon: Zap,
    label: "AI Tools",
    sub: "Explorer",
    position: "right-0 bottom-[8%] lg:-right-4",
  },
];

const stats = [
  { icon: Boxes, value: "5+", label: "Projects Completed" },
  { icon: Zap, value: "Automation", label: "Driven Solutions" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pb-24 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary md:text-base">
                <span className="mr-2">👋🏼</span>Hey there! I&apos;m
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Yahya
                <br />
                <span className="gradient-text block md:text-[5.125rem]">
                  Shaikh
                </span>
              </h1>
              <div className="mt-6 h-px w-32 bg-gradient-to-r from-primary to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8"
            >
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                <span className="text-primary">ERPNext</span>{" "}
                <span className="text-foreground/70">&amp;</span>{" "}
                <span className="gradient-text">Automation Engineer</span>
              </h2>
              <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
                Building smart automations for businesses with ERPNext and other AI
                tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("#projects")}
                className="glow transition-all duration-300 hover:glow-lg"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/80 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#contact")}
                className="border-border/80 transition-all duration-300 hover:border-primary hover:bg-primary/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-6 flex gap-3"
            >
              {[
                { href: "https://github.com/whosYahya", Icon: Github, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/yahya-shaikh0605",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: "mailto:yahyaarshadshaikh0@gmail.com", Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border/70 bg-card/40 p-3 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:glow-sm"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column: portrait + floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[calc(28rem+5px)]"
          >
            <div className="relative aspect-[4/5] w-full">
              <div
                className="absolute inset-6 overflow-hidden border border-primary/30 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-violet-500/20"
                style={{
                  clipPath: "polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%)",
                  borderRadius: "1.5rem",
                }}
              >
                <img
                  src="/projects/profile.jpg"
                  alt="Yahya Arshad Shaikh, ERPNext and automation engineer"
                  loading="eager"
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-6 -z-10 rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.35),_rgba(99,102,241,0.22)_42%,_rgba(139,92,246,0.14)_66%,_transparent_82%)] blur-3xl" />
              <div className="pointer-events-none absolute inset-2 -z-20 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,_rgba(59,130,246,0.18),_transparent_52%),radial-gradient(circle_at_65%_75%,_rgba(139,92,246,0.16),_transparent_40%)] blur-2xl" />

              {badges.map(({ icon: Icon, label, sub, position }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  className={`group absolute ${position} z-20 cursor-default`}
                >
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 px-4 py-3 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-300/40 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:via-indigo-500/20 group-hover:to-violet-500/20 group-hover:shadow-[0_0_28px_rgba(99,102,241,0.35)]">
                    <span className="rounded-lg bg-white/5 p-2 text-blue-300 transition-all duration-300 group-hover:bg-white/10 group-hover:text-violet-200 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium leading-tight text-slate-100 transition-colors duration-300 group-hover:text-white md:text-sm">
                      {label}
                      <br />
                      {sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-card mt-16 grid grid-cols-2 gap-6 p-6 md:grid-cols-3 md:divide-x md:divide-border/60"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="group flex items-center gap-4 px-2 md:px-6">
              <span className="rounded-xl bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:glow-sm">
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <p className="font-display text-lg font-bold leading-tight md:text-xl">
                  {value}
                </p>
                <p className="text-xs text-muted-foreground md:text-sm">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
};

export default Hero;
