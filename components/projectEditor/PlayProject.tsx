import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

function PlayProject() {

  return (
    <>
      <IconButton
      aria-label="play-project"
      // onClick={}
      >
        <PlayCircleIcon sx={{ fontSize: '2.3vh', color: 'black' }}/>
      </IconButton>
    </>
  );
}

export default PlayProject;