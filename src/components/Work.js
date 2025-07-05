import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-4 pb-3 border-bottom border-secondary-subtle">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="h5 mb-0">{position}</h1>
        <span className="badge rounded-pill text-bg-success px-3 py-2 text-uppercase">{type}</span>
      </div>

      <div className="d-flex justify-content-between pt-2 flex-wrap">
        <div className="d-flex flex-column flex-md-row gap-3">
          <div className="d-flex align-items-center">
            <svg width="16" height="12" fill="currentColor" className="me-1">
              <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331Z..." />
            </svg>
            <span className="text-muted small">{company}</span>
          </div>
          <div className="d-flex align-items-center">
            <svg width="16" height="12" fill="currentColor" className="me-1">
              <path d="M8 6.75C7.50555 6.75 7.0222 6.64003..." />
              <path d="M8.00001 11.25L3.78201 7.51912..." />
            </svg>
            <span className="text-muted small">{location}</span>
          </div>
        </div>
        <span className="text-muted small">{duration}</span>
      </div>
    </article>
  );
}

export default Work;
