import {useState, useRef } from 'react';
import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";
import SaveProject from "./SaveProject";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ProjectHeader() {

  const style = {
    width: 600,
    height: 60,
    backgroundColor: '#fff',
  };

  const songName = useRef(null);
  console.log(songName.current)

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
              {/* this will become editable component */}
              <h3 ref={songName}>Song Name</h3>
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