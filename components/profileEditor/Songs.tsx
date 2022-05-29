// import { Alert } from '@mui/material';
// import { CircularProgress } from '@mui/material';
// import { useEditProfile } from '../../lib/profile-helpers';
import { Stack } from '@mui/material';
import Song from './Song';

const Songs = (props: { songs: any[], userId: string }) => {

  // const { editProfile, isLoading, isError } = useEditProfile(userId);
  // const { profile, isLoading, isError } = useProfile(userId);
  // if (isLoading) return <CircularProgress />;
  // if (isError) return <Alert />;

  return (
    <Stack>
      {props.songs.map((song, index) => <Song key={index} song={song}/>)}
    </Stack>
  );
};

export default Songs;