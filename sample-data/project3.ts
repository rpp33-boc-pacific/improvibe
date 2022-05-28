const project = {
  id: 1,
  user: 'username',
  projectName: 'wedding beats',
  genre: 'genre',
  total_time: 'total time',
  layers: [
    {
      layerId: 1,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/pachelbels-canon-arranged.mp3',
      trackName: 'canon in d',
      trackTime: 'track time',
      tempo: 30,
      pitch: 40,
      volume: 70,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: false
    },
    {
      layerId: 2,
      trackAudio: 'https://www.mfiles.co.uk/mp3-downloads/arabesque1.mp3',
      trackName: 'arabesque',
      trackTime: 'track time',
      tempo: 80,
      pitch: 100,
      volume: 40,
      start_time: 'start time',
      trim_start: 'trim start',
      trim_end: 'trim end',
      loop: true
    }
  ]
};

export default project;