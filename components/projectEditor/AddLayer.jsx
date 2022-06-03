import { useFilePicker } from 'use-file-picker';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

const BUCKET_URL = "https://testyhyrasz1312.s3.eu-central-1.amazonaws.com/";

function AddLayer() {

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

  if (file && file !== 'undefined') {
    uploadFile();
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleClick}>Add Layer</Button>
      {/* <input type='file'/> */}
    </Stack>
  );
}

export default AddLayer;