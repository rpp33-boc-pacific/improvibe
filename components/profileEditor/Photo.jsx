import { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
import axios from 'axios';

if (process.env.IMG_KEY === undefined) {
  var IMG_KEY = '8a652fbb22ae8e9e354f46db711dad79';
}

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

  // const context = useContext(AppContext);
  const id = 1; // TEMPORARY

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
        url: `https://api.imgbb.com/1/upload?key=${IMG_KEY}`,
        data: formData,
      }).catch((error)=> {
        imgbbError = true;
      }).then((res) => {
        if (!imgbbError && res.status === 200) {
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
    <div>
      <img
        alt='Profile picture'
        src={photoUrl}
        height={300}
        width={300}
        style={{ borderRadius: '90%' }}
      />
      <Box sx={{ marginLeft: '180px', marginTop: '20px' }}>
        <Typography onClick={handleOpen}><u>Upload iamge</u></Typography>
      </Box>
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