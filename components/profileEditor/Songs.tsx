import { Stack } from '@mui/material';
import Song from './Song';

const Songs = (props: { songs: any[] }) => {

  return (
    <Stack>
      {props.songs.map((song, index) => <Song key={index} song={song}/>)}
    </Stack>
  );
};

export default Songs;