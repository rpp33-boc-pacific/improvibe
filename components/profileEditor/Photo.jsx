import { useState } from 'react';
import Image from "next/image";
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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

const Photo = ({ photoUrl }) => {

  const [url, setphotoUrl] = useState(photoUrl);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpload = (event) => {
    event.preventDefault();
    var file = document.getElementById('image-file').files[0];
    const reader = new FileReader();

    reader.onload = () => {
      let imgbbError = false;
      let apiError = false;
      let newUrl = '';

      const image = reader.result.slice(23);
      const formData = new FormData();
      formData.append('image', image);

      axios({
        headers: { 'content-type': 'multipart/form-data' },
        method: 'post',
        url: `https://api.imgbb.com/1/upload?key=${process.env.IMG_KEY}`,
        data: formData,
      }).catch((error)=> {
        imgbbError = true;
        // NOTIFY USER
      }).then((res) => {
        if (!imgbbError && res.status.toString()[0] === '2') {
          newUrl = res.data.data.url;
          axios.put(`api/profiles/${userId}/photo`, {
            photoUrl: newUrl
          })
          .catch((error) => {
            apiError = true;
          })
          .then((res) => {
            if (!apiError && res.status.toString()[0] === '2') {
              setphotoUrl(newUrl);
            }
          });
        }
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Image
        alt='Profile picture'
        src={url}
        height={300}
        width={300}
        style={{ borderRadius: '90%' }}
      />
      <Typography onClick={handleOpen}>Upload image</Typography>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose}/>
            <input id='image-file' type='file' accept='image/*'></input>
            <button onClick={handleUpload}>Upload</button>
        </Box>
      </Modal>
    </div>
  );
};

export default Photo;