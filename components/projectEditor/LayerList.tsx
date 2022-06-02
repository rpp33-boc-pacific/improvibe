import { useContext } from "react";
import { NextPage } from "next";
import { Stack } from '@mui/material';
import Layer from './Layer';
import { ProjectContext } from './ProjectContext';

// interface Props {
//   layers: Array<{ layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, trackAudio: string, trackName: string, [key: string]: any }>,
// }

const LayerList : NextPage = () => {
  const { layersValue } = useContext(ProjectContext);
  const [layers, setLayers] = layersValue;

  return (
    <Stack spacing={2} role='list-layers' width={1150} margin={2}>
      {layers.map((layer) => {
        return <Layer key={layer.layerId} data={layer} />
      })}
    </Stack>
  )
}

export default LayerList;