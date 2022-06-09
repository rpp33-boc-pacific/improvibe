import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { ProjectContext } from './ProjectContext';

function PlayProject() {
  const { playAllState } = useContext(ProjectContext);
  const [playAll, setPlayAll] = playAllState;

  const clickPlayAll = () => {
    setPlayAll(!playAll);
  }

  return (
    <>
      <IconButton
      aria-label="play-project"
      onClick={clickPlayAll}
      >
        <PlayCircleIcon sx={{ fontSize: '2.3vh', color: 'black' }}/>
      </IconButton>
    </>
  );
}

export default PlayProject;