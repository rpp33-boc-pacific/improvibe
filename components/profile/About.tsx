import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const About = ({ about_me }) => {

  const style = {
    // TO DO
  };

  return (
    <Box>
      <Grid container >
        <Grid item>
          <Typography>
            About Me
          </Typography>
        </Grid>
        <Typography>
          {about_me}
        </Typography>
        <Grid>

        </Grid>
      </Grid>
    </Box>
  );
};

export default About;