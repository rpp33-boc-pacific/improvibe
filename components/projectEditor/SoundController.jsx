import { Slider, Stack, ThemeProvider, createTheme, withStyles } from '@mui/material';
import { NextPage } from 'next';

const SoundController = ({ settings, changeSetting }) => {
  return (
    <Stack spacing={3} direction='row' justifyContent="space-between">
      <div className='setting-label'>{settings.label}</div>
      <Slider defaultValue={settings.value} min={settings.min} max={settings.max} onChange={changeSetting}/>
    </Stack>
  )
};

export default SoundController;
