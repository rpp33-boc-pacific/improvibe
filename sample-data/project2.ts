const project = {
  id: 1,
  user: 'username',
  projectName: 'folk dancing',
  genre: 'genre',
  total_time: 'total time',
  layers: [
    {
      layerId: 1,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/sellengers-round-arranged.mp3',
      trackName: 'recorder',
      trackTime: 'track time',
      tempo: 80,
      pitch: 10,
      volume: 20,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: false
    },
    {
      layerId: 2,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/flowers-of-the-forest-arranged.mp3',
      trackName: 'flowers',
      trackTime: 'track time',
      tempo: 10,
      pitch: 10,
      volume: 90,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: true
    },
    {
      layerId: 3,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/seikilos-epitaph.mp3',
      trackName: 'harp',
      trackTime: 'track time',
      tempo: 50,
      pitch: 70,
      volume: 30,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: true
    }
  ]
};

export default project;