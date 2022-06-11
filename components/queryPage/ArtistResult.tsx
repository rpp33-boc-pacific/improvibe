import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
    width: '85px',
    height: '85px',
    borderRadius: '10%'
  }));
  const hoveredStyle = {
    cursor: 'default'
  };
  const artistProfileReference = `../profile/${user.id}`;
  console.log(`hi${user}`);
  return (
    <Card sx={{border: 1, margin: 0, borderColor: 'grey.500', ml: '200px', mr: '200px'}} role='artist-search-result'>
      <CardContent sx={{display: 'flex', flexDirection: 'row', pb: 0}}>
        <ArtistImage src={user.photo_url} alt='https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'/>
        <CardContent sx={{display: 'flex', flexDirection: 'column', pb: 0, margin: 0, padding: 0}}>
          <Link href={artistProfileReference} gutterBottom underline="hover" variant="h5" sx={{mt: 0, ml: '30px', mb: 0, textAlign: 'justify', color: "black", cursor: "pointer"}}>
            {user.name}
          </Link>
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
