import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import saveSong from './saveSong';
import { ProjectContext } from './ProjectContext';
import AppContext from '../../AppContext';

export default function SaveProject() {
  const context = useContext(ProjectContext);
  const user = useContext(AppContext);
  let crunker;

  useEffect(() => {
    importCrunker();
  }, []);

  const importCrunker = async () => {
    const Crunker = (await import('crunker')).default
    crunker = Crunker;
  }

  return (
    <ProjectContext.Provider value={context}>
      <Button
      onClick={ () => {
        // Save song on click then get back id
        saveSong(context, user, crunker)
        .then((id) => {
          context.isSavedState.setIsSaved(true);
        })
      }}
      variant="contained"
      sx={{ width: '5vw', height: '4vh', fontSize: '1.5vh'}}
      >Save</Button>
    </ProjectContext.Provider>
  );
}

