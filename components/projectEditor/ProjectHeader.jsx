import {useState, useRef, useContext, SetStateAction } from 'react';
import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";
import SaveProject from "./SaveProject";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditableElement from '../shared/EditableElement';
import { ProjectContext } from './ProjectContext';

function ProjectHeader() {

  const style = {
    width: 600,
    height: 60,
    backgroundColor: '#fff',
  };

  const context = useContext(ProjectContext);

  const [newContext, updatedContext] = useState(context);

  const [value, setValue] = useState(initialValue);
  const initialValue = "Initial Value";

  const handleChange = (e) => {
    setValue(e.target.value)
    context.projectNameState = e.target.value
  };

  return (
    <ProjectContext.Provider value={context}>
        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '5vh' }}>
          <div>
            <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
              <PlayProject />
              <input className='song-name' placeholder='Type Name Here' onChange={handleChange}></input>
            </Grid>
          </div>
          <div>
            <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center">
              <GenreSelector />
              <SaveProject />
            </Grid>
          </div>
        </Grid>
      </ProjectContext.Provider>
  );
}

export default ProjectHeader;