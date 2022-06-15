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
    width: '10vh',
    height: '10vh',
    borderRadius: '10px',
  }));

  const hoveredStyle = {
    cursor: 'default'
  };

  const StyledCard = styled('div')(({ theme }) => ({
    marginLeft: '15%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '10px',
    borderColor: '#D3D3D3',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    width: '65%',
    height: '25%',
  }));

  const artistProfileReference = `../profiles/${user.id}`;
  console.log(`hi${user}`);
  return (
    <StyledCard role='artist-search-result'>
      <CardContent sx={{display: 'flex', flexDirection: 'row', height: '100%', pb: '8px'}}>
        <ArtistImage src={user.photo_url || 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'} alt='No Image'/>
        <CardContent sx={{display: 'flex', flexDirection: 'column', pb: 0, margin: 0, padding: 0}}>
          <Link href={artistProfileReference} gutterBottom underline="hover" variant="h5" sx={{mt: 0, ml: '30px', mb: 0, textAlign: 'justify', color: "black", cursor: "pointer", fontSize: '2.2vh' }}>
            {user.name}
          </Link>
          <Typography variant="body2" color="text.secondary" sx={{ml: '30px', fontWeight: 'lightest', fontSize: '1.3vh' }}>{user.about_me}</Typography>
        </CardContent>
      </CardContent>
      <CardActions sx={{flexDirection: 'row-reverse', padding: 0, pr: 3}}>
        <Button size="small"> </Button>
      </CardActions>
    </StyledCard>
  );
}
