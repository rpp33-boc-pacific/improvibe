import { useContext, createContext, useState, useEffect } from 'react';
import SongTileContext from './SongTileContext';
import AppContext from '../../AppContext';
import Image from 'next/image';
import LikeButton from './LikeButton';
import AudioPlayer from './AudioPlayer';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import axios from 'axios';

const SongTile = ({song, user, color}) => {
  const router = useRouter();
  const [liked, setLiked] = useState(song.liked)
  const [likes, setLikes] = useState(song.cummulative_likes)
  console.log(song);

  const imageStyle = {
    'border-style': 'solid',
    'width': '18vh',
    'height': '18vh',
    'border-radius': '10px',
    'border-width': '1px',
  }

  const photoUrl = song.photo_url || 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif';

  const ProfileImage = () => {
    return (
      <div className='image-card' >
        <Image src={photoUrl} style={imageStyle} alt="artist-profile-picture" objectFit={"cover"} layout={"responsive"} sizes="18vh" width="18h" height="18vh" />
      </div>
    )
  }

  const songClicked = () => {
    router.push(`projects/${song.song_id}`);
  };

  const artistClicked = () => {
    router.push(`profiles/${song.artist_id}`);
  };

  return(
    <SongTileContext.Provider value={{liked, setLiked, likes, setLikes}}>
      <div className='song-card'>
        <ProfileImage></ProfileImage>
        <div className='song-tile-info-holder'>
          <div className='song-tile-info'>
            <div className='song-name' onClick={songClicked}>{song.song_name}</div>
            <div className='song-artist' onClick={artistClicked}>{song.artist_name}</div>
          </div>
          <div className='song-tile-buttons'>
            <LikeButton color={'#757575'} song={song} user={user} likes={likes} liked={liked} setLiked={setLiked} setLikes={setLikes} padding={1}/>
            <AudioPlayer song={song} user={user} padding={1} customStyle={{ paddingRight: '0' }} color='#000'/>
          </div>
        </div>
      </div>
    </SongTileContext.Provider>
  )
};

export default SongTile;
