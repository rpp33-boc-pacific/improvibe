
import { Card, Stack } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

interface Props {
  data: { layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, trackAudio: string, trackName: string, [key: string]: any },
}

const Layer : NextPage<Props> = ({ data }) => {

  return (
    <Card role='layer'>
      <Stack spacing={2} direction="row" alignItems="center" m={2}>
        <Stack spacing={2} width={400}>
          <Stack direction="row" spacing={2}>
            <div className='layer-name'>{data.trackName}</div>
            <PlayLayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
          </Stack>
          <SoundControllerList data={data}/>
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
