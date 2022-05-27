import { Box } from '@mui/material';
import SongTile from '../../components/reusable/SongTile';

const SongTiles = ({ songs }) => {
  return (
    <Box>
      {songs.map((song) => <Grid item><SongTile userProp={} songProp={} /></Grid>)}
    </Box>
  );
};

export default About;