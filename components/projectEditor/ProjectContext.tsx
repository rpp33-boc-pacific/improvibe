import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProjectContext = createContext({});

const ProjectContextProvider = ({ children }: any) => {
  const router = useRouter();
  let { id } = router.query;

  const [layers, setLayers] = useState([]);
  const [projectName, setProjectName] = useState('New Project');
  const [genre, setGenre] = useState('');
  const [playAll, setPlayAll] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [projectId, setProductId] = useState(null);

  const projectContextState = {
    layersState: [layers, setLayers],
    projectNameState: [projectName, setProjectName],
    genreState: [genre, setGenre],
    playAllState: [playAll, setPlayAll],
    isSavedState: [isSaved, setIsSaved],
    projectIdState: [projectId, setProductId],
  }

  useEffect(() => {
    axios.get(`/api/project/layers/${id}`)
    .then((res) => {
      if (res.data.layers.length > 0) {
        setLayers(res.data.layers);
        setProjectName(res.data.projectDetails[0].name);
        setGenre(res.data.projectDetails[0].genre);
        setIsSaved(true);
      }
    })
    .catch((err) => {
      console.log('error getting layers', err);
    })
  }, ['GET']);

  return (
    <ProjectContext.Provider value={projectContextState}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
