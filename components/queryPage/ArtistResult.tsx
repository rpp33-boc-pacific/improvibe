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

export default function ArtistResult({ user }: any) {
  const GenreContainer = styled('div')(({ theme }) => ({
    width: "60%",
    float: "none",
    overflow: "hidden",
    textAlign: "right"
  }));
  const ArtistImage = styled('img')(({ theme }) => ({
    flexShrink: 0,
    width: '80px',
    height: '80px',
    borderRadius: '50%'
  }));

  return (
    <Card sx={{border: 1, margin: 0, borderColor: 'grey.500', ml: '200px', mr: '200px'}} role='artist-search-result'>
      <CardContent sx={{display: 'flex', flexDirection: 'row', pb: 0}}>
        <ArtistImage src="https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1926421151.jpg" alt='https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'/>
        <CardContent sx={{display: 'flex', flexDirection: 'column', pb: 0, margin: 0, padding: 0}}>
          <Typography gutterBottom variant="h5" sx={{mt: 0, ml: '30px', mb: 0, textAlign: 'justify'}}>
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ml: '30px'}}>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.about_me}
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions sx={{flexDirection: 'row-reverse', padding: 0, pr: 3}}>
        <Button size="small"> </Button>
      </CardActions>
    </Card>
  );
}
