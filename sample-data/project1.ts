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
      trackTime: 'track time',
      tempo: 1,
      pitch: 50,
      volume: 65,
      start: 0,
      end: 75,
      loop: false
    },
    {
      layerId: 2,
      trackAudio: 'https://improvibe-tracks.s3.amazonaws.com/fin.mp3',
      trackName: 'beat',
      trackTime: 'track time',
      tempo: 2,
      pitch: 100,
      volume: 25,
      start: 25,
      end: 60,
      loop: true
    }
  ]
};

export default project;