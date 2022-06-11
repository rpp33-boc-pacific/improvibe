import { useState, useRef, useContext, SetStateAction, useEffect } from 'react';
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

  const { projectNameState } = useContext(ProjectContext);
  const [projectName, setProjectName] = projectNameState;
  const [value, setValue] = useState(projectName);

  useEffect(() => {
    setValue(projectName);
  }, [projectNameState]);


  const handleChange = (event) => {
    setValue(event.target.value)
    setProjectName(event.target.value);
  };

  return (
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
          <input className='song-name' value={value} onInput={handleChange}></input>
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
  );
}

export default ProjectHeader;