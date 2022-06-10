import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import SongTileContext from './SongTileContext';
import Button from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const LikeButton = ({ song, user, color }) => {
  color = '#e8554a'


  const context = useContext(SongTileContext);
  let liked = context.liked;
  let setLiked = context.setLiked;

  const handleLike = () => {
    setLiked(!liked)
    axios.post('api/project');
    // axios.put('api/song/like', {song, user, liked})
    // .then((res) => {
    //   console.log(res)
    // })
    // .catch((err) => {
    //   alert('Unable to update like');
    //   console.log('Error updating like:', err);
    // })
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