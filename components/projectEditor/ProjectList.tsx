import { Card } from "@mui/material";

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <Card key={project.id}>
            <div>{project.projectName}</div>
          </Card>
        )
      })}
    </ul>
  );
}

export default ProjectList;