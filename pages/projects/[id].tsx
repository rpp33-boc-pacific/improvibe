import type { NextPage } from 'next';
import Head from 'next/head';
import LayerList from '../../components/projectEditor/LayerList';
import ProjectHeader from '../../components/projectEditor/ProjectHeader';
import AddLayer from '../../components/projectEditor/AddLayer';
import NewProject from '../../components/projectEditor/NewProject';
import ProjectList from '../../components/projectEditor/ProjectList';
import NavigationBar from '../../components/NavigationBar';
import { useRouter } from 'next/router';
import projects from '../../sample-data/projects';
import { ProjectContextProvider } from '../../components/projectEditor/ProjectContext';

const sampleProjects = projects;

const Editor: NextPage = () => {
  const router = useRouter();
  let { id } = router.query;

  return (
      <>
      <Head>
        <title>improvibe</title>
        <meta name="project editor" content="page to edit songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <div className='project-editor-grid'>
        <h1 className='page-title'>Edit Project</h1>
        <div className='editor-container'>
          <ProjectContextProvider >
              <ProjectHeader />
              <LayerList />
              <AddLayer />
          </ProjectContextProvider>
        </div>
        <div className='projects-container'>
          <div className='newproject-holder'>
            <h2>My Projects</h2>
            <NewProject />
          </div>
          <ProjectList projects={sampleProjects}/>
        </div>
      </div>
    </>
  )
};

export default Editor;
