import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning development", level: 80 },
  { name: "Excel / Google Sheets", level: 85 },
  { name: "Data Cleaning / Wrangling / Data Analysis and Extraction", level: 80 },
  { name: "UI/UX Design, Website Designing", level: 85 },
  { name: "Vue.js / React.js / Node.js and WIX" , level: 78 },
  { name: "SQL", level: 70 },
  { name: "Digital Marketing & SEO", level: 68 },
  { name: "Power BI / Tableau", level: 55 },
  { name: "R Programming", level: 50 },
];

const About = () => {
  return (
    <div className="relative z-10 pt-24 pb-0">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading text-center">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="section-subtitle text-center">
            A snapshot of my skills and expertise
          </p>

          <div className="mb-12">
            <p className="text-secondary-foreground leading-relaxed mb-6">
              I'm a detail-oriented Junior Data Analyst with a strong foundation in
              statistical analysis, data visualisation, and digital marketing. l'm skilled in Front End development and Website design using WIX.
        I conduct exploratory research into data, metrics and how better
        data can be exploited and compliment business decisions.</p>
          </div>

          {/* Skills */}
          <div className="space-y-5 mb-12">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Request CV */}
<div className="text-center mb-16">
  <a
    href="mailto:tmmakacha@gmail.com?subject=Request for CV&body=Hello Mercyline, I came across your portfolio and would like to request a copy of your CV."
    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
  >
    <Download size={18} />
    Request My CV
  </a>

  <p className="text-muted-foreground text-xs mt-3">
    For privacy reasons, CV is shared upon request via email.
  </p>
</div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
