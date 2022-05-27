import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Image from 'next/image';

const Photo = ({ url }) => {

  const style = {

  };

  return (
    <Box>
      <Image
        alt='Picture of the artist'
        src={url}
        height={ }
        width={ }
      />
    </Box>
  );
};

export default Photo;