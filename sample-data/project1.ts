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
      tempo: 1.25,
      pitch: 0,
      volume: 0.65,
      startInterval: 8,
      endInterval: 80,
      start: 0,
      loop: false
    },
    {
      layerId: 2,
      trackAudio: 'https://improvibe-tracks.s3.amazonaws.com/fin.mp3',
      trackName: 'beat',
      trackTime: 8,
      tempo: 0.5,
      pitch: 4,
      volume: 0.50,
      startInterval: 3,
      endInterval: 8,
      start: 6,
      loop: true
    }
  ]
};

export default project;