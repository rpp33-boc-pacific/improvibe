import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import saveSong from './saveSong';
import { ProjectContext } from './ProjectContext';
import AppContext from '../../AppContext';
import { useRouter } from 'next/router';

export default function SaveProject() {
  const router = useRouter();
  let { id } = router.query;

  const context = useContext(ProjectContext);
  const { isSavedState } = useContext(ProjectContext);
  const [isSaved, setIsSaved] = isSavedState;
  const user = useContext(AppContext);
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
            router.push(path);
            setTimeout(() => {
              router.reload();
            }, 500);
          }
        })
      }}
      variant="outlined"
      sx={{color:'#3A0CA3', borderColor: '#3A0CA3' }}
      >Save</Button>
    </ProjectContext.Provider>
  );
}

