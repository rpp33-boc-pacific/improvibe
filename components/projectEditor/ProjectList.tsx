import { Card, Container, Stack } from "@mui/material";
import { NextPage } from "next";

interface Props {
  projects: Array<{ id: number, [key: string]: any }>
}

const ProjectList: NextPage<Props> = ({ projects }) => {
  return (
    <Container>
      <Stack spacing={2}>
        {projects.map((project: { id: number, [key: string]: any }) => {
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