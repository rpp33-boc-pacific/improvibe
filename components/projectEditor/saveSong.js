import Crunker from 'crunker';
import axios from 'axios';

const saveSong = (layers, user) => {
  const user_id = user.user.id
  const name = layers.projectNameState
  const genre = layers.genreState
  const id = layers.songId
  layers = layers.layersState[0];

  let tracks = layers.map((layer) => {
   //First Step
   //For each layer, apply modifications and upload to s3 bucket
   //Return the URL for each layer to get an array of URLs

   //for now trackAudio is being returned unmodified
    return layer.trackAudio
  });

  let buffers = layers.map((layer) => {
    //First Step
    //For each layer, apply modifications and upload to s3 bucket
    //Return the URL for each layer to get an array of URLs

    //for now trackAudio is being returned unmodified
     return layer.audioNode
   });


  console.log('The Tracks', tracks, 'The buffers', buffers);

  // let crunker = new Crunker()
  // return new Promise((resolve, reject) => {
  //   resolve(buffers);
  // })
  // .then((buffers) => {
  //   crunker.mergeAudio(buffers);
  // })
  // .then((merged) => {
  //   return crunker.export(merged, 'audio/mp3');
  // })
  // .then((output) => {
  //   console.log('the blob url', output.blob.url);
  // })


 // Next Merge the URLs into one file
  return new Promise((resolve, reject) => {
    let crunker = new Crunker();
    crunker
      .fetchAudio(...tracks)
      .then((buffers) => {
        console.log('The Buffers inside the promise', buffers);
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
        //TODO: Song path should be = to the url parameter
        let song_path = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
        if (song) {
          //PUT request
        } else {
          //POST request
          axios.post('api/project', { user_id, name, song_path, genre })
          .then((id) => {
            let songId = id.data
            resolve(songId);
          })
          .catch((err) => {console.log('Error updating project in database:', err)})
          }
        })
        .catch((err) => {
          console.log('Error flattening layers:', err);
        });
    });
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