import { Stack } from '@mui/material';
import { useContext, useState } from 'react';
import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';
import { ProjectContext } from './ProjectContext';
import TimeLine from './TimeLine';

const Layer = ({ layers, layerIndex, setLayers }) => {
  const { playAllState } = useContext(ProjectContext);
  const [playAll, setPlayAll] = playAllState;
  const data = layers[layerIndex];
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWaveView, setWaveView] = useState(true);
  const [layerName, setLayerName] = useState(data.name);

  const changeView = () => {
    if (layers[layerIndex].audioNode) {
      layers[layerIndex].layerAudioNode.disconnect();
      layers[layerIndex].audioNode.disconnect();
    }

    setWaveView(!showWaveView);
  }

  const updateAudioNode = (audioNode) => {
    layers[layerIndex].audioNode = audioNode;
    setLayers(layers);
  }

  const updateLayerAudioNode = (audioNode) => {
    layers[layerIndex].layerAudioNode = audioNode;
    setLayers(layers);
  }

  const updateReadyState = () => {
    layers[layerIndex].isReady = true;
    setLayers(layers);
  }

  const updateFilter = (filter) => {
    layers[layerIndex].audioFilter = filter;
    setLayers(layers);
  }

  const deleteLayer = () => {
    // make a call to the api to delete
    const remainingLayers = layers.filter((item, index) => index !== layerIndex)
    setLayers(remainingLayers);
  }

  const changeLayerName = (event) => {
    data.name = event.target.value;
    layers[layerIndex] = data;
    setLayers(layers);
    setLayerName(event.target.value);
  }

  const waveView = (
    <div role='layer' className={`card-layer layer-${data.id}`}>
      <div className='layer-holder'>
        <div className='layer-details-holder'>
          <Stack direction="row" spacing={2} sx={{ width: '6vw' }}>
            <PlayLayer setIsPlaying={setIsPlaying} isPlaying={isPlaying}/>
            <input className='layer-name' placeholder="Enter Layer Name" value={layerName} onInput={changeLayerName}></input>
          </Stack>
          <SoundControllerList changeView={changeView} layers={layers} layerIndex={layerIndex} setLayers={setLayers} isDisabled={true}/>
        </div>
        <div className='wave-time-holder'>
          <div className='wave-holder'>
            <Wave data={data} isPlaying={isPlaying} playAll={playAll} layerIndex={layerIndex} updateAudioNode={updateAudioNode} updateReadyState={updateReadyState} updateLayerAudioNode={updateLayerAudioNode}/>
          </div>
          <TimeLine startMarker={Math.round(data.trim_start / data.tempo) + data.start_time} endMarker={Math.round(data.trim_end / data.tempo) + data.start_time}/>
        </div>

      </div>
    </div>
  );

  const settingsView = (
    <div role='layer' className='card-layer'>
      <div className='layer-holder'>
        <div className='settings-view'>
          <div className='underlined-button' onClick={changeView}>Back</div>
          <SoundControllerList layers={layers} layerIndex={layerIndex} setLayers={setLayers} changeView={() => {}} isDisabled={false}/>
          <div className='underlined-button' onClick={deleteLayer}>Delete</div>
        </div>
      </div>
    </div>
  );

  const display = (showWaveView) ? waveView : settingsView;

  return (
    display
  )
}

export default Layer;
