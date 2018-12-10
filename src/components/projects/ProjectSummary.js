import React from 'react'

const ProjectSummary = ( {project} ) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{project.title}</div>
        <p>Posted by vamshi</p>
        <p className="grey-text">Sep 2, 2:00AM</p>
      </div>
    </div>
  );
}

export default ProjectSummary
