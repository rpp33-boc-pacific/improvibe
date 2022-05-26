import React, { useState, useEffect } from 'react';
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddToProjects = () => {
  //I need if this song is already in projects
  //I need the project/song id
  //I need the user id
  let prop = {
    inProjects: false,
  };
  const [inProjects, addToProjects] = useState(prop.inProjects);

  useEffect(() => {
    //update the database
    console.log('The status', inProjects);
  })
  return (
    inProjects === false ?
    <Button
      aria-label="add-project"
      onClick={() => {addToProjects(!inProjects)}}
      sx={{color: "black"}}
      startIcon={<AddCircleIcon></AddCircleIcon>}>
        Add To Projects
    </Button>
    :
    <>
    </>
  )
};

export default AddToProjects