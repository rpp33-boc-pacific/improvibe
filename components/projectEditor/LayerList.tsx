import * as React from 'react';
import { NextPage } from "next";
import { Container, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Layer from './Layer';
import { TabsListUnstyled } from '@mui/base';

interface Props {
  layers: Array<{ layerId: number, volume: number, pitch: number, tempo: number, loop: boolean, trackAudio: string, trackName: string, [key: string]: any }>,
}

const LayerList : NextPage<Props> = ({ layers }) => {
  return (
    <Stack spacing={2} role='list-layers' width={1150} margin={2}>
      {layers.map((layer) => {
        return <Layer key={layer.layerId} data={layer} />
      })}
    </Stack>
  )
}

export default LayerList;