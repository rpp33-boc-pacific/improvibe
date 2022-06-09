import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  // position: 'absolute' as 'absolute',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BUCKET_URL = "https://improvibe-tracks.s3.amazonaws.com/"

function AddLayer() {
  const [open, setOpen] = useState(false);
  const [fileURL, setURL] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // open / close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    openFileSelector();
  }

  const saveToS3 = () => {
    uploadFile();
    setURL(BUCKET_URL + selectedFile.name)
    handleClose();
    console.log('The file URL?', fileURL, 'The file?', selectedFile instanceof Blob);
  };

  const uploadFile = async () => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: selectedFile.name,
      type: selectedFile.type,
    });

    const url = data.url;
    let { data: newData } = await axios.put(url, selectedFile, {
      headers: {
        "Content-type": selectedFile.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setSelectedFile(null);
  };

  return (
    <div className='add-layer-holder'>
      <Button variant="contained" onClick={handleOpen} sx={{ width: '16vw', height: '5vh', fontSize: '1.7vh'}}>Add Layer</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select an MP3 file to add to project
            </Typography>
              <input
                type="file"
                accept=".mp3,.wav"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              /><br /><br />
            <Button variant="outlined" onClick={saveToS3}>Add MP3 to new layer</Button>
          </Box>
        </Modal>
    </div>
  );
}

export default AddLayer;