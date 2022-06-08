import Crunker from 'crunker';
import axios from 'axios';

const saveSong = (layers, user) => {
  const user_id = user.user.id
  const name = layers.projectNameState
  const genre = layers.genreState
  layers = layers.layersState[0];

  let modifiedLayers = layers.map((layer) => {
   //First Step
   //For each layer, apply modifications and upload to s3 bucket
   //Return the URL for each layer to get an array of URLs

   //for now trackAudio is being returned unmodified
    return layer.trackAudio
  });


  //Next Merge the URLs into one file
  return new Promise((resolve, reject) => {
    let crunker = new Crunker();
    crunker
      .fetchAudio(...modifiedLayers)
      .then((buffers) => {
        //Apply modifications to buffers? Is this possible?
        return crunker.mergeAudio(buffers);
      })
      .then((merged) => {
        return crunker.export(merged, 'audio/mp3');
      })
      .then((output) => {
        output.blob.name = name
        return output
      })
      .then((song) => {
        //upload to s3 bucket and return url
        return song
      })
      .then((url) => {
        //API request update databasewith song url, name user id etc.
        let song_path = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
        axios.post('api/project', { user_id, name, song_path, genre })
        .then((id) => {
          let songId = id.data
          resolve(songId);
        }).catch((err) => {console.log('Error updating project in database:', err)})
      })
      .catch((err) => {
        console.log('Error flattening layers:', err);
      });

  })
  };

  export default saveSong;


//   const uploadFile = async () => {
//     let { data } = await axios.post("/api/s3/uploadFile", {
//       name: selectedFile.name,
//       type: selectedFile.type,
//     });

//     const url = data.url;
//     let { data: newData } = await axios.put(url, selectedFile, {
//       headers: {
//         "Content-type": selectedFile.type,
//         "Access-Control-Allow-Origin": "*",
//       },
//     });
//   };


// const saveToS3 = () => {
// uploadFile();
// setURL(BUCKET_URL + selectedFile.name)
// handleClose();
// };