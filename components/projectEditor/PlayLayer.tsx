import { NextPage } from "next";
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface Props {
  isPlaying: boolean,
  setIsPlaying: Function,
}

const PlayLayer: NextPage<Props> = ({ isPlaying, setIsPlaying }) => {
  const handleClick = (event: any) => {
    setIsPlaying(!isPlaying);
  }

  return (
    <IconButton sx={ {padding: '0.1vh' }} onClick={handleClick}>
      <PlayCircleIcon sx={{ fontSize: '2.3vh', color: 'black' }} aria-label="play-layer"/>
    </IconButton>
  )
}

export default PlayLayer;
