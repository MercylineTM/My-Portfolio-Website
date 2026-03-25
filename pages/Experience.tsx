import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import Footer from "@/components/Footer";

const experiences = [
  {
    company: "Caledonia Mining Corporation Pvt Ltd (Blanket Mine)",
    logo: "/caledonia-logo.png",
    role: "IT Technician",
    duration: "Aug 2024 – April 2025",
    skills: ["Networking", "System Maintainance and Installations", "Excel", "Data Cleaning", "PHP","Hardware Troubleshooting", "Help Desk Support"],
    description:
      "Provided IT support, networking, and system troubleshooting. System management and software installationsHardware maintenance and troubleshooting. Conducted data analysis using Excel, developed websites with HTML, CSS, Python, and MySQL. Built the 'Tech Assist Ticketing (TAT)' IT support system during internship, designed to reduce response time between IT technicians and end users. ",
  },
  {
    company: "Healthcare Pharmacy (Gwanda)",
    logo: "/RX.png",
    role: "Pharmacist Assistant",
    duration: "May 2025 –  August 2025",
    skills: ["Customer Service", "Equipment maintenance", "Communication Skills", "Excel"],
    description:
      "Handled data entry, prescription processing, insurance claims, and medication stock levels using Excel. Maintained accurate  and up-to-date patient records and provided customer service.",
  },
  {
    company: "Dura Capital Pvt Ltd",
    logo: "/durac.png",
    role: "Junior Software Developer",
    duration: "November 2025 – Janauary 2026",
    skills: ["Excel", "Python", "Statistical Analysis", "Vue.js", "React.js", "Wix","Canva & Chatgpt", "Financial Modelling", "Digital Markerting"],
    description:
      "Assisted senior analysts in cleaning, visualising and merging large datasets.Worked in hand with the Marketing team in creating posts for the company linkedin, also played a role suggesting professional colors and layouts for front end web designs.    ",
  },
];

const Experience = () => {
  return (
    <div className="relative z-10 pt-24 pb-0">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading text-center">
            Work <span className="text-gradient">Experience</span>
          </h1>
          <p className="section-subtitle text-center">
            Companies I've worked with and skills gained
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="bg-card rounded-xl border border-border p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex items-start gap-4">
                {/* Company logo */}
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-border flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 mb-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Building2 size={14} /> {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} /> {exp.duration}
                    </span>
                  </div>
                  <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
