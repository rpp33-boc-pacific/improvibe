import { useContext } from 'react';
import AppContext from '../../AppContext';
import Image from 'next/image';
import LikeButton from './LikeButton';
import AudioPlayer from './AudioPlayer';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SongTile = ({song, user, color}) => {
  const ProfileImage = () => {
    return (
      <Image src={song.photo_url} alt="artist-profile-picture" objectFit={"cover"} layout={"fixed"} width="75px" height="75px"/>
    )
  }

  return(
    <Card sx={{ width: 200, height: 200, padding: "1em", marginLeft:"4em" }}>
      <Stack direction="row">
        <ProfileImage></ProfileImage>
        <Stack sx={{textAlign: "right", paddingLeft: ".5em"}}>
          <Typography variant="subtitle1">{song.song_name}</Typography>
          <Typography variant="caption">{song.artist_name}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={8}>
        <AudioPlayer color={color} song={song} user={user}/>
        <LikeButton color={'#757575'} song={song} user={user}/>
      </Stack>
    </Card>
  )
};

export default SongTile;