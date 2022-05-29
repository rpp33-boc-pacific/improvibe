import { Alert } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Stack } from '@mui/material';
import SongTile from '../shared/SongTile';
// import { useProfile } from '../../lib/profile-helpers';

const SongTiles = (props: { songs: any, userId: number }) => {
  // const { profile, isLoading, isError } = useProfile(userId);
  // if (isLoading) return <CircularProgress />;
  // if (isError) return <Alert />;
  return (
    <Stack direction='row' spacing={1}>
      {/* {songs.map((song, index) => <Grid item key={index}><SongTile key={index} user={user} song={song} /></Grid>)} */}
      <SongTile />
      <SongTile />
      <SongTile />
    </Stack>
  );
};

export default SongTiles;