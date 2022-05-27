const project = {
  id: 1,
  user: 'username',
  projectName: 'project name',
  genre: 'genre',
  total_time: 'total time',
  layers: [
    {
      layerId: 1,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/faure-dolly-suite-1-berceuse-piano-solo.mp3',
      trackName: 'piano',
      trackTime: 'track time',
      tempo: 10,
      pitch: 50,
      volume: 65,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: false
    },
    {
      layerId: 2,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/franz-schubert-mertz-standchen-guitar.mp3',
      trackName: 'guitar',
      trackTime: 'track time',
      tempo: 40,
      pitch: 100,
      volume: 25,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: true
    }
  ]
};

export default project;