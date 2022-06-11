import axios from 'axios';
import { v4 } from "uuid";

const saveSong = (context, user, Crunker, projectId) => {
  const isSaved = context.isSavedState[0];
  const user_id = user.user.id;
  const name = context.projectNameState[0];
  const genre = context.genreState[0];
  const layers = context.layersState[0];

  let tracks = layers.map((layer) => {
    return layer.track_path
  });

  const uploadFile = async (songName, song) => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: songName,
      type: 'audio/mpeg',
    });

    const url = data.url;
    let { data: newData } = await axios.put(url, song, {
      headers: {
        "Content-type": 'audio/mpeg',
        "Access-Control-Allow-Origin": "*",
      },
    });

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
        return output
      })
      .then(async (song) => {
        let songName = `${name}_${v4()}.mp3`;
        const songUrl = await uploadFile(songName, song)
        return songUrl;
      })
      .then(async (url) => {
        let projectUserId = user_id;
        console.log('user_id', user_id);
        if (projectId !== undefined) {
          projectUserId = await axios.get('/api/project/project', { params: { projectId: projectId } });
          console.log('projectUserId', projectUserId);
        }

        if (isSaved && (projectUserId.data.user_id === user_id)) {
          const updatedProject = {
            id: projectId,
            name,
            genre,
            song_path: url,
          }

          const putResult = await axios.put('/api/project/project', updatedProject);

          layers.forEach(async (layer) => {
            let putLayerResult = await axios.put('/api/project/layer', layer);
            console.log('put layer', putLayerResult);
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

          console.log('projectUserId.data.user_id', projectUserId.data.user_id);
          if (projectUserId.data.user_id !== user_id && projectUserId.data.user_id !== undefined) { // second check is to see if there isnt a project in the database
            layers.forEach(async (layer) => {
              layer.project_id = postResult.data.productId;
              let postLayerResult = await axios.post('/api/project/layer', layer);
              console.log(postLayerResult);
            });
          } else {
            layers.forEach(async (layer) => {
              layer.project_id = postResult.data.productId;
              let putLayerResult = await axios.put('/api/project/layer', layer);
              console.log('put layer', putLayerResult);
            });
          }

          resolve(postResult);
        }
      });
  });
};

  export default saveSong;
