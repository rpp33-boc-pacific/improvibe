import { Alert } from '@mui/material';
import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material';
// import { useProfile } from '../../lib/profile-helpers';

const About = (props: { aboutMe: string, userId: string }) => {
  // const { profile, isLoading, isError } = useProfile(userId);
  // if (isLoading) return <CircularProgress />;
  // if (isError) return <Alert />;
  return (
    <Box>
      {props.aboutMe}
    </Box>
  );
};

export default About;