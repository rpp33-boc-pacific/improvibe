import { Card, Grid, Stack } from '@mui/material';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

export default function Layer({ data }) {
  return (
    <Card>
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