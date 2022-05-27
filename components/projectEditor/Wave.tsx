import { useEffect, useRef, useState } from "react";
import WaveSurfer from 'wavesurfer.js';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#0000FF",
  progressColor: "#0178FF",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,


});

const Wave = ({ id }) => {
  const waveformRef = useRef();
  const wavesurfer = useRef();

  const url =
    "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on('ready', function () {
      wavesurfer.current.play();
    });
  };

  return (
    <div id={id} ref={waveformRef} />
  );
}

export default Wave;
