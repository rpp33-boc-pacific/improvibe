import { useState, useEffect, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { ProjectContext } from './ProjectContext';
import { v4 } from "uuid";

const style = {
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

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
  }

  const addLayerToDB = async (newLayer) => {
    const results = await axios.post('/api/project/layer', newLayer);
    return results.data.layerId;
  }

  const saveToS3 = () => {
    let audio = document.createElement('audio');
    var reader = new FileReader();

    reader.onload = (event) => {
        audio.src = event.target.result;
        audio.addEventListener('loadedmetadata', async function(){
          let duration = Math.round(audio.duration);
          console.log("The duration of the song is of: " + duration + " seconds");

          const trackName = `${selectedFile.name.slice(0, -4)}_${v4() + selectedFile.name.slice(-4)}`
          const trackURL = BUCKET_URL + trackName;
          setURL(trackURL);
          await uploadFile(trackName);

          const newLayer = {
            name: 'Layer Name',
            track_time: duration,
            track_path: trackURL,
            shares: 0,
            project_id: 9,
            searched: 0,
            tempo: 1,
            pitch: 0,
            volume: 0.50,
            start_time: 0,
            trim_start: 0,
            trim_end: duration,
            loop: false
          }

          const layerId = await addLayerToDB(newLayer);
          newLayer.id = layerId;
          let newLayers = layers.map((layer) => layer);
          newLayers[layers.length] = newLayer
          setLayers(newLayers);

          handleClose();
          console.log('The file URL?', fileURL, 'The file?', selectedFile instanceof Blob);
        },false);
    };

    reader.readAsDataURL(selectedFile);
  };

  const uploadFile = async (name) => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: name,
      type: selectedFile.type,
    });

    const url = data.url;
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