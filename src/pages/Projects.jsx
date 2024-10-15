import Speedy from "../assets/Speedy.jpg";
import suomistay from "../assets/suomistay.jpg";
import Erp from "../assets/erp.jpg";
import { Link } from "react-router-dom";

// Import other project images as needed

const projectData = [
  {
    id: 1,
    title: "Speedy Delivery",
    description: "Full Stack Web Application",
    image: Speedy,
    link: "https://github.com/Speed-Delivery",
  },
  {
    id: 2,
    title: "suomistay",
    description: "Full Stack Mobile Application",
    image: suomistay,
    link: "https://github.com/Mobile-Dev-Project",
  },
  {
    id: 3,
    title: "ERP System",
    description: "Full Stack Web Application",
    image: Erp,
    link: "https://github.com/SAPetta",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <Link
            style={{ textDecoration: "none" }}
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
          >
            <div className="project-card">
              <img src={project.image} alt={`${project.title} Project`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
