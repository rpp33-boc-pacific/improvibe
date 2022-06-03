import { Stack } from '@mui/material'
import { NextPage } from 'next'
import SoundController from './SoundController'

const openSettingsEditor = (event: any) => {
  // change out the interface for just the sound controller but larger and not disabled
};

interface Props {
  layers: [{ layerId: number, volume: number, pitch: number, tempo: number, start: number, end: number, trackAudio: string, trackName: string, [key: string]: any }],
  layerIndex: number,
  setLayers: Function,
}

const SoundControllerList: NextPage<Props> = ({ layers, layerIndex, setLayers }) => {
  const data = layers[layerIndex];

  const changeVolume = (event: any) => {
    data.volume = event.target.value;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const changePitch = (event: any) => {
    data.pitch = event.target.value;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const changeTempo = (event: any) => {
    data.tempo = event.target.value;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const changeInterval = (event: any) => {
    data.start = event.target.value[0];
    data.end = event.target.value[1];
    layers[layerIndex] = data;
    setLayers(layers);
  }

  return (
    <Stack spacing={1} role='sound-controller-list' onClick={openSettingsEditor}>
      <SoundController settings={{ label: 'volume', value: data.volume, min: 0, max: 100 }} changeSetting={changeVolume}/>
      <SoundController settings={{ label: 'pitch', value: data.pitch, min: 0, max: 100 }} changeSetting={changePitch}/>
      <SoundController settings={{ label: 'tempo', value: data.tempo, min: 0, max: 100 }} changeSetting={changeTempo}/>
      <SoundController settings={{ label: 'interval', value: [data.start, data.end], min: 0, max: 100 }} changeSetting={changeInterval}/>
    </Stack>
  )
}

export default SoundControllerList;
