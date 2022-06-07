import * as React from 'react';
import Button from '@mui/material/Button';

export default function SaveProject() {
  return (
    <Button
    onClick={() => {
      alert('save clicked');
    }}
    variant="contained"
    sx={{ width: '6vw', height: '4vh', fontSize: '1.7vh'}}
    >Save</Button>
  );
}
