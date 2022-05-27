import React, { useState, useEffect } from 'react';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddToProjects = ({ song, user}: any) => {
  const [inProjects, addToProjects] = useState(user.liked);

  useEffect(() => {
    //update the database
  })
  return (
    inProjects === false ?
    <Button
      aria-label="add-project"
      onClick={() => {addToProjects(!inProjects)}}
      sx={{color: "white"}}
      startIcon={<AddCircleIcon></AddCircleIcon>}>
        Add To Projects
    </Button>
    :
    <>
    <Button
      aria-label="add-project"
      onClick={() => {addToProjects(!inProjects)}}
      sx={{color: "white"}}>
        Added To Your Projects
    </Button>
    </>
  )
};

export default AddToProjects