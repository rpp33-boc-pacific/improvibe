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
      <Box sx={style}>
        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
          <div>
            <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center">
              <PlayProject />
              <EditableElement onChange={handleChange}>
                <div style={{ outline: "none" }}>
                  <p>{initialValue}</p>
                </div>
              </EditableElement>
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
      </Box>
    </>
  );
}

export default ProjectHeader;