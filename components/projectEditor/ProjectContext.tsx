import { createContext, useState } from 'react';

const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [layers, setLayers] = useState([]); //  [{ layerId: null, trackId: null, volume: 50, pitch: 50, tempo: 50, start: 0, end: 0, new: false }]
  const [projectName, setProjectName] = useState('new project');
  const [genre, setGenre] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const projectContextValues = {
    layersValue: [layers, setLayers],
    projectNameValue: [projectName, setProjectName],
    genreValue: [genre, setGenre],
    hashtagsValue: [hashtags, setHashtags],
    isSavedValue: [isSaved, setIsSaved],
  }

  // TODO: make a call to the api to GET all of the project/layer data

  return (
    <ProjectContext.Provider value={projectContextValues}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
