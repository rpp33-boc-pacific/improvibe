import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LikeButton from './LikeButton';
import { styled } from '@mui/material/styles';
import { containerClasses } from '@mui/system';
import Player from './AudioPlayer';

export default function SearchResult() {
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
    <Card sx={{border: 1, margin: 0}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        width="100%"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent sx={{display: 'flex', flexDirection: 'row', pb: 0}}>
        <CoverArt src="https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1926421151.jpg"/>
        <div>
          <Typography gutterBottom variant="h5" sx={{mt: 1, ml: 1, mb: 0, textAlign: 'justify'}}>
            Song Title
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ml: 1}}>
            Artist
          </Typography>
        </div>
        <PlayerContainer>
          <Player/>
        </PlayerContainer>
        <GenreContainer>
          <Typography variant="body2" color="text.secondary" justifyContent="flex-end">
            #Genre
          </Typography>
        </GenreContainer>
      </CardContent>
      <CardActions sx={{flexDirection: 'row-reverse', padding: 0}}>
        <Button size="small">Learn More</Button>
        <Button size="small">Share</Button>
        <LikeButton/>
      </CardActions>
    </Card>
  );
}
