import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
const { debounce } = require('lodash');
import LayerContext from "./LayerContext";

const formWaveSurferOptions = (ref: any) => ({
  container: ref,
  waveColor: "#2877cc",
  progressColor: "#accbeb",
  cursorColor: "#f50057",
  barWidth: 4,
  barRadius: 4,
  responsive: true,
  height: 175,
  normalize: true,
  partialRender: true,
});

interface Props {
  data: { trackAudio: string, layerId: number, [key: string]: any },
  isPlaying: boolean,
}

const Wave: NextPage<Props> = ({ data, isPlaying }) => {
  const waveformRef: any = useRef();
  const wavesurfer: { current: any, [key: string]: any } = useRef();

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = debounce(async () => {
    const WaveSurfer = await require('wavesurfer.js');
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(data.trackAudio);
  });

  if (wavesurfer.current) {
    if (isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  }

  return (
    <div id={`wave-${data.layerId}`} ref={waveformRef} />
  );
}

export default Wave;
