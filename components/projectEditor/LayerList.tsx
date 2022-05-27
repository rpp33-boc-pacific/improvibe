import { NextPage } from "next";
import { Container, Stack } from '@mui/material';
import Layer from './Layer';

interface Props {
  layers: Array<{ layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, [key: string]: any }>,
}

const LayerList : NextPage<Props> = ({ layers }) => {
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

export default LayerList;
