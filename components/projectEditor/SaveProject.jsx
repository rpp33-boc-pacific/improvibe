import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import saveSong from './saveSong';
import { ProjectContext } from './ProjectContext';
import AppContext from '../../AppContext';

export default function SaveProject({ crunker }) {
  const context = useContext(ProjectContext);
  const user = useContext(AppContext);

  return (
    <ProjectContext.Provider value={context}>
      <Button
      onClick={ () => {
        // Save song on click then get back id
        // saveSong(context, user)
        // .then((id) => {
        //   context.isSavedState = true;
        // })
      }}
      variant="contained"
      sx={{ width: '6vw', height: '4vh', fontSize: '1.7vh'}}
      >Save</Button>
    </ProjectContext.Provider>
  );
}

