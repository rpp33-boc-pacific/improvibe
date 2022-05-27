// import { Box } from '@mui/system';
import { List } from '@mui/material';

const Songs = ({ songs }) => {
  return (
    <List>
      {data.songs.map((song, index) => <Song key={index} song={song} />)}
    </List>
  );
};

export default Songs;