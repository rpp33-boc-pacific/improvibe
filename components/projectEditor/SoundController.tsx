import { Slider, Stack, ThemeProvider, createTheme } from '@mui/material';
import { NextPage } from 'next';

const theme = createTheme({
  palette: {
    action: {
      disabled: '#3f50b5'
    }
  }
});

interface Props {
  settings: { value: number, min: number, max: number, label: string }
}

const SoundController: NextPage<Props> = ({ settings }) => {
  return (
    <Stack spacing={3} direction='row' justifyContent="space-between">
      <div>{settings.label}</div>
      <ThemeProvider theme={theme}>
        <Slider defaultValue={settings.value} min={settings.min} max={settings.max}/>
      </ThemeProvider>
    </Stack>
  )
}

export default SoundController;
