import * as React from 'react';
import { useFilePicker } from 'use-file-picker';
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


const BUCKET_URL = "https://testyhyrasz1312.s3.eu-central-1.amazonaws.com/";

function AddLayer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: '.mp3',
  });

  const [file, setFile] = useState(null);


  useEffect(() => {
    setFile(filesContent[0]);
  });

  console.log('file', file);

  const handleClick = () => {
    openFileSelector();
  }

  const saveToS3 = () => {
    uploadFile();
    handleClose();
  };

  const uploadFile = async () => {
    // setUploadingStatus("Uploading the file to AWS S3");

    let { data } = await axios.post("/api/s3/uploadFile", {
      name: file.name,
      type: file.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    // setUploadedFile(BUCKET_URL + file.name);
    setFile(null);
  };

  // if (file && file !== 'undefined') {
  //   uploadFile();
  // }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="outlined" onClick={handleClick}>Add Layer</Button> */}
      {/* <input type='file'/> */}
      <Button onClick={handleOpen}>Add Layer</Button>
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
            <Button variant="outlined" onClick={handleClick}>Select File</Button>
            <br />
            {filesContent.map((file, index) => (
              <div>
                <h2>{file.name}</h2>
                <br />
              </div>
            ))}
            <Button variant="outlined" onClick={saveToS3}>Add MP3 to new layer</Button>
          </Box>
        </Modal>
    </Stack>
  );
}

export default AddLayer;