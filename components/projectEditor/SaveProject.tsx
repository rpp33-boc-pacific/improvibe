import * as React from 'react';
import Button from '@mui/material/Button';

export default function SaveProject() {
  return (
    <Button
    onClick={() => {
      alert('save clicked');
    }}
    variant="contained"
    size="small"
    >Save</Button>
  );
}
