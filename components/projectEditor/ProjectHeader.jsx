import {useState, useRef, SetStateAction } from 'react';
import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";
import SaveProject from "./SaveProject";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditableElement from '../shared/EditableElement';

function ProjectHeader() {

  const style = {
    width: 600,
    height: 60,
    backgroundColor: '#fff',
  };

  const initialValue = "Type Project Name Here";
  const [value, setValue] = useState(initialValue);
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
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
              <input className='song-name' placeholder="Enter Song Name" onChange={handleChange}></input>
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
    </>
  );
}

export default ProjectHeader;