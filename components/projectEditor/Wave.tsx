import { useEffect, useRef, useState } from "react";
import _ from 'lodash';

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

const Wave = () => {
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

  const create = _.once(async () => {
    const WaveSurfer = (await import('wavesurfer.js')).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.on('ready', function () {
      wavesurfer.current.play();
    });

    wavesurfer.current.load(url);
  });

  return (
    <div ref={waveformRef} />
  );
}

export default Wave;
