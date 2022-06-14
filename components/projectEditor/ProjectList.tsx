import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from 'next/router';

interface Props {
  projects: Array<{ id: number, public: boolean, [key: string]: any }>
}

const ProjectList: NextPage<Props> = ({ projects }) => {
  const router = useRouter();

  const changeProject = (event: any) => {
    const id = event?.target?.id?.split('-')[1];
    const path = (router.pathname === '/projects') ? `projects/${id}` : `${id}`;
    console.log(path);
    router.push(path);
    setTimeout(() => {
      router.reload();
    }, 1000);
  }

  return (
    <Stack spacing={2}>
      {projects.map((project: { id: number, [key: string]: any }) => {
        const status = (project.public) ? 'public' : 'private'
        return (
          <div className='project-card' id={`projectCard-${project.id}`} key={project.id} onClick={changeProject}>
            <div className='project-link' id={`projectName-${project.id}`}>{project.name}</div>
            <div className='project-status' id={`projectStatus-${project.id}`}>{status}</div>
          </div>
        )
      })}
    </Stack>
  );
}

export default ProjectList;