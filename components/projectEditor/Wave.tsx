import { NextPage } from "next";
import { useContext, useEffect, useRef } from "react";
import SoundTouch from './soundtouch.js';
const { debounce } = require('lodash');

const formWaveSurferOptions = (ref: any, height: number | undefined) => ({
  container: ref,
  waveColor: '#fff',
  progressColor: '#93b7db',
  cursorColor: '#f50057',
  barWidth: 2,
  barRadius: 2,
  responsive: true,
  height: height,
  partialRender: true,
  hideScrollbar: true,
  interact: false,
  backgroundColor: '#2877cc',
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

let pauseTimes: any = { playLayer: {}, playAll: {}, markerLayer: {}, markerAll: 0 };
let intervals: any = { allInterval: 0, layerIntervals: [] };

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
    pauseTimes = { playLayer: {}, playAll: {}, markerLayer: {}, markerAll: 0 };
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

      const bufferLength = wavesurfer.current.backend.source.buffer.length;
      let startInterval = bufferLength * data.startInterval / data.trackTime;
      let endInterval = bufferLength * data.endInterval / data.trackTime;
      const delay = data.start * 1000;
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
          if (newPosition > startInterval && newPosition < endInterval) {
            for (var i = 0; i < numFrames; i++) {
              target[i * 2] = left[i + newPosition];
              target[i * 2 + 1] = right[i + newPosition];
            }
          }

          return Math.min(numFrames, left.length - newPosition);
        } else {
          adjustPosition = (delay > 0) ? position : 0;
          return numFrames;
        }
      }}

      const noStartDelay = { extract: (target: [any], numFrames: number, position: number) => {
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

      const noDelayFilter = new window.soundtouch.SimpleFilter(noStartDelay, soundTouchObj);
      const layerAudioNode = window.soundtouch.getWebAudioNode(wavesurfer.current.backend.ac, noDelayFilter);

      updateAudioNode(audioNode);
      updateLayerAudioNode(layerAudioNode);
      updateReadyState();
    });
  });

  const clearMarkerInterval = (interval: number) => {
    window.clearInterval(interval);
    let oldTickDiv = document?.getElementsByClassName(`time-marker`);
    for (let elementInd = 0; elementInd < oldTickDiv.length; elementInd++) {
      let element = oldTickDiv[elementInd];
      element.classList.remove("time-marker");
    }
  }

  const startTimeLineLayer = (start: number, end: number) => {
    let current = (start === 0) ? 2 : start + 1;
    intervals.layerIntervals[data.layerId] = setInterval(() => {
      if (current > end) {
        clearMarkerInterval(intervals.layerIntervals[data.layerId]);
        return;
      }

      pauseTimes.markerLayer[data.layerId] = current;
      let oldTickDiv = document?.getElementsByClassName(`layer-${data.layerId}`)[0].getElementsByClassName(`time-marker`)[0];
      let newTickDiv = document?.getElementsByClassName(`layer-${data.layerId}`)[0].getElementsByClassName(`marker-${current}`)[0];

      if (oldTickDiv !== undefined) {
        oldTickDiv.classList.remove("time-marker");
      }

      if (newTickDiv !== undefined) {
        newTickDiv.classList.add("time-marker");
      }

      current++;
    }, 1000);
  }

  let allInterval: any;

  const startTimeLineAll = (start: number) => {
    let current = (start === 0) ? 2 : start + 1;

    intervals.allInterval = setInterval(() => {
      if (current > 250) {
        clearMarkerInterval(intervals.allInterval);
      }

      pauseTimes.markerAll = current;
      let oldTickDiv = document.querySelectorAll(`.time-marker`);
      let newTickDiv = document.querySelectorAll(`.marker-${current}`);

      Array.from(oldTickDiv).forEach((element) => element.classList.remove('time-marker'));
      Array.from(newTickDiv).forEach((element) => element.classList.add('time-marker'));

      current++;
    }, 1000);
  }

  useEffect(() => {
    if (wavesurfer.current && data.isReady) {
      if (isPlaying) {
        if (playAll) {
          data.audioNode.disconnect();
        }

        clearMarkerInterval(allInterval);
        data.layerAudioNode.connect(wavesurfer.current.backend.ac.destination);
        wavesurfer.current.setVolume(0);
        wavesurfer.current.setPlaybackRate(data.tempo);
        let markerTime = (pauseTimes.markerLayer[data.layerId] > data.start) ? pauseTimes.markerLayer[data.layerId] : data.start;
        startTimeLineLayer(markerTime, data.endInterval + data.start);
        let pausedTime = pauseTimes.playLayer[data.layerId] || 0;
        wavesurfer.current.play(pausedTime, data.endInterval);
      } else {
        pauseTimes.playLayer[data.layerId] = wavesurfer.current.getCurrentTime();
        wavesurfer.current.pause();
        data.layerAudioNode.disconnect();
        clearMarkerInterval(allInterval);
        intervals.layerIntervals.forEach((interval: number) => {
          clearMarkerInterval(interval);
        });
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (wavesurfer.current && data.isReady) {
      if (playAll) {
        if (isPlaying) {
          data.layerAudioNode.disconnect();
        }

        intervals.layerIntervals.forEach((interval: number) => {
          clearMarkerInterval(interval);
        });

        wavesurfer.current.backend.setFilter(data.audioNode);
        wavesurfer.current.setVolume(data.volume);
        wavesurfer.current.setPlaybackRate(data.tempo);
        let pausedTime = pauseTimes.playAll[data.layerId] || 0;
        if (layerIndex === 0) {
          startTimeLineAll(Math.round(pauseTimes.markerAll));
        }

        setTimeout(() => {
          wavesurfer.current.play(pausedTime, data.endInterval);
        }, data.start * 1000);
      } else {
        pauseTimes.playAll[data.layerId] = wavesurfer.current.getCurrentTime();
        wavesurfer.current.pause();
        data.audioNode.disconnect();
        clearMarkerInterval(intervals.allInterval);
        intervals.layerIntervals.forEach((interval: number) => {
          clearMarkerInterval(interval);
        });
      }
    }
  }, [playAll]);

  let gridColumn = data.start + 1;

  return (
    <div className='wave-card' style={{ gridColumn: `${gridColumn} / ${Math.round(data.trackTime / data.tempo) + gridColumn}` }} id={`wave-${data.layerId}`} ref={waveformRef} />
  );
}

export default Wave;
