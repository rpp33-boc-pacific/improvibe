import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const LikeButton = ({ song, user, color }: any) => {

  const [liked, updateLiked] = useState(song.liked);

  const handleLike = () => {
    updateLiked(!liked)
    axios.put('api/song/like', {song, user, liked})
    .catch((err) => {
      alert('Unable to update like');
      console.log('Error updating like:', err);
    })
  };

  return (
    liked === false ?
    <IconButton aria-label="like-song" onClick={handleLike}>
      <FavoriteBorderIcon sx={{color: color}}></FavoriteBorderIcon>
    </IconButton>
    :
    <IconButton aria-label="unlike-song" onClick={handleLike}>
      <FavoriteIcon sx={{color: color}}></FavoriteIcon>
    </IconButton>
  )
};

export default LikeButton;