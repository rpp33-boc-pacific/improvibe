import { createContext, useState } from 'react';
import project1 from '../../sample-data/project1';

const ProjectContext = createContext({});

const ProjectContextProvider = ({ children }: any, project_id: any) => {
  const [layers, setLayers] = useState(project1.layers);
  const [projectName, setProjectName] = useState('');
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

  // TODO: make a call to the api to GET all of the project/layer data

  return (
    <ProjectContext.Provider value={projectContextState}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
