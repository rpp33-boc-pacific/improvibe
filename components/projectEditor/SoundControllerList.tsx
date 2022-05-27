import { Slider } from '@mui/material'

export default function SoundControllerList({ data }) {
  return (
    <ul role='sound-controller-list'>
      <Slider defaultValue={data.volume}/>
      <Slider defaultValue={data.pitch}/>
      <Slider defaultValue={data.tempo}/>
      <Slider defaultValue={Number(data.loop)} step={1}/>
    </ul>
  )
}