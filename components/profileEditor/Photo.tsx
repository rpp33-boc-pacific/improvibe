import React, { useState } from 'react';
import Image from "next/image";
import { Grid } from "@mui/material";
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";

const Photo = ({ userPhotoUrl }) => {

  const [ photoUrl, setphotoUrl ] = useState(userPhotoUrl);
  const [ open, setOpen ] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container>
      <Grid item>
        <Image
          alt='Profile picture'
          src={photoUrl}
          height='300px'
          width='300px'
        />
      </Grid>
      <Grid item>
        <Typography onClick={handleOpen}>Upload image</Typography>
      </Grid>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        {/* TO DO */}
      </Modal>
    </Grid>
  );
};

export default Photo;