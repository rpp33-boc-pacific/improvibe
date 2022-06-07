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
    <IconButton
      onClick={handleClick}
      sx={{ fontSize: '2.3vh', color: 'black', padding: '0.1vh' }}
      aria-label="play-layer">
        <PlayCircleIcon ></PlayCircleIcon>
    </IconButton>
  )
}

export default PlayLayer;
