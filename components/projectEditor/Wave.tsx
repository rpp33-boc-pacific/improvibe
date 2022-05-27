import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
const { debounce } = require('lodash');

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
  data: { trackAudio: string, layerId: number, [key: string]: any }
}

const Wave: NextPage<Props> = ({ data }) => {
  const waveformRef: any = useRef();
  const wavesurfer: { current: any, [key: string]: any }= useRef();

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

    wavesurfer.current.on('ready', function () {
      wavesurfer.current.play();
    });

    wavesurfer.current.load(data.trackAudio);
  });

  return (
    <div id={`wave-${data.layerId}`} ref={waveformRef} />
  );
}

export default Wave;
