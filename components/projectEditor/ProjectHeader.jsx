import { useState, useRef, useContext, SetStateAction, useEffect } from 'react';
import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";
import SaveProject from "./SaveProject";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
        item
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
          <PlayProject />
          <TextField id="standard-basic" label="Project Name" variant="standard" className='song-name-editor' onInput={handleChange} />
          {/* <input className='song-name-editor' value={value} onInput={handleChange}></input> */}
        </Grid>
      </div>
      <div>
        <Grid
        item
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