import { NextPage } from "next";
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
    <PlayCircleIcon onClick={handleClick} sx={{ fontSize: '2.3vh' }}/>
  )
}

export default PlayLayer;
