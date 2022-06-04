import Button from '@mui/material/Button';
import Link from "next/link";


function NewProject() {

  return (
      <Button variant="outlined">
        <Link href='/projects'>
          <a>New Project</a>
        </Link>
      </Button>
  );
}

export default NewProject;