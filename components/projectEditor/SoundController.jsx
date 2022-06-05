import { Slider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)({
  "& .MuiSlider-thumb": {
    width: '0px',
    height: '0px',
  },
});

const SoundController = ({ settings, changeSetting, isDisabled, labelFormat }) => {
  return (
    <Stack spacing={3} direction='row' justifyContent="space-between" sx={{ height: '2.8vh' }}>
      <div className='setting-label'>{settings.label}</div>
      <CustomSlider valueLabelFormat={labelFormat} step={settings.step} defaultValue={settings.value} min={settings.min} max={settings.max} onChange={changeSetting} valueLabelDisplay="auto" disabled={isDisabled}/>
    </Stack>
  )
};

export default SoundController;
