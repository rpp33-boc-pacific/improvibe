import { Slider, Stack, ThemeProvider, createTheme, withStyles } from '@mui/material';
import { NextPage } from 'next';

const SoundController = ({ settings, changeSetting, isDisabled }) => {
  return (
    <Stack spacing={3} direction='row' justifyContent="space-between" sx={{ height: '2.8vh' }}>
      <div className='setting-label'>{settings.label}</div>
      <Slider defaultValue={settings.value} min={settings.min} max={settings.max} onChange={changeSetting} valueLabelDisplay="auto" disabled={isDisabled} />
    </Stack>
  )
};

export default SoundController;
