const project = {
  id: 1,
  user: 'username',
  projectName: 'classical jam',
  genre: 'genre',
  total_time: 'total time',
  layers: [
    {
      id: 1,
      name: 'piano',
      track_time: 165,
      track_path: 'https://www.mfiles.co.uk/mp3-downloads/faure-dolly-suite-1-berceuse-piano-solo.mp3',
      shares: 0,
      project_id: 1,
      searched: 0,
      tempo: 1.25,
      pitch: 0,
      volume: 0.65,
      start_time: 0,
      trim_start: 8,
      trim_end: 80,
      loop: false
    },
    {
      id: 2,
      name: 'beat',
      track_time: 8,
      track_path: 'https://improvibe-tracks.s3.amazonaws.com/fin.mp3',
      shares: 0,
      project_id: 1,
      searched: 0,
      tempo: 0.75,
      pitch: 0,
      volume: 0.65,
      start_time: 0,
      trim_start: 0,
      trim_end: 8,
      loop: false
    }
  ]
};

export default project;