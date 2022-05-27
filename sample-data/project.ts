const project = {
  id: 1,
  user: 'username',
  projectName: 'project name',
  genre: 'genre',
  total_time: 'total time',
  layers: [
    {
      layerId: 1,
      track: 'track',
      trackName: 'track name',
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
      track: 'track',
      trackName: 'track name',
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