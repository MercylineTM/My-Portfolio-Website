import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Payroll Distribution Analysis",
    description:
      "Built an interactive dashboard using Power BI and Excel. The purpose of the project was to analyze payroll data to uncover insights into employee compensation, overtime costs and workforce allocation across diffrent job titles. The project identified correlation between leave status, overtime hours and payroll costs. The project reveals that while base salaries remain stable, overtime costs represent a major driver of total payroll therefore workforce allocation imbalances and leave -related gaps contribute to cost increase.",
    tags: ["Power BI", "SQL", "Excel", "Data Visualisation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Onboard Studio co-branding with BancABC",
    description:
      "I participated in the OnboardStudio development. OnboardStudio is digital onboarding and origination platform, designed to help financial institutions onboard borrowers seamlessly, assess risk upfront, and accelerate credit decisions with confidence.It replaces manual, paper-based onboarding processes with a structured, data-driven workflow that improves customer experience, strengthens risk controls, and shortens time-to-disbursement. We Developed a responsive web application with Senior Developer for monitoring operational data and visualizing key metrics. The system integrates REST APIs to display real-time statistics, charts, and reports. Implemented modular Vue.js components, interactive dashboards, dynamic filters, and user profile management features including digital signature capture.",
    tags: ["Vue.js", "Python", "Django","SQL","Azure" ],
    image: "/Onboard.png",
    link: "#",
  },
   {
    title: "Drug Stock Optimization and Regression Analysis",
    description:
      "My experience at Healthcare Pharmacy in Gwanda motivated me into doing this project. Developed an intelligent, data-driven system for optimising drug stock that ensures pharmacies mantain the right medication levels, reducing waste, preventing shortages, and improving overall efficiency in pharmaceutical inventory management. The platform developed implements demand forecasting model using ARIMA and Prophet with an option to compare between the two models. There is a deployment of real-time inventory analysis dashboard and stock monitoring. The platform also optimizes procurement scheduling by calculating and tracking lead time, delivery delays and reorder levels. Therefore, the system evalutaes the model performance using regression metrics (MAE, RMSE, R-Squared, and MAPE) and present them in an interactive dashboard with automatic model performance interpretation.",
    tags: ["Python", "Machine Learning", "RNNs and ANNs", "Stasmodel","LSTM","ARIMA", "Prophet", "Pandas", "MatplotLib", "Streamlit","MySQL","Artificial Intelligence"],
    image: "/drug.png",
    link: "#",
  },
  {
    title: "Gold Membership Campaign Targeting and Customer Response Prediction",
    description:
      "The purpose of this project is to develop a data-driven customer targeting solution for a supermarket's promotional campaign. The project focuses on predicting customer response, identifying key behavioral drivers, and presenting insights through an interactive decision dashboard. ",
    tags: ["Python", "MySQL", "Streamlit", "Pandas", "MatplotLib", "Plotly"],
    image: "/campaign.png",
    link: "#",
  },
  {
    title: "Customer Segmentation",
    description:
      "Applied K-means clustering in Python to segment customers based on purchasing behaviour, enabling targeted marketing campaigns.",
    tags: ["Python", "Machine Learning", "Pandas", "MatplotLib", "Jupyter Notebook"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
  },
  
  {
    title: "Data Cleaning Pipeline",
    description:
      "Developed an automated data cleaning pipeline in Python to process raw Loan data, reducing manual work by 60%.",
    tags: ["Python", "Automation", "ETL"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    link: "#",
  },

  
  {
    title: "LinkedIn posts For Clients and Product Launching",
    description:
      "Developed professional LinkedIn marketing posts for clients and product launches by combining Canva-based visual design with AI-assisted content creation using ChatGPT to deliver engaging and impactful social media campaigns.",
    tags: ["Chatgpt", "Canva"],
    image: "/IncomeR.png",
    link: "#",
  },
 

];

const Projects = () => {
  return (
    <div className="relative z-10 pt-24 pb-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-heading text-center">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="section-subtitle text-center">
            A collection of data analysis and digital marketing projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-xl overflow-hidden border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
