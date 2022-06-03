import { Layers } from '@mui/icons-material';
import { Card, Stack } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

interface Props {
  layers: [{ layerId: number, volume: number, pitch: number, tempo: number, start: number, end: number, trackAudio: string, trackName: string, [key: string]: any }],
  layerIndex: number,
  setLayers: Function,
}

const Layer : NextPage<Props> = ({ layers, layerIndex, setLayers }) => {
  const data = layers[layerIndex];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card role='layer'>
      <Stack spacing={2} direction="row" alignItems="center" m={2}>
        <Stack spacing={2} width={400}>
          <Stack direction="row" spacing={2}>
            <div className='layer-name'>{data.trackName}</div>
            <PlayLayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
          </Stack>
          <SoundControllerList layers={layers} layerIndex={layerIndex} setLayers={setLayers} />
        </Stack>
        <div className='wave-holder'>
          <div className='wave'>
            <Card variant="outlined">
              <Wave data={data} isPlaying={isPlaying}/>
            </Card>
          </div>
        </div>
      </Stack>
    </Card>
  )
}

export default Layer;
