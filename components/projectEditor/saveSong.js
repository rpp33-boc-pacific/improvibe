import axios from 'axios';
import { v4 } from "uuid";

const saveSong = (context, user, Crunker) => {
  const isSaved = context.isSavedState[0];
  const user_id = user.user.id;
  const name = context.projectNameState[0];
  const genre = context.genreState[0];
  const layers = context.layersState[0];
  const projectId = context.projectIdState[0];

  let tracks = layers.map((layer) => {
    return layer.trackAudio
  });

  let filters = layers.map((layer) => {
     return layer.filter
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

    crunker.fetchAudio(...tracks)
      .then((buffers) => {
        let modified = buffers.map((buffer, index) => {
          const modifiedBuffer = crunker.padAudio(buffer, 0, layers[index].start);
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
        console.log(song);
        let songName = `${name}_${v4()}.mp3`;
        const songUrl = await uploadFile(songName, song)
        return songUrl;
      })
      .then((url) => {
        console.log('url:', url);
        if (isSaved) {
          axios.put('api/project', { projectId, name, url, genre, track })
          .then((id) => {
            // resolve();
          })
          .catch((error) => {
            console.log('Error updating project in the database', error);
          });
        } else {
          axios.post('api/project', { user_id, name, url, genre })
          .then((id) => {
            let songId = id.data
            resolve(songId);
          })
          .catch((err) => {console.log('Error adding project to the database:', err)})
          }
        })
        .catch((err) => {
          console.log('Error flattening layers:', err);
        });
    });
  };

  export default saveSong;
