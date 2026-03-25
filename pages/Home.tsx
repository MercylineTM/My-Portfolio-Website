import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/image.png";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Hello, I'm{" "}
              <span className="text-gradient">Mercyline</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-heading font-medium mb-6">
              Junior Data Analyst
            </h2>
            <p className="text-secondary-foreground leading-relaxed max-w-lg mb-8">
           l'm a skilled data analyst with experience in developing analytical frameworks and blue print to answer business questions identified in the business portfolio,
           product or member experience.I develop interactive dashboards to best support 
           self-service business intelligence to users.</p>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-box">
                <img
                  src={profileImg}
                  alt="Mercyline - Junior Data Analyst"
                  className="w-full h-full object-cover"
                  width={512}
                  height={512}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-110 animate-float" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
