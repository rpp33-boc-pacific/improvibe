import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import saveSong from './saveSong';
import { ProjectContext } from './ProjectContext';
import AppContext from '../../AppContext';
import { useRouter, push } from 'next/router';

export default function SaveProject() {
  const router = useRouter();
  let { id } = router.query;

  const context = useContext(ProjectContext);
  const { isSavedState } = useContext(ProjectContext);
  const [isSaved, setIsSaved] = isSavedState;
  const user = useContext(AppContext);
  console.log(user);
  let crunker;

  useEffect(() => {
    importCrunker();
  });

  const importCrunker = async () => {
    const Crunker = (await import('crunker')).default;
    crunker = Crunker;
  }

  const saveProject = () => {
    setIsSaved(true);
  }

  return (
    <ProjectContext.Provider value={context}>
      <Button
      onClick={ () => {
        saveSong(context, user, crunker, id)
        .then((id) => {
          setIsSaved(true);
          if (typeof id.data.projectId === 'number') {
            const path = (router.pathname === '/projects') ? `projects/${id.data.projectId}` : `${id.data.projectId}`;
            push(path);
          }
        })
      }}
      variant="contained"
      sx={{ width: '5vw', height: '4vh', fontSize: '1.5vh'}}
      >Save</Button>
    </ProjectContext.Provider>
  );
}

