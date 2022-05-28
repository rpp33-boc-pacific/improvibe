import { Slider, Stack, ThemeProvider, createTheme, withStyles } from '@mui/material';
import { NextPage } from 'next';

const handleChange = (event: Event) => {
  // console.log(event.target.value);
  // update value
};

interface Props {
  settings: { value: number, min: number, max: number, label: string }
}

const SoundController: NextPage<Props> = ({ settings }) => {
  return (
    <Stack spacing={3} direction='row' justifyContent="space-between">
      <div className='setting-label'>{settings.label}</div>
      <Slider defaultValue={settings.value} min={settings.min} max={settings.max} onChange={handleChange}/>
    </Stack>
  )
};

export default SoundController;
