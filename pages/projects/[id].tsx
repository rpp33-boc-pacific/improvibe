import type { NextPage } from 'next';
import Head from 'next/head';
import LayerList from '../../components/projectEditor/LayerList';
import ProjectHeader from '../../components/projectEditor/ProjectHeader';
import AddLayer from '../../components/projectEditor/AddLayer';
import NewProject from '../../components/projectEditor/NewProject';
import ProjectList from '../../components/projectEditor/ProjectList';
import SearchAppBar from '../../components/SearchBar';
import project1 from '../../sample-data/project1';
import project2 from '../../sample-data/project2';
import project3 from '../../sample-data/project3';
import projects from '../../sample-data/projects';
import { useRouter } from 'next/router';
import { ProjectContextProvider } from '../../components/projectEditor/ProjectContext';

const sampleProjectOptions = [project1, project2, project3];
const sampleProjects = projects;

const Editor: NextPage = () => {
  const router = useRouter();
  let { id } = router.query;
  if (id === undefined) {
    id = '1';
  }

  const sammpleProject = sampleProjectOptions[Number(id) - 1];

  return (
      <>
      <Head>
        <title>improvibe</title>
        <meta name="project editor" content="page to edit songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchAppBar />
      <h1>Edit Project</h1>
      <div className='main'>
        <div className='layers'>
          <ProjectContextProvider >
            <ProjectHeader />
            <LayerList layers={sammpleProject.layers} />
            <AddLayer />
          </ProjectContextProvider>
        </div>
        <div className='projects'>
          <h2>My Projects</h2>
          <NewProject />
          <ProjectList projects={sampleProjects}/>
        </div>
      </div>
    </>
  )
};

export default Editor;
