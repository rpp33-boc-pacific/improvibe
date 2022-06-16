import Button from '@mui/material/Button';
import Link from "next/link";


function NewProject() {

  return (
      <Button variant="outlined" sx={{color:'#3A0CA3', borderColor: '#3A0CA3'}}>
        <Link href='/projects'>
          <a>New Project</a>
        </Link>
      </Button>
  );
}

export default NewProject;