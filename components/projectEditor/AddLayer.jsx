import { useFilePicker } from 'use-file-picker';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddLayer() {

  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: '.mp3',
  });

  const handleUpload = async (file) => {
    uploadFile(file, config)
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
  };

  const handleClick = () => {
    openFileSelector();
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