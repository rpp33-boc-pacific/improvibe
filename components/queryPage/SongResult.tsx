import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import LikeButton from '../shared/LikeButton';
import { styled } from '@mui/material/styles';
import { containerClasses } from '@mui/system';
import Player from '../shared/AudioPlayer';
import ShareButton from './ShareButton';

export default function SongResult({ song, user }: any) {
  const PlayerContainer = styled('div')(({ theme }) => ({
    // top: '50px',
    // paddingLeft: "100px"
  }));
  const GenreContainer = styled('div')(({ theme }) => ({
    width: "100px",
    margin: "auto",
    float: "none",
    overflow: "hidden",
    textAlign: "right"
  }));
  const ArtistImage = styled('img')(({ theme }) => ({
    flexShrink: 0,
    width: '85px',
    height: '85px',
    borderRadius: '10%'
  }));

  return (
    <Card sx={{border: 1, margin: 0, padding: 0, borderColor: 'grey.500', ml: '200px', mr: '200px'}} role='song-search-result'>
      <CardContent sx={{display: 'flex', flexDirection: 'row', pb: 0}}>
        <ArtistImage src="https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1926421151.jpg" alt='https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'/>
        <CardContent sx={{display: 'flex', flexDirection: 'column', pb: 0, margin: 0, padding: 0, width: "400px"}}>
          <Typography gutterBottom variant="h5" sx={{ mt: 0, ml: "30px", mb: 0, flexShrink:0}}>
            {song.songName}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ml: "30px"}}>
            {song.artistName}
          </Typography>
        </CardContent>
        <GenreContainer>
          <Typography variant="body2" color="text.secondary" sx={{}}>
            Genre: {song.genre}
          </Typography>
        </GenreContainer>
      </CardContent>
      <CardActions sx={{flexDirection: 'row-reverse', padding: 0, margin: 0, pr: 3}}>
        <ShareButton songURL={song.song_path}/>
        <LikeButton song={song} user={user} color='red'/>
        <PlayerContainer>
          <Player song={song} user={user} color='red'/>
        </PlayerContainer>
      </CardActions>
    </Card>
  );
}
