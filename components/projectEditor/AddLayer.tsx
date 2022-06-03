import { useFilePicker } from 'use-file-picker';
import { useState } from 'react';
import { uploadFile } from 'react-s3';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FileContent } from 'use-file-picker/dist/interfaces';

const config = {
  bucketName: 'improvibe-tracks',
  region: 'us-east-1',
  // accessKeyId: ACCESS_KEY,
  // secretAccessKey: SECRET_ACCESS_KEY,
}

function AddLayer() {

  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: '.mp3',
  });

  const handleUpload = async (file: FileContent) => {
    uploadFile(file, config)
        .then((data: any) => console.log(data))
        .catch((err: any) => console.error(err))
  };

  const handleClick = () => {
    openFileSelector();
    handleUpload(filesContent[0]);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleClick}>Add Layer</Button>
      <input type='file'/>
    </Stack>
  );
}

export default AddLayer;