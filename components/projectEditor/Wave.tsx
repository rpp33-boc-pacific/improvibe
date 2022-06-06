import { NextPage } from "next";
import { useEffect, useRef } from "react";
import SoundTouch from './soundtouch.js';
const { debounce } = require('lodash');

const formWaveSurferOptions = (ref: any) => ({
  container: ref,
  waveColor: "#2877cc",
  progressColor: "#accbeb",
  cursorColor: "#f50057",
  barWidth: 4,
  barRadius: 4,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true,
});

interface Props {
  data: { trackAudio: string, layerId: number, [key: string]: any },
  isPlaying: boolean,
}

declare global {
  interface Window {
    soundtouch: any;
  }
}

let audioNode: any;

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
    SoundTouch(window);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(data.trackAudio);

    wavesurfer.current.on('ready', function() {
      const soundTouchObj = new window.soundtouch.SoundTouch(44100);
      soundTouchObj.tempo = data.tempo;
      soundTouchObj.pitch = data.pitch;
      wavesurfer.current.backend.source.buffer.extract = function(target: [any], numFrames: number, position: number) {
        var l = wavesurfer.current.backend.source.buffer.getChannelData(0),
          r = wavesurfer.current.backend.source.buffer.getChannelData(1);
        for (var i = 0; i < numFrames; i++) {
          target[i * 2] = l[i + position];
          target[i * 2 + 1] = r[i + position];
        }
        return Math.min(numFrames, l.length - position);
      };
      const filter = new window.soundtouch.SimpleFilter(wavesurfer.current.backend.source.buffer, soundTouchObj);
      audioNode = window.soundtouch.getWebAudioNode(wavesurfer.current.backend.ac, filter);
      wavesurfer.current.backend.setFilter(audioNode);
      wavesurfer.current.backend.filters[0].disconnect();
    });
  });

  if (wavesurfer.current) {
    if (isPlaying) {
      audioNode.connect(wavesurfer.current.backend.ac.destination);
      wavesurfer.current.setVolume(data.volume);
      let songTime = wavesurfer.current.getDuration();
      wavesurfer.current.play(data.start * songTime, data.end * songTime);
    } else {
      wavesurfer.current.pause();
    }
  }

  return (
    <div className='wave-card' id={`wave-${data.layerId}`} ref={waveformRef} />
  );
}

export default Wave;
