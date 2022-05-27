import Layer from './Layer';

export default function LayerList({ layers }) {
  return (
    <ul role='list-layers'>
      {layers.map((layer) => {
        return <Layer key={layer.layerId} data={layer} />
      })}
    </ul>
  )
}
