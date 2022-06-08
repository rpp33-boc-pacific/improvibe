import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = ({ song, user, color }: any) => {

  const [liked, updateLiked] = useState(song.liked);

  useEffect(() => {
    //update the database for songs liked by this user
  })

  return (
    liked === false ?
    <IconButton aria-label="like-song" onClick={() => {updateLiked(!liked)}}>
      <FavoriteBorderIcon sx={{color: color}}></FavoriteBorderIcon>
    </IconButton>
    :
    <IconButton aria-label="unlike-song" onClick={() => {updateLiked(!liked)}}>
      <FavoriteIcon sx={{color: color}}></FavoriteIcon>
    </IconButton>
  )
};

export default LikeButton;