import { DiscFull } from '@mui/icons-material';
import { Card, Grid, Stack } from '@mui/material';
import { NextPage } from 'next';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

interface Props {
  data: { layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, [key: string]: any },
}

const Layer : NextPage<Props> = ({ data }) => {
  return (
    <Card role='layer'>
      <Stack spacing={2} direction="row" alignItems="center" m={2}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <div>Track Name</div>
            <PlayLayer />
          </Stack>
          <SoundControllerList data={data}/>
        </Stack>
        <Stack alignItems="center">
          <Card variant="outlined">
            <Wave />
          </Card>
        </Stack>
      </Stack>
    </Card>
  )
}

export default Layer;
