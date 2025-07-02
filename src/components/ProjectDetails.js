import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Pages.css"; // Make sure styles are loaded

function ProjectDetails({ title, description, techstack, image }) {
  return (
    <div className="card shadow-sm project-card w-100">
      <img src={image} className="card-img-top project-image" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="mt-3">
          <span className="badge bg-primary">{techstack}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
