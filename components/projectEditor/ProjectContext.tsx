import { createContext, useState } from 'react';
import axios from 'axios';

const ProjectContext = createContext({});

const ProjectContextProvider = ({ children }: any, project_id: any) => {
  const [layers, setLayers] = useState([]);
  const [projectName, setProjectName] = useState('New Project');
  const [genre, setGenre] = useState('');
  const [playAll, setPlayAll] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [projectId, setProductId] = useState(project_id);

  const projectContextState = {
    layersState: [layers, setLayers],
    projectNameState: [projectName, setProjectName],
    genreState: [genre, setGenre],
    playAllState: [playAll, setPlayAll],
    isSavedState: [isSaved, setIsSaved],
    productIdState: [projectId, setProductId],
  }

  axios({
    method: 'GET',
    url: `/api/project/layers/${project_id}`,
  })
    .then((res) => {
      console.log('RESPONSE FROM GET LAYERS', res);
      // if project exists then load data from project into state
        // setLayers(res.data.layers);
        // setProjectName(res.data.projectName);
        // setGenre(res.data.genre);
        // setIsSaved(true);
    })
    .catch((err) => {
      // console.log('ERROR FROM GET LAYERS', err);
    })

  return (
    <ProjectContext.Provider value={projectContextState}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
