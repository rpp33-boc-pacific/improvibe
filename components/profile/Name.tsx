import { Box } from '@mui/material';
// import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const Name = ({ name }) => {

  const style = {
    // TO DO
  };

  return (
    <Box sx={style}>
      <Typography variant='h2'>
        {name}
      </Typography>
    </Box>
  );
};

export default Name;