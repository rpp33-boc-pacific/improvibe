
import { Card, Stack } from '@mui/material';
import { NextPage } from 'next';
import { createContext } from 'react';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

const LayerContext = createContext();

interface Props {
  data: { layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, trackAudio: string, trackName: string, [key: string]: any },
}

const Layer : NextPage<Props> = ({ data }) => {
  const [isPlaying, setIsPlaying] = React.useState("false");
  const [volume, setVolume] = React.useState(data.volume);
  const [pitch, setPitch] = React.useState(data.pitch);
  const [tempo, setTempo] = React.useState(data.tempo);
  const [loop, setLoop] = React.useState(data.loop);

  const contextValues = {
    playingState: [isPlaying, setIsPlaying],
    volumeState: [volume, setVolume],
    pitchState: [pitch, setPitch],
    tempoState: [tempo, setTempo],
    loopState: [loop, setLoop],
  };

  return (
    <Card role='layer'>
      <LayerContext.Provider value={contextValues}>
        <Stack spacing={2} direction="row" alignItems="center" m={2}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <div>{data.trackName}</div>
              <PlayLayer />
            </Stack>
            <SoundControllerList data={data}/>
          </Stack>
          <div className='wave-holder'>
            <div className='wave'>
              <Card variant="outlined">
                <Wave data={data}/>
              </Card>
            </div>
          </div>
        </Stack>
      </LayerContext.Provider>
    </Card>
  )
}

export default Layer;
