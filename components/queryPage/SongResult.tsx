import * as React from 'react';
import { useContext, createContext, useState } from 'react';
import SongTileContext from '../shared/SongTileContext';
import { Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LikeButton from '../shared/LikeButton';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Player from '../shared/AudioPlayer.jsx';
import AppContext from '../../AppContext';
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
    width: '10vh',
    height: '10vh',
    borderRadius: '10px',
  }));

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

  const artistProfileReference = `../profiles/${song.artist_id}`;

  const [liked, setLiked] = useState(song.liked);
  const [likes, setLikes] = useState(song.cumulativeLikes);
  const newUser = useContext(AppContext);

  return (
    <SongTileContext.Provider value={{liked, setLiked, likes, setLikes}}>
      <StyledCard role='song-search-result'>
        <CardContent sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Stack direction='row'>
            <ArtistImage src={song.photo_url || 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'} alt='No Image' width="85px" height="85px"/>
            <CardContent sx={{display: 'flex', flexDirection: 'column', pb: 0, margin: 0, padding: 0, width: "400px"}}>
              <Typography gutterBottom variant="h5" sx={{ mt: 0, ml: "30px", mb: 0, flexShrink:0}}>
                {song.song_name}
              </Typography>
              <Link href={artistProfileReference} variant="body1" underline="hover" color="text.secondary" sx={{ml: "30px", cursor: "pointer"}}>
                {song.artist_name || 'Unknown User'}
              </Link>
              <Typography variant="body2" color="text.secondary" sx={{ml: "30px" }}>
                Genre: {song.genre}
              </Typography>
            </CardContent>
          </Stack>
          <Stack direction='row' justifyContent='flex-end' alignItems='center'>
            <ShareButton songURL={song.song_path} shares={song.shares}/>
            <LikeButton song={song} user={user.user} likes={likes} liked={liked} setLiked={setLiked} setLikes={setLikes} color='#000'/>
            <Player song={song} user={user.user.id} customStyle={{ paddingRight: '0', width: '5vh' }} color='#000'/>
          </Stack>
        </CardContent>
      </StyledCard>
    </SongTileContext.Provider>
  );
}
