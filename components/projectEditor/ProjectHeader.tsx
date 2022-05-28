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
      </Box>
    </>
  );
}

export default ProjectHeader;