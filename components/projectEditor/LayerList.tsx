import { useContext } from "react";
import { NextPage } from "next";
import { Stack } from '@mui/material';
import Layer from './Layer';
import { ProjectContext } from './ProjectContext';

const LayerList : NextPage = () => {
  const { layersState } = useContext(ProjectContext);
  const [layers, setLayers] = layersState;

  let layerIndex = 0;

  return (
    <Stack spacing={2} role='list-layers' width={1150} margin={2}>
      {layers.map((layer: any) => {
        let currentIndex = layerIndex;
        layerIndex += 1;
        return <Layer key={layer.layerId} layers={layers} layerIndex={currentIndex} setLayers={setLayers} />
      })}
    </Stack>
  )
}

export default LayerList;
