import axios from 'axios';
import { v4 } from "uuid";

const saveSong = (context, user, Crunker, projectId, window) => {
  const user_id = user.user;
  const isSaved = context.isSavedState[0];
  const name = context.projectNameState[0];
  const genre = context.genreState[0];
  const layers = context.layersState[0];
  const siteURL = 'https://improvibe-tracks.s3.amazonaws.com/'

  console.log('svaed status', isSaved);
  let tracks = layers.map((layer) => {
    return layer.track_path
  });

  const uploadFile = async (songName, song) => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: songName,
      type: 'audio/mpeg',
    });

    const url = data.url;
    let response = await axios.put(url, song, {
      headers: {
        "Content-type": 'audio/mpeg',
        "Access-Control-Allow-Origin": "*",
      },
    });

    console.log(response);

    return url;
  };

  return new Promise((resolve, reject) => {
    let crunker = new Crunker();

    if (layers.length === 0) {
      reject();
      return;
    }

    crunker.fetchAudio(...tracks)
      .then((buffers) => {
        let modified = buffers.map((buffer, index) => {
          const modifiedBuffer = crunker.padAudio(buffer, 0, layers[index].start_time);
          return modifiedBuffer;
        })
        return crunker.mergeAudio(modified);
      })
      .then((merged) => {
        return crunker.export(merged, 'audio/mp3');
      })
      .then((output) => {
        output.blob.name = name
        let songName = `flat-${v4()}.mp3`
        var song = new File([output.blob], songName);
        return {song, songName };
      })
      .then(async ({ song, songName}) => {
        const songUrl = await uploadFile(songName, song)
        return siteURL + songName;
      })
      .then(async (url) => {
        console.log('url', url);
        let projectUserId = user_id;
        if (projectId !== undefined) {
          projectUserId = await axios.get('/api/project/project', { params: { projectId: projectId } });
        }

        if (isSaved && projectUserId.data !== undefined && (projectUserId.data.user_id === user_id)) {
          const updatedProject = {
            id: projectId,
            name,
            genre,
            song_path: url,
          }

          const putResult = await axios.put('/api/project/project', updatedProject);

          layers.forEach(async (layer) => {
            layer.project_id = projectId;
            let putLayerResult = await axios.put('/api/project/layer', layer);
          });

          resolve(putResult);
        } else {
          const newProject = {
            name,
            genre,
            likes: 0,
            shares: 0,
            publicStatus: false,
            user_id: user_id,
            searched: 0,
            total_time: 250,
            song_path: url,
            date_created: Date.now(),
          }

          const postResult = await axios.post('/api/project/project', newProject);

          console.log('projectUserId.data', projectUserId.data);
          if (projectUserId.data !== undefined && projectUserId.data.user_id !== user_id) {
            console.log('if path');
            layers.forEach(async (layer) => {
              layer.project_id = postResult.data.projectId;
              let postLayerResult = await axios.post('/api/project/layer', layer);
            });
          } else {
            console.log('else path');
            layers.forEach(async (layer) => {
              layer.project_id = postResult.data.projectId;
              let putLayerResult = await axios.put('/api/project/layer', layer);
            });
          }

          resolve(postResult);
        }
      });
  });
};

  export default saveSong;
