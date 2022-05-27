import { Box } from '@mui/material';
import { Grid } from '@mui/material';
// import SongTile from '../../components/reusable/SongTile';

const SongTiles = ({ songs, user }) => {
  return (
    <Box>
      {songs.map((song, index) => <Grid item key={index}><SongTile key={index} user={user} song={song} /></Grid>)}
    </Box>
  );
};

export default SongTiles;