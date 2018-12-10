import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ( {projects} ) => {
  console.log(projects)
  return (
    <div className="section project-list">
      { projects && projects.map( project => {
        return(
          <ProjectSummary project={ project } key= { project.id } />
        )
      })}
    </div>
  );
}

export default ProjectList
