import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import SongTileContext from './SongTileContext';
import Button from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const LikeButton = ({ song, user, color, likes, liked, setLiked, setLikes }) => {
  console.log('likes', likes)
  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    axios.put('api/song/like', {song, user, liked})
    .then((res) => {

    })
    .catch((err) => {
      alert('Unable to update like');
      console.log('Error updating like:', err);
    })
  };

  return (
    liked === false ?
    <IconButton aria-label="like-song" onClick={handleLike}>
      <Stack direction='row'>
        <Typography sx={{color: "#000", 'paddingRight':'0.5vh', 'alignItems': 'center', 'justifyContent': 'center' }} variant="subtitle2">{likes}</Typography>
        <FavoriteBorderIcon sx={{color: '#000'}}></FavoriteBorderIcon>
      </Stack>

    </IconButton>
    :
    <IconButton aria-label="unlike-song" onClick={handleLike}>
      <Stack direction='row'>
        <Typography sx={{color: "#000", 'paddingRight':'0.5vh', 'alignItems': 'center', 'justifyContent': 'center' }} variant="subtitle2">{likes}</Typography>
        <FavoriteIcon sx={{color: '#000'}}></FavoriteIcon>
      </Stack>
    </IconButton>
  )
};

export default LikeButton;