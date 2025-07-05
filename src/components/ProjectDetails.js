import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Pages.css";

function ProjectDetails({ title, description, techstack, image }) {
  return (
    <div className="card shadow-sm project-card w-100 h-100 d-flex flex-column">
      <img src={image} className="card-img-top project-image" alt={title} />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="project-techstack mt-3 d-flex flex-wrap gap-2">
          {techstack.map((tech, index) => (
            <span key={index} className="badge bg-primary tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
