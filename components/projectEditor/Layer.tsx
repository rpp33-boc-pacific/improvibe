import { Stack } from '@mui/material';
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

  const updateAudioNode = (audioNode: any) => {
    layers[layerIndex].audioNode = audioNode;
    setLayers(layers);
  }

  const updateReadyState = () => {
    layers[layerIndex].isReady = true;
    setLayers(layers);
  }

  const deleteLayer = () => {
    // make a call to the api to delete
    const remainingLayers = layers.filter((item, index) => index !== layerIndex)
    setLayers(remainingLayers);
  }

  const waveView = (
    <div role='layer' className='card-layer'>
      <div className='layer-holder'>
        <div className='layer-details-holder'>
          <Stack direction="row" spacing={2}>
            <PlayLayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
            <div className='layer-name'>{data.trackName}</div>
          </Stack>
          <SoundControllerList changeView={changeView} layers={layers} layerIndex={layerIndex} setLayers={setLayers} isDisabled={true}/>
        </div>
        <div className='wave-holder'>
          <Wave data={data} isPlaying={isPlaying} layerIndex={layerIndex} updateAudioNode={updateAudioNode} updateReadyState={updateReadyState}/>
        </div>
      </div>
    </div>
  );

  const settingsView = (
    <div role='layer' className='card-layer'>
      <div className='layer-holder'>
        <div className='settings-view'>
          <div className='underlined-button' onClick={changeView}>Back</div>
          <SoundControllerList layers={layers} layerIndex={layerIndex} setLayers={setLayers} changeView={() => {}} isDisabled={false}/>
          <div className='underlined-button' onClick={deleteLayer}>Delete</div>
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
