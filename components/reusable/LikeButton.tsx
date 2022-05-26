import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = () => {

  //stand in for prop that would be passed down
  let prop = {
    status: false
  };

  const [liked, updateLiked] = useState(prop.status);

  useEffect(() => {
    //update the database
    console.log('The status', liked);
  })

  return (
    liked === false ?
    <IconButton aria-label="like-song" onClick={() => {updateLiked(!liked)}}>
      <FavoriteBorderIcon></FavoriteBorderIcon>
    </IconButton>
    :
    <IconButton aria-label="unlike-song" onClick={() => {updateLiked(!liked)}}>
      <FavoriteIcon></FavoriteIcon>
    </IconButton>
  )
};

export default LikeButton;