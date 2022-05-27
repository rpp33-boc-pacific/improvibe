import { Card, Grid, Stack } from '@mui/material';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

export default function Layer({ data }) {
  return (
    <Card>
      <Stack spacing={2} direction="row">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <h5>Track Name</h5>
            <PlayLayer />
          </Stack>
          <SoundControllerList data={data}/>
        </Stack>
        <Wave />
      </Stack>
    </Card>
  )
}