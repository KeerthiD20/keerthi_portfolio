import React from 'react';
import { projectDetails } from '../Details';
import ProjectDetails from '../components/ProjectDetails';
import '../pages/Pages.css'; // We'll define custom styles here

function Projects() {
  return (
    <div className="container page-content py-5">
      <h1 className="mb-5 text-center section-title">Projects</h1>

      <div className="row justify-content-center g-4">
        {projectDetails.map(({ title, description, techstack, image }) => (
          <div key={title} className="col-md-6 col-lg-4 d-flex">
            <ProjectDetails
              title={title}
              image={image}
              description={description}
              techstack={techstack}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
