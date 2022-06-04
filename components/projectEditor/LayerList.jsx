import { useContext } from "react";
import { NextPage } from "next";
import Layer from './Layer';
import { ProjectContext } from './ProjectContext';

const LayerList = () => {
  const { layersState } = useContext(ProjectContext);
  const [layers, setLayers] = layersState;

  let layerIndex = 0;

  return (
    <div className='list-layers' role='list-layers' >
      {layers.map((layer) => {
        let currentIndex = layerIndex;
        layerIndex += 1;
        return <Layer key={layer.layerId} layers={layers} layerIndex={currentIndex} setLayers={setLayers} />
      })}
    </div>
  )
}

export default LayerList;
