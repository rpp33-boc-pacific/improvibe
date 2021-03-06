import { NextPage } from "next";
import { useEffect, useRef } from "react";
import SoundTouch from './soundtouch.js';
const { debounce } = require('lodash');

const formWaveSurferOptions = (ref: any, height: number | undefined) => ({
  container: ref,
  waveColor: '#fff',
  progressColor: '#93b7db',
  cursorColor: '#F72585',
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
  data: { track_path: string, id: number, [key: string]: any },
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
    const height = document.getElementById(`wave-${data.id}`)?.clientHeight;
    const options = formWaveSurferOptions(waveformRef.current, height);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(data.track_path);

    wavesurfer.current.on('ready', function() {
      const soundTouchObj = new window.soundtouch.SoundTouch(wavesurfer.current.backend.ac.sampleRate);
      soundTouchObj.tempo = data.tempo;
      soundTouchObj.pitchSemitones = data.pitch;

      const bufferLength = wavesurfer.current.backend.source.buffer.length;
      let startInterval = bufferLength * data.trim_start / data.track_time;
      let endInterval = bufferLength * data.trim_end / data.track_time;
      const delay = data.start_time * 1000;
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

        const numberOfChannels =  wavesurfer.current.backend.source.buffer.numberOfChannels;
        let channels = [];
        for (let channel = 0; channel < numberOfChannels; channel++) {
          channels.push(wavesurfer.current.backend.source.buffer.getChannelData(channel));
        }

        if (playAudio) {
          if (newPosition > startInterval && newPosition < endInterval) {
            for (var i = 0; i < numFrames; i++) {
              for (let channel = 0; channel < numberOfChannels; channel++) {
                target[i * 2 + channel] = channels[channel][i + newPosition];
              }
            }
          }

          return Math.min(numFrames, channels[0].length - newPosition);
        } else {
          adjustPosition = (delay > 0) ? position : 0;
          return numFrames;
        }
      }}

      const noStartDelay = { extract: (target: [any], numFrames: number, position: number) => {
        const numberOfChannels =  wavesurfer.current.backend.source.buffer.numberOfChannels;
        let channels = [];
        for (let channel = 0; channel < numberOfChannels; channel++) {
          channels.push(wavesurfer.current.backend.source.buffer.getChannelData(channel));
        }

        if (position > startInterval && position < endInterval) {
          for (var i = 0; i < numFrames; i++) {
            for (let channel = 0; channel < numberOfChannels; channel++) {
              target[i * 2 + channel] = channels[channel][i + position];
            }
          }
        }

        return Math.min(numFrames, channels[0].length - position);
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
    intervals.layerIntervals[data.id] = setInterval(() => {
      if (current > end) {
        clearMarkerInterval(intervals.layerIntervals[data.id]);
        return;
      }

      pauseTimes.markerLayer[data.id] = current;
      let oldTickDiv = document?.getElementsByClassName(`layer-${data.id}`)[0].getElementsByClassName(`time-marker`)[0];
      let newTickDiv = document?.getElementsByClassName(`layer-${data.id}`)[0].getElementsByClassName(`marker-${current}`)[0];

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
        wavesurfer.current.setVolume(0); // TODO: check if volume can be used here without breaking sound
        wavesurfer.current.setPlaybackRate(data.tempo);
        let markerTime = (pauseTimes.markerLayer[data.id] > data.start_time) ? pauseTimes.markerLayer[data.id] : data.start_time;
        startTimeLineLayer(markerTime, data.trim_end + data.start_time);
        let pausedTime = pauseTimes.playLayer[data.id] || 0;
        wavesurfer.current.play(pausedTime, data.trim_end);
      } else {
        pauseTimes.playLayer[data.id] = wavesurfer.current.getCurrentTime();
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
        let pausedTime = pauseTimes.playAll[data.id] || 0;
        if (layerIndex === 0) {
          startTimeLineAll(Math.round(pauseTimes.markerAll));
        }

        setTimeout(() => {
          wavesurfer.current.play(pausedTime, data.trim_end);
        }, data.start_time * 1000);
      } else {
        pauseTimes.playAll[data.id] = wavesurfer.current.getCurrentTime();
        wavesurfer.current.pause();
        data.audioNode.disconnect();
        clearMarkerInterval(intervals.allInterval);
        intervals.layerIntervals.forEach((interval: number) => {
          clearMarkerInterval(interval);
        });
      }
    }
  }, [playAll]);

  let gridColumn = data.start_time + 1;

  return (
    <div className='wave-card' style={{ gridColumn: `${gridColumn} / ${Math.round(data.track_time / data.tempo) + gridColumn}` }} id={`wave-${data.id}`} ref={waveformRef} />
  );
}

export default Wave;
