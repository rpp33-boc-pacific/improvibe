import { Container, Stack } from '@mui/material';
import Layer from './Layer';

export default function LayerList({ layers }) {
  return (
    <Container>
      <Stack spacing={2} role='list-layers'>
        {layers.map((layer) => {
          return <Layer key={layer.layerId} data={layer} />
        })}
      </Stack>
    </Container>
  )
}
