import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import SongTileContext from './SongTileContext';
import Button from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const LikeButton = ({ song, user, color }) => {

  const context = useContext(SongTileContext);
  let liked = context.liked;
  let setLiked = context.setLiked;
  let likes = context.likes;
  let setLikes = context.setLikes

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
      <Stack>
      <FavoriteBorderIcon sx={{color: '#e8554a'}}></FavoriteBorderIcon>
      <Typography sx={{color: "#e8554a"}} variant="subtitle2">{likes}</Typography>
      </Stack>

    </IconButton>
    :
    <IconButton aria-label="unlike-song" onClick={handleLike}>
      <Stack>
      <FavoriteIcon sx={{color: '#e8554a'}}></FavoriteIcon>
      <Typography sx={{color: "#e8554a"}} variant="subtitle2">{likes}</Typography>
      </Stack>
    </IconButton>
  )
};

export default LikeButton;