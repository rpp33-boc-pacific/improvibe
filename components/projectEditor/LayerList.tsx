import * as React from 'react';
import { NextPage } from "next";
import { Container, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Layer from './Layer';
import { TabsListUnstyled } from '@mui/base';

// export default function LayerList({ layers }) {
//   const listStyle = {
//     listStyleType: 'none',
//     padding: 0
//   }
//   const liStyle = {
//     marginBottom: 10
//   }

interface Props {
  layers: Array<{ layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, trackAudio: string, trackName: string, [key: string]: any }>,
}

const LayerList : NextPage<Props> = ({ layers }) => {
  return (
    // <ul role='list-layers' style={listStyle}>
    //   {layers.map((layer) => {
    //     return (
    //     <Layer key={layer.id} data={layer} />
    //     );
    //   })}
    //   <li style={liStyle}><Box sx={{
    //     width: 600,
    //     height: 100,
    //     backgroundColor: '#eee',
    //     '&:hover': {
    //       backgroundColor: '#ccc',
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //     borderRadius: 2
    //   }}>Layer Content Here</Box></li>
    //   <li style={liStyle}><Box sx={{
    //     width: 600,
    //     height: 100,
    //     backgroundColor: '#eee',
    //     '&:hover': {
    //       backgroundColor: '#ccc',
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //     borderRadius: 2
    //   }}>Layer Content Here</Box></li>
    // </ul>
    <Stack spacing={2} role='list-layers' width={1150} margin={2}>
      {layers.map((layer) => {
        return <Layer key={layer.layerId} data={layer} />
      })}
    </Stack>
  )
}

export default LayerList;