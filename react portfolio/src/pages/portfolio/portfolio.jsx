import './portfolio.css';
import readmeImage from '../../assets/readme.png';
import subaruImage from '../../assets/subaru.png';
import watcherImage from '../../assets/watcher.png';
import ezyImage from '../../assets/ezy.png';
import portfolioImage from '../../assets/portfolio-icon.png';
   
const projects = [
  {
    id: 1,
    title: "Can_You_README",
    description: "A cli application that generates a README.md file for your project.",
    image: readmeImage,
    repo: "https://github.com/catzappia/Can_You_README",
  },
  {
    id: 2,
    title: "Whats_New_Subaru",
    description: "A cli vehicle generator that lets you control different vehicles.",
    image: subaruImage,
    repo: "https://github.com/catzappia/Whats_New_Subaru",
  },
  {
    id: 3,
    title: "Watcher_Working_On",
    description: "A cli employee tracker.",
    image: watcherImage,
    repo: "https://github.com/catzappia/Watcher_Working_On",

  },
  {
    id: 4,
    title: "EZY Bike",
    description: "An online bike shop.",
    image: ezyImage,
    repo: "https://github.com/ScottMSaller/Project-1",
    link: "https://scottmsaller.github.io/Project-1/"
  },
  {
    id: 5,
    title: "React_2My_Portfolio",
    description: "My portfolio built with React. (You are here!)",
    image: portfolioImage,
    repo: "https://github.com/catzappia/React_2My_Portfolio",
    link: ""
  }
];

const Portfolio = () => {
  return (
    <div className="main">
    <section className="projects-section">
      <h2 className="projects-title">My Portfolio</h2>
      <p className="about">Here are a few of the challenges and projects I've completed:</p>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.link && (
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            )}
            <a href={project.repo} className="project-repo" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};


  
  export default Portfolio;