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

export default function SongResult({ song, user }: any) {
  const CoverArt = styled('img')(({ theme }) => ({
    height: '80px',
    width: '80px',
    backgroundSize: 'contain'
  }));
  const PlayerContainer = styled('div')(({ theme }) => ({
    top: '50px',
  }));
  const GenreContainer = styled('div')(({ theme }) => ({
    width: "60%",
    float: "none",
    overflow: "hidden",
    textAlign: "right"
  }));

  return (
    <Card sx={{borderTop: 1, borderBottom: 1, margin: 0, borderColor: 'grey.500'}} role='search-result'>
      <CardContent sx={{display: 'flex', flexDirection: 'row', pb: 0}}>
        <Image src="https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1926421151.jpg" alt='https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif' width='80px' height='80px'/>
        <div>
          <Typography gutterBottom variant="h5" sx={{mt: 1, ml: 1, mb: 0, textAlign: 'justify'}}>
            {song.songName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ml: 1}}>
            {song.artistName}
          </Typography>
        </div>
        <PlayerContainer>
          <Player song={song} user={user} color='red'/>
        </PlayerContainer>
        <GenreContainer>
          <Typography variant="body2" color="text.secondary" justifyContent="flex-end">
            Genre: {song.genre}
          </Typography>
        </GenreContainer>
      </CardContent>
      <CardActions sx={{flexDirection: 'row-reverse', padding: 0, pr: 3}}>
        <Button size="small">Share</Button>
        <LikeButton song={song} user={user} color='red'/>
      </CardActions>
    </Card>
  );
}
