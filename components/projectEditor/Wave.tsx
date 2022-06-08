import { NextPage } from "next";
import { useContext, useEffect, useRef } from "react";
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
  partialRender: true,
  hideScrollbar: true,
  interact: false,
});

interface Props {
  data: { trackAudio: string, layerId: number, [key: string]: any },
  isPlaying: boolean,
  playAll: boolean,
  layerIndex: number,
  updateAudioNode: Function,
  updateLayerAudioNode: Function,
  updateReadyState: Function,
}

declare global {
  interface Window {
    soundtouch: any;
  }
}

const pauseTimes: any = {};

const Wave: NextPage<Props> = ({ data, isPlaying, playAll, layerIndex, updateAudioNode, updateLayerAudioNode, updateReadyState }) => {
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
      const duration = wavesurfer.current.getDuration();
      const soundTouchObj = new window.soundtouch.SoundTouch(wavesurfer.current.backend.ac.sampleRate);
      soundTouchObj.tempo = data.tempo;
      soundTouchObj.pitchSemitones = data.pitch;

      const startIntervalDelay = wavesurfer.current.backend.source.buffer.length * Math.max(data.startInterval - data.start, 0);
      const endIntervalDelay = wavesurfer.current.backend.source.buffer.length * Math.max(data.endInterval - data.start, 0);
      const delay = data.start * duration * 100;
      let waitingToStart = true;
      let playAudio = false;
      let adjustPosition = 0;

      const delayStart = { extract: (target: [any], numFrames: number, position: number) => {
        const newPosition = position - adjustPosition;
        if (waitingToStart) {
          waitingToStart = false;
          setTimeout(() => {
            playAudio = true
          }, delay);
        }

        let left = wavesurfer.current.backend.source.buffer.getChannelData(0);
        let right = wavesurfer.current.backend.source.buffer.getChannelData(1);

        if (playAudio) {
          if (newPosition > startIntervalDelay && newPosition < endIntervalDelay) {
            for (var i = 0; i < numFrames; i++) {
              target[i * 2] = left[i + newPosition];
              target[i * 2 + 1] = right[i + newPosition];
            }
          }

          return Math.min(numFrames, left.length - newPosition);
        } else {
          adjustPosition += position;
          return numFrames;
        }
      }}

      const startInterval = wavesurfer.current.backend.source.buffer.length * Math.max(data.startInterval, data.start);
      const endInterval = wavesurfer.current.backend.source.buffer.length * data.endInterval;

      const startNoDelay = { extract: (target: [any], numFrames: number, position: number) => {
        let left = wavesurfer.current.backend.source.buffer.getChannelData(0);
        let right = wavesurfer.current.backend.source.buffer.getChannelData(1);

        if (position > startInterval && position < endInterval) {
          for (var i = 0; i < numFrames; i++) {
            target[i * 2] = left[i + position];
            target[i * 2 + 1] = right[i + position];
          }
        }

        return Math.min(numFrames, left.length - position);
      }}

      const delayFilter = new window.soundtouch.SimpleFilter(delayStart, soundTouchObj);
      const audioNode = window.soundtouch.getWebAudioNode(wavesurfer.current.backend.ac, delayFilter);

      const noDelayFilter = new window.soundtouch.SimpleFilter(delayStart, soundTouchObj);
      const layerAudioNode = window.soundtouch.getWebAudioNode(wavesurfer.current.backend.ac, noDelayFilter);

      updateAudioNode(audioNode);
      updateLayerAudioNode(layerAudioNode);
      updateReadyState();
    });
  });

  useEffect(() => {
    if (wavesurfer.current && data.isReady) {
      if (isPlaying) {
        data.audioNode.disconnect();
        wavesurfer.current.backend.setFilter(data.layerAudioNode);
        let songTime = wavesurfer.current.getDuration();
        wavesurfer.current.setVolume(data.volume);
        wavesurfer.current.setPlaybackRate(data.tempo);
        let pausedTime = pauseTimes[data.layerId] || 0;
        wavesurfer.current.play(pausedTime, data.endInterval * songTime);
      } else {
        pauseTimes[data.layerId] = wavesurfer.current.getCurrentTime();
        wavesurfer.current.pause();
        data.layerAudioNode.disconnect();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (wavesurfer.current && data.isReady) {
      if (playAll) {
        data.layerAudioNode.disconnect();
        data.audioNode.connect(wavesurfer.current.backend.ac.destination);
        let songTime = wavesurfer.current.getDuration();
        wavesurfer.current.setVolume(data.volume);
        wavesurfer.current.setPlaybackRate(data.tempo);
        let pausedTime = pauseTimes[data.layerId] || 0;
        wavesurfer.current.play(pausedTime, data.endInterval * songTime);
      } else {
        pauseTimes[data.layerId] = wavesurfer.current.getCurrentTime();
        wavesurfer.current.pause();
        data.audioNode.disconnect();
      }
    }
  }, [playAll]);

  let gridColumn = data.start * 100 || 1;

  return (
    <div className='wave-card' style={{ gridColumn: `${gridColumn} / ${Math.round(data.trackTime / 240 * 100) + gridColumn}` }} id={`wave-${data.layerId}`} ref={waveformRef} />
  );
}

export default Wave;
