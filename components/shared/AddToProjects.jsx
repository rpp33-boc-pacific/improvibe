import React, { useState, useEffect } from 'react';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';

const AddToProjects = ({ song, user, color}) => {
  const [inProjects, addToProjects] = useState(false);

 const handleAddToProjects = () => {
   addToProjects(!inProjects);
   axios.post('api/song/add-to-projects', {song, user})
   .then((result) => {
     addToProjects(true);
   })
   .catch((err) => {
     console.log('Error:', err)
   })
 }
 console.log(song, user);
 useEffect(() => {
  axios.get(`api/song/in-projects/${user}?songId=${song.song_id}`)
  .then((data) => {
    if (data.length > 0 ) {
      addToProjects(true);
    }
  })
 })

  return (
    inProjects === false ?
    <Button
      aria-label="add-project"
      onClick={() => {handleAddToProjects()}}
      sx={{color: color}}
      startIcon={<AddCircleIcon></AddCircleIcon>}>
        Add To Projects
    </Button>
    :
    <>
    <Button
      onClick={() => {}}
      sx={{color: color}}>
        In Your Projects
    </Button>
    </>
  )
};

export default AddToProjects