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
    data.isReady = false;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const changePitch = (event: any) => {
    data.pitch = event.target.value;
    data.isReady = false;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const changeTempo = (event: any) => {
    data.tempo = event.target.value;
    layers[layerIndex] = data;
    data.isReady = false;
    setLayers(layers);
  }

  const changeInterval = (event: any) => {
    data.start = event.target.value[0];
    data.end = event.target.value[1];
    data.isReady = false;
    layers[layerIndex] = data;
    setLayers(layers);
  }

  const tempoLabelFormat = (value: number) => {
    return Math.round(value * 100) + '%';
  }

  const pitchLabelFormat = (value: number) => {
    if (value === 0) return value;
    return (value < 0) ? `${value} semitones` : `+${value} semitones`
  }

  const volumeLabelFormat = (value: number) => {
    return value;
  }

  const timeLabelFormat = (value: number) => {
    if (value === 0 || value === 1) return `${value * 100}%`;
    const percent = value * 100;
    return percent.toFixed(1) + '%';;
  }

  return (
    <div className='controller-list' onClick={changeView}>
      <SoundController settings={{ label: 'volume', value: data.volume, min: 0, max: 100, step: 1 }} labelFormat={volumeLabelFormat} changeSetting={changeVolume} isDisabled={isDisabled}/>
      <SoundController settings={{ label: 'pitch', value: data.pitch, min: -12, max: 12, step: 0.5 }} labelFormat={pitchLabelFormat} changeSetting={changePitch} isDisabled={isDisabled}/>
      <SoundController settings={{ label: 'tempo', value: data.tempo, min: 0.1, max: 4, step: 0.01 }} labelFormat={tempoLabelFormat} changeSetting={changeTempo} isDisabled={isDisabled}/>
      <SoundController settings={{ label: 'interval', value: [data.start, data.end], min: 0, max: 1, step: 0.001 }} labelFormat={timeLabelFormat} changeSetting={changeInterval} isDisabled={isDisabled}/>
    </div>
  )
}

export default SoundControllerList;
