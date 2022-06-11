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
    axios({
      method: 'GET',
      url: `/api/project/layers/${id}`,
    })
      .then((res) => {
        console.log('RESPONSE FROM GET LAYERS', res.data);
        // if project exists then load data from project into state
        if (res.data.projectDetails.length > 0) {
          // setLayers(res.data.layers);
          // setProjectName(res.data.projectDetails.name);
          // setGenre(res.data.projectDetails.genre);
          // setIsSaved(true);
        }
      })
      .catch((err) => {
        console.log('ERROR FROM GET LAYERS', err);
      })
  });

  return (
    <ProjectContext.Provider value={projectContextState}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectContextProvider };
