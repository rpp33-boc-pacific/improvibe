import Button from '@mui/material/Button';
import Link from "next/link";


function NewProject() {

  return (
      <Button variant="outlined" sx={{ width: '12vw', height: '4vh', fontSize: '1.7vh'}}>
        <Link href='/projects'>
          <a>New Project</a>
        </Link>
      </Button>
  );
}

export default NewProject;