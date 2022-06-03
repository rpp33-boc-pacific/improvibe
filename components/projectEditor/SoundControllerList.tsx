import { Stack } from '@mui/material'
import { NextPage } from 'next'
import SoundController from './SoundController'

interface Props {
  layers: [{ layerId: number, volume: number, pitch: number, tempo: number, start: number, end: number, trackAudio: string, trackName: string, [key: string]: any }],
  layerIndex: number,
  setLayers: Function,
  changeView: any,
  isDisabled: boolean,
}

const SoundControllerList: NextPage<Props> = ({ layers, layerIndex, setLayers, changeView, isDisabled }) => {
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
    data.tempo = event.target.value / 100;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const changeInterval = (event: any) => {
    data.start = event.target.value[0];
    data.end = event.target.value[1];
    layers[layerIndex] = data;
    setLayers(layers);
  }
  // spacing={1} role='sound-controller-list' onClick={openSettingsEditor}
  return (
    <div className='controller-list' onClick={changeView}>
      <SoundController settings={{ label: 'volume', value: data.volume, min: 0, max: 100 }} changeSetting={changeVolume} isDisabled={isDisabled}/>
      <SoundController settings={{ label: 'pitch', value: data.pitch, min: 0, max: 100 }} changeSetting={changePitch} isDisabled={isDisabled}/>
      <SoundController settings={{ label: 'tempo', value: data.tempo, min: 0, max: 500 }} changeSetting={changeTempo} isDisabled={isDisabled}/>
      <SoundController settings={{ label: 'interval', value: [data.start, data.end], min: 0, max: 100 }} changeSetting={changeInterval} isDisabled={isDisabled}/>
    </div>
  )
}

export default SoundControllerList;
