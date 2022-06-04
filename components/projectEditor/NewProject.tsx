// import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from "next/link";


function NewProject() {

  return (
    // <Stack spacing={2} direction="row">
      <Button variant="outlined">
        <Link href='/projects'>
          <a>New Project</a>
        </Link>
      </Button>
    // </Stack>
  );
}

export default NewProject;