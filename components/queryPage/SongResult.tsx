import * as React from 'react';
import { useContext, createContext, useState } from 'react';
import SongTileContext from '../shared/SongTileContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import LikeButton from '../shared/LikeButton';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { containerClasses } from '@mui/system';
import Player from '../shared/AudioPlayer.jsx';
import ShareButton from './ShareButton';

export default function SongResult({ song, user }: any) {
  const PlayerContainer = styled('div')(({ theme }) => ({
    paddingTop: "50px",
    paddingLeft: "20px",
    marginTop: 0,
    position: "absolute"
  }));
  const GenreContainer = styled('div')(({ theme }) => ({
    margin: "auto",
    marginRight: "20px",
    marginTop: 0,
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
  const artistProfileReference = `../profile/${song.user_id}`;

  const [liked, setLiked] = useState(song.liked);
  const [likes, setLikes] = useState(song.cumulative_likes);

  return (
    <SongTileContext.Provider value={{liked, setLiked, likes, setLikes}}>
      <Card sx={{border: 1, margin: 0, padding: 0, borderColor: 'grey.500', ml: '200px', mr: '200px', height: '160px'}} role='song-search-result'>
        <CardContent sx={{display: 'flex', flexDirection: 'row', pb: 0}}>
          <ArtistImage src={song.photo_url} alt='https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'/>
          <CardContent sx={{display: 'flex', flexDirection: 'column', pb: 0, margin: 0, padding: 0, width: "400px"}}>
            <Typography gutterBottom variant="h5" sx={{ mt: 0, ml: "30px", mb: 0, flexShrink:0}}>
              {song.song_name}
            </Typography>
            <Link href={artistProfileReference} variant="body1" underline="hover" color="text.secondary" sx={{ml: "30px", cursor: "pointer"}}>
              {song.artist_name}
            </Link>
            <PlayerContainer>
            <Player song={song} user={user} color='red'/>
          </PlayerContainer>
          </CardContent>
          <GenreContainer>
            <Typography variant="body2" color="text.secondary">
              Genre: {song.genre}
            </Typography>
          </GenreContainer>
        </CardContent>
        <CardActions sx={{flexDirection: 'row-reverse', padding: 0, margin: 0, pr: 3, pb: 3}}>
          <ShareButton songURL={song.song_path} shares={song.shares}/>
          <LikeButton song={song} user={user} color='red'/>
        </CardActions>
      </Card>
    </SongTileContext.Provider>
  );
}
