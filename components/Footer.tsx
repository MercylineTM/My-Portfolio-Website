import { Linkedin, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-background/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Mercyline. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/mercyline-makacha-t-b30805294?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/MercylineTM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:tmmakacha@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:0775923340"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
