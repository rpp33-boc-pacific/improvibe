import { Card, Container, Stack } from "@mui/material";

function ProjectList({ projects }) {
  return (
    <Container>
      <Stack spacing={2}>
        {projects.map((project) => {
          return (
            <Card key={project.id}>
              <div>{project.projectName}</div>
            </Card>
          )
        })}
      </Stack>
    </Container>
  );
}

export default ProjectList;