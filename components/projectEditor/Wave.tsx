import { Hidden } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import SoundTouch from './soundtouch.js';
const { debounce } = require('lodash');

const formWaveSurferOptions = (ref: any, height: number | undefined) => ({
  container: ref,
  waveColor: '#2877cc',
  progressColor: '#accbeb',
  cursorColor: '#f50057',
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: height,
  minPxPerSec: 1,
  partialRender: true,
  hideScrollbar: true,
  interact: false,
});

interface Props {
  data: { trackAudio: string, layerId: number, [key: string]: any },
  isPlaying: boolean,
  layerIndex: number,
  updateAudioNode: Function,
  updateReadyState: Function,
}

declare global {
  interface Window {
    soundtouch: any;
  }
}

const Wave: NextPage<Props> = ({ data, isPlaying, layerIndex, updateAudioNode, updateReadyState }) => {
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
    const height = document.getElementById(`wave-${data.layerId}`)?.clientHeight;
    const options = formWaveSurferOptions(waveformRef.current, height);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(data.trackAudio);

    wavesurfer.current.on('ready', function() {
      const soundTouchObj = new window.soundtouch.SoundTouch(wavesurfer.current.backend.ac.sampleRate);
      soundTouchObj.tempo = data.tempo;
      soundTouchObj.pitchSemitones = data.pitch;

      const start = wavesurfer.current.backend.source.buffer.length * data.start;
      const end = wavesurfer.current.backend.source.buffer.length * data.end;
      wavesurfer.current.backend.source.buffer.extract = function(target: [any], numFrames: number, position: number) {
        let left = wavesurfer.current.backend.source.buffer.getChannelData(0);
        let right = wavesurfer.current.backend.source.buffer.getChannelData(1);

        if (position > start && position < end) {
          for (var i = 0; i < numFrames; i++) {
            target[i * 2] = left[i + position];
            target[i * 2 + 1] = right[i + position];
          }
        }

        return Math.min(numFrames, left.length - position);
      };

      const filter = new window.soundtouch.SimpleFilter(wavesurfer.current.backend.source.buffer, soundTouchObj);
      const audioNode = window.soundtouch.getWebAudioNode(wavesurfer.current.backend.ac, filter);
      wavesurfer.current.backend.setFilter(audioNode);
      wavesurfer.current.backend.filters[0].disconnect();
      updateAudioNode(audioNode);
      updateReadyState();
    });
  });

  useEffect(() => {
    if (wavesurfer.current && data.isReady) {
      if (isPlaying) {
        data.audioNode.connect(wavesurfer.current.backend.ac.destination);
        let songTime = wavesurfer.current.getDuration();
        wavesurfer.current.setVolume(data.volume);
        wavesurfer.current.play(0, data.end * songTime);
      } else {
        wavesurfer.current.pause();
        data.audioNode.disconnect();
      }
    }
  }, [isPlaying]);

  return (
    <div className='wave-card' id={`wave-${data.layerId}`} ref={waveformRef} />
  );
}

export default Wave;
