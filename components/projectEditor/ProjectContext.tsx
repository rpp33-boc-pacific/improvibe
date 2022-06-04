import { createContext, useState } from 'react';
import project1 from '../../sample-data/project1';

const ProjectContext = createContext({});

const ProjectContextProvider = ({ children }: any) => {
  const [layers, setLayers] = useState(project1.layers); //  [{ layerId: null, trackId: null, volume: 50, pitch: 50, tempo: 50, start: 0, end: 0, new: false }]
  const [projectName, setProjectName] = useState('new project');
  const [genre, setGenre] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const projectContextState = {
    layersState: [layers, setLayers],
    projectNameState: [projectName, setProjectName],
    genreState: [genre, setGenre],
    hashtagsState: [hashtags, setHashtags],
    isSavedState: [isSaved, setIsSaved],
  }

  // TODO: make a call to the api to GET all of the project/layer data

  return (
    <ProjectContext.Provider value={projectContextState}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
