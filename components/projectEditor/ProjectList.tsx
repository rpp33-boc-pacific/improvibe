import { Stack } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  projects: Array<{ id: number, isPublic: boolean, [key: string]: any }>
}

const ProjectList: NextPage<Props> = ({ projects }) => {
  return (
    <Stack spacing={2} mt={2}>
      {projects.map((project: { id: number, [key: string]: any }) => {
        const status = (project.isPublic) ? 'public' : 'private'

        return (
          <div className='project-card' key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a>{project.projectName}</a>
            </Link>
            <div className='project-status'>{status}</div>
          </div>
        )
      })}
    </Stack>
  );
}

export default ProjectList;