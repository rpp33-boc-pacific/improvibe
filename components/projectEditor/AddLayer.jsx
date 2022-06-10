import { useState, useEffect, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { ProjectContext } from './ProjectContext';
import { v4 } from "uuid";

let AudioContext;

const style = {
  // position: 'absolute' as 'absolute',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BUCKET_URL = "https://improvibe-tracks.s3.amazonaws.com/"

function AddLayer() {
  const [open, setOpen] = useState(false);
  const [fileURL, setURL] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { layersState, productIdState } = useContext(ProjectContext);
  const [layers, setLayers] = layersState;
  const [projectId, setProductId] = productIdState;

  useEffect(() => {
    AudioContext = new (window.AudioContext || window.webkitAudioContext)()
  }, []);

  // open / close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
  }

  // TODO: update this with deployed URL to work in production
  const currentProject = projectId
  const addLayerToDB = (newLayer) => {
    axios({
      method: 'POST',
      url: `/api/project/layers/${currentProject}`,
      data: newLayer
    })
  }

  const saveToS3 = () => {
    let audio = document.createElement('audio');
    var reader = new FileReader();

    reader.onload = (event) => {
        audio.src = event.target.result;
        audio.addEventListener('loadedmetadata', async function(){
          let duration = Math.round(audio.duration);
          console.log("The duration of the song is of: " + duration + " seconds");

          const trackURL = BUCKET_URL + selectedFile.name;
          setURL(trackURL)

          const newLayer = {
            layerId: layers.length + 1,
            trackAudio: trackURL,
            trackName: 'Layer Name',
            trackTime: duration,
            tempo: 1,
            pitch: 0,
            volume: 0.50,
            startInterval: 0,
            endInterval: duration,
            start: 0,
            loop: false
          }

          await uploadFile();

          let newLayers = layers.map((layer) => layer);
          newLayers[layers.length] = newLayer
          setLayers(newLayers);
          addLayerToDB(newLayer); // need to make sure we are submitting with field names corresponding to db
          handleClose();
          console.log('The file URL?', fileURL, 'The file?', selectedFile instanceof Blob);
        },false);
    };

    reader.readAsDataURL(selectedFile);
  };

  const uploadFile = async () => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: `${selectedFile.name.slice(0, -4)}_${v4() + selectedFile.name.slice(-4)}`,
      type: selectedFile.type,
    });

    const url = data.url;
    console.log(url);
    let { data: newData } = await axios.put(url, selectedFile, {
      headers: {
        "Content-type": selectedFile.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setSelectedFile(null);
  };

  return (
    <div className='add-layer-holder'>
      <Button variant="contained" onClick={handleOpen} sx={{ width: '10vw', height: '4vh', fontSize: '1.5vh'}}>Add Layer</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Select an MP3 or WAV file to add to project
            </Typography>
              <input
                type="file"
                accept=".mp3,.wav"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              /><br /><br />
            <Button variant="outlined" onClick={saveToS3} disabled={!selectedFile}>Add file to new layer</Button>
          </Box>
        </Modal>
    </div>
  );
}

export default AddLayer;