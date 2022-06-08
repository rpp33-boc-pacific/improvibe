import React, { useState, useEffect } from 'react';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';

const AddToProjects = ({ song, user}: any) => {
  const [inProjects, addToProjects] = useState(song.in_projects);

 const handleAddToProjects = () => {

 }
  return (
    inProjects === false ?
    <Button
      aria-label="add-project"
      onClick={() => {handleAddToProjects()}}
      sx={{color: "white"}}
      startIcon={<AddCircleIcon></AddCircleIcon>}>
        Add To Projects
    </Button>
    :
    <>
    <Button
      onClick={() => {}}
      sx={{color: "white"}}>
        In Your Projects
    </Button>
    </>
  )
};

export default AddToProjects