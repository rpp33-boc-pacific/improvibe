// import axios from 'axios';
// import Crunker from 'crunker';

// const saveSong = (context, user, crunker) => {
//   const isSaved = context.isSavedState[0];
//   const user_id = user.user.id;
//   const name = context.projectNameState[0];
//   const genre = context.genreState[0];
//   const layers = context.layersState[0];

//   //returns unmodified tracks
//   let tracks = layers.map((layer) => {
//     return layer.trackAudio
//   });

//   //returns modified ScriptProcessorNode
//   let buffers = layers.map((layer) => {
//      return layer.audioNode
//    });

// //   //FOR THIS TO WORK NEED TO TURN ScriptProcessorNode into AudioBuffer
// //   // let crunker = new Crunker()
// //   // return new Promise((resolve, reject) => {
// //   //   resolve(buffers);
// //   // })
// //   // .then((buffers) => {
// //   //   crunker.mergeAudio(buffers);
// //   // })
// //   // .then((merged) => {
// //   //   return crunker.export(merged, 'audio/mp3');
// //   // })
// //   // .then((output) => {
// //   //   console.log('the blob url', output.blob.url);
// //   // })


//  // Next Merge the URLs into one file
//   return new Promise((resolve, reject) => {
//     let crunker = new Crunker();
//     crunker
//       .fetchAudio(...tracks)
//       .then((buffers) => {
//         //Apply modifications to buffers here? Is this possible?
//         return crunker.mergeAudio(buffers);
//       })
//       .then((merged) => {
//         return crunker.export(merged, 'audio/mp3');
//       })
//       .then((output) => {
//         output.blob.name = name
//         return output
//       })
//       .then((song) => {
//         //upload to s3 bucket and return url
//         return song
//       })
//       .then((url) => {
//         //TODO: Song path should be = to the url parameter not hard coded
//         let song_path = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
//         if (isSaved) {
//           //If song is saved PUT request
//         } else {
//           //POST request
//           axios.post('api/project', { user_id, name, song_path, genre })
//           .then((id) => {
//             let songId = id.data
//             resolve(songId);
//           })
//           .catch((err) => {console.log('Error updating project in database:', err)})
//           }
//         })
//         .catch((err) => {
//           console.log('Error flattening layers:', err);
//         });
//     });
//   };

//   export default saveSong;


//   //S3 bucket copied from Jeff
// //   const uploadFile = async () => {
// //     let { data } = await axios.post("/api/s3/uploadFile", {
// //       name: selectedFile.name,
// //       type: selectedFile.type,
// //     });

// //     const url = data.url;
// //     let { data: newData } = await axios.put(url, selectedFile, {
// //       headers: {
// //         "Content-type": selectedFile.type,
// //         "Access-Control-Allow-Origin": "*",
// //       },
// //     });
// //   };


// // const saveToS3 = () => {
// // uploadFile();
// // setURL(BUCKET_URL + selectedFile.name)
// // handleClose();
// // };