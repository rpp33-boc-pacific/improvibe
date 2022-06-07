import Crunker from 'crunker';

const saveSong = (layers, user) => {
  const userId = user.user.id
  const songName = layers.projectNameState
  const genre = layers.genreState
  layers = layers.layersState[0];
  console.log(userId, songName, genre, layers);

  let modifiedLayers = layers.map((layer) => {
   //First Step
   //For each layer, apply modifications and upload to s3 bucket
   //Return the URL for each layer to get an array of URLs

   //for now trackAudio is being returned unmodified
    return layer.trackAudio
  });


  //Next Merge the URLs into one file
  let crunker = new Crunker();
  crunker
    .fetchAudio(...modifiedLayers)
    .then((buffers) => {
      return crunker.mergeAudio(buffers);
    })
    .then((merged) => {
      return crunker.export(merged, 'audio/mp3');
    })
    .then((output) => {
      output.blob.name = songName
      return output
    })
    .then((song) => {
      //upload to s3 bucket
    })
    .catch((error) => {
      console.log('Error flattening layers:', err);
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