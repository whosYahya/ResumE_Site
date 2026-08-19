import { useRef } from "react";
import { motion } from "framer-motion";

const row1Tools = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "MariaDB", icon: "https://cdn.simpleicons.org/mariadb" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "ERPNext", icon: "https://cdn.simpleicons.org/erpnext" },
  { name: "Figma", icon: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Canva", icon: "https://cdn.brandfetch.io/id9mVQlyB1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
  { name: "Power BI", icon: "https://cdn.brandfetch.io/idVCtIagXj/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Openclaw", icon: "https://cdn.brandfetch.io/idE7_a-JBc/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
];

const row2Tools = [
  { name: "Replit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/replit/replit-original.svg" },
  { name: "FlutterFlow", icon: "https://cdn.brandfetch.io/id209IGdxm/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Frappe", icon: "https://cdn.simpleicons.org/frappe" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/claude" },
  { name: "ChatGPT", icon: "https://cdn.brandfetch.io/id2UDPob7G/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
];

const TechCard = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex flex-col items-center gap-3 px-6 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-[100px] cursor-default"
  >
    <img
      src={icon}
      alt={name}
      className="w-[46px] h-[46px] object-contain"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
    <span className="text-sm text-muted-foreground whitespace-nowrap">{name}</span>
  </motion.div>
);

const MarqueeRow = ({
  tools,
  direction = "left",
  duration = "25s",
}: {
  tools: typeof row1Tools;
  direction?: "left" | "right";
  duration?: string;
}) => {
  const doubled = [...tools, ...tools];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-4">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
        }}
      >
        {doubled.map((tool, i) => (
          <TechCard key={`${tool.name}-${i}`} {...tool} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.15em] text-primary uppercase mb-2">
            // tech stack
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Tools I Work <span className="gradient-text">With</span>
          </h2>
        </motion.div>

        <style>{`
          @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}</style>

        <MarqueeRow tools={row1Tools} direction="left" duration="28s" />
        <MarqueeRow tools={row2Tools} direction="right" duration="32s" />
      </div>
    </section>
  );
};

export default Skills;
