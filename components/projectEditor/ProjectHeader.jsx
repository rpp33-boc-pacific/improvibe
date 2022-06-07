import {useState, useRef, useContext, SetStateAction } from 'react';
import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";
import SaveProject from "./SaveProject";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditableElement from '../shared/EditableElement';
import { ProjectContextProvider, ProjectContext } from './ProjectContext';

function ProjectHeader() {

  const style = {
    width: 600,
    height: 60,
    backgroundColor: '#fff',
  };
  const context = useContext(ProjectContext);

  const [newContext, updatedContext] = useState(context);

  const initialValue = "Type Project Name Here";
  const [value, setValue] = useState(initialValue);
  const handleChange = (value) => {
    setValue(value.target.value)
    context.projectNameState = value.target.value
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
              <input className='song-name' placeholder={value} onChange={handleChange}></input>
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