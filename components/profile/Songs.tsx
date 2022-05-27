import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const Songs = ({ songs }) => {

  return (
    <Box>
      <Typography>My Songs</Typography>
      <Box>
        <Grid container>
          {/* map songs */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Songs;