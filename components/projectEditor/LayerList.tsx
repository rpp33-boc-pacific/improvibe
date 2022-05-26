import * as React from 'react';
import Box from '@mui/material/Box';
import Layer from './Layer';
import { TabsListUnstyled } from '@mui/base';

export default function LayerList({ layers }) {
  const listStyle = {
    listStyleType: 'none',
    padding: 0
  }
  const liStyle = {
    marginBottom: 10
  }

  return (
    <ul role='list-layers' style={listStyle}>
      {layers.map((layer) => {
        return (
        <Layer key={layer.id} data={layer} />
        );
      })}
      <li style={liStyle}><Box sx={{
        width: 600,
        height: 100,
        backgroundColor: '#eee',
        '&:hover': {
          backgroundColor: '#ccc',
          opacity: [0.9, 0.8, 0.7],
        },
        borderRadius: 2
      }}>Layer Content Here</Box></li>
      <li style={liStyle}><Box sx={{
        width: 600,
        height: 100,
        backgroundColor: '#eee',
        '&:hover': {
          backgroundColor: '#ccc',
          opacity: [0.9, 0.8, 0.7],
        },
        borderRadius: 2
      }}>Layer Content Here</Box></li>
    </ul>
  )
}