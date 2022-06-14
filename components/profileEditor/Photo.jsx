import { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import Image from 'next/image';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid',
  boxShadow: 24,
  p: 4,
};

const Photo = ({ photoUrl, handlePhotoUrlChange }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpload = (event) => {
    event.preventDefault();
    var file = document.getElementById('image-file').files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result.slice(23);
      const formData = new FormData();
      formData.append('image', image);

      let imgbbError = false;
      let apiError = false;
      let newUrl = '';
      axios({
        headers: { 'content-type': 'multipart/form-data' },
        method: 'post',
        url: 'https://api.imgbb.com/1/upload?key=8a652fbb22ae8e9e354f46db711dad79',
        data: formData,
      }).catch((error) => {
        imgbbError = true;
      }).then((res) => {
        if (!imgbbError) {
          newUrl = res.data.data.url;
          handlePhotoUrlChange(newUrl);
        } else {
          // NOTIFY USER - Couldn't upload to imgbb
        }
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid container direction='row'>
      <Grid item container justifyContent='center' marginBottom='1vw'>
        <Image
          alt='Profile picture'
          src={photoUrl}
          height={270}
          width={270}
          style={{ borderRadius: '90%' }}
        />
      </Grid>
      <Grid item container justifyContent='center'>
        <Typography onClick={handleOpen}><u>Upload image</u></Typography>
      </Grid>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Grid container sx={style}>
          <Grid sx='1'>
            <CloseIcon onClick={handleClose} />
          </Grid>
          <Grid item='3'>
            <Container>
              <input id='image-file' type='file' accept='image/*'></input>
            </Container>
          </Grid>
          <Grid item='1'>
            <button onClick={handleUpload}>Upload</button>
          </Grid>
        </Grid>
      </Modal>
    </Grid>
  );
};

export default Photo;