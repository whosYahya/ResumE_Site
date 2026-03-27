import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/whosYahya",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yahya-shaikh0605",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:yahyaarshadshaikh0@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Animated divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Yahya Arshad Shaikh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="h-3 w-3 text-primary" /> and code
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
