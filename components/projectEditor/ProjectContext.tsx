import { createContext, useState } from 'react';
import project1 from '../../sample-data/project1';
import axios from 'axios';

const ProjectContext = createContext({});

const ProjectContextProvider = ({ children }: any) => {
  const [layers, setLayers] = useState(project1.layers);
  const [projectName, setProjectName] = useState('');
  const [genre, setGenre] = useState('');
  const [playAll, setPlayAll] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const projectContextState = {
    layersState: [layers, setLayers],
    projectNameState: [projectName, setProjectName],
    genreState: [genre, setGenre],
    playAllState: [playAll, setPlayAll],
    isSavedState: [isSaved, setIsSaved],
  }

  // TODO: update this with deployed URL to work in production
  const BASE_URL = 'http://localhost:3000'
  const CURRENT_PROJECT = 1
  // TODO: make a call to the api to GET all of the project/layer data
  axios({
    method: 'GET',
    url: `${BASE_URL}/api/project/layers/${CURRENT_PROJECT}`,
  })
    .then((res) => {
      console.log('RESPONSE FROM GET LAYERS', res);
      // setLayers w/ layer data
      // TODO: causes bug if empty
      // setLayers(res.data)
    })
    .catch((err) => {
      console.log('ERROR FROM GET LAYERS', err);
    })

  return (
    <ProjectContext.Provider value={projectContextState}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
