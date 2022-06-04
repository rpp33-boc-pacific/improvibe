import PlayProject from "./PlayProject";
import GenreSelector from "./GenreSelector";
import SaveProject from "./SaveProject";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ProjectHeader() {

  return (
    <>
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
            <h3>Song Name</h3>
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