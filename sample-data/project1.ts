const project = {
  id: 1,
  user: 'username',
  projectName: 'classical jam',
  genre: 'genre',
  total_time: 'total time',
  layers: [
    {
      layerId: 1,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/faure-dolly-suite-1-berceuse-piano-solo.mp3',
      trackName: 'piano',
      trackTime: 165,
      tempo: 1,
      pitch: 0,
      volume: 0.65,
      startInterval: 0,
      endInterval: 1,
      start: 0,
      loop: false
    },
    {
      layerId: 2,
      trackAudio: 'https://improvibe-tracks.s3.amazonaws.com/fin.mp3',
      trackName: 'beat',
      trackTime: 8,
      tempo: 2,
      pitch: 4,
      volume: 0.25,
      startInterval: 0.25,
      endInterval: 0.75,
      start: 0.4,
      loop: true
    }
  ]
};

export default project;