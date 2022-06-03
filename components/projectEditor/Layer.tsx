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
  const [showWaveView, setWaveView] = useState(true);

  const changeView = () => {
    setWaveView(!showWaveView);
  }

  const deleteLayer = () => {
    // make a call to the api to delete
    const remainingLayers = layers.filter((item, index) => index !== layerIndex)
    setLayers(remainingLayers);
  }

  const waveView = (
    <div role='layer' className='card-layer'>
      <div className='layer-holder'>
        <Stack spacing={2} width={400}>
          <Stack direction="row" spacing={2}>
            <div className='layer-name'>{data.trackName}</div>
            <PlayLayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
          </Stack>
          <SoundControllerList changeView={changeView} layers={layers} layerIndex={layerIndex} setLayers={setLayers} isDisabled={true}/>
        </Stack>
        <div className='wave-holder'>
          <div className='wave'>
            <Card variant="outlined">
              <Wave data={data} isPlaying={isPlaying}/>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const settingsView = (
    <div role='layer' className='card-layer'>
      <div className='layer-holder'>
        <div className='settings-view'>
          <div className='settings-button' onClick={changeView}>Back</div>
          <SoundControllerList layers={layers} layerIndex={layerIndex} setLayers={setLayers} changeView={() => {}} isDisabled={false}/>
          <div className='settings-button' onClick={deleteLayer}>Delete</div>
        </div>
      </div>
    </div>
  );

  const display = (showWaveView) ? waveView : settingsView;

  return (
    display
  )
}

export default Layer;
