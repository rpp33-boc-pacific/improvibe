import { Slider, Stack, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    action: {
      disabled: '#3f50b5'
    }
  }
});

export default function SoundController({ settings }) {
  return (
    <Stack spacing={3} direction='row' justifyContent="space-between">
      <div>{settings.label}</div>
      <ThemeProvider theme={theme}>
        <Slider defaultValue={settings.value} min={settings.min} max={settings.max} disabled color="secondary"/>
      </ThemeProvider>
    </Stack>
  )
}