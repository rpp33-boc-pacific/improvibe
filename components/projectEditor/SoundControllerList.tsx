import { Slider, Stack } from '@mui/material'
import { NextPage } from 'next'
import SoundController from './SoundController'

interface Props {
  data: { volume: number, pitch: number, tempo: number, loop: boolean, [key: string]: any }
}

const SoundControllerList: NextPage<Props> = ({ data }) => {
  return (
    <Stack spacing={1} role='sound-controller-list'>
      <SoundController settings={{ label: 'volume', value: data.volume, min: 0, max: 100 }}/>
      <SoundController settings={{ label: 'pitch', value: data.pitch, min: 0, max: 100 }}/>
      <SoundController settings={{ label: 'tempo', value: data.tempo, min: 0, max: 100 }}/>
      <SoundController settings={{ label: 'loop', value: Number(data.loop), min: 0, max: 1 }}/>
    </Stack>
  )
}

export default SoundControllerList;
