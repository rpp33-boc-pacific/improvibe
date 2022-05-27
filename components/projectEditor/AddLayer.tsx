import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddLayer() {

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Add Layer</Button>
    </Stack>
  );
}

export default AddLayer;