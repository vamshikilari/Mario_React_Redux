import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>lorem ipsum init </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by The Net Ninja</div>
                <div>2nd Sep, 2am</div>
            </div>
        </div>
        </div>
  );
}

export default ProjectDetails
