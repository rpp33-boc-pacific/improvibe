import { styled } from '@mui/material/styles';
import Head from 'next/head';
import Paper from '@mui/material/Paper';
import LayerList from '../../components/projectEditor/LayerList'
import ProjectHeader from '../../components/projectEditor/ProjectHeader'
import AddLayer from '../../components/projectEditor/AddLayer'
import NewProject from '../../components/projectEditor/NewProject'
import ProjectList from '../../components/projectEditor/ProjectList'
import NavigationBar from '../../components/NavigationBar';
import projects from '../../sample-data/projects';
import { ProjectContextProvider } from '../../components/projectEditor/ProjectContext';
import AppContext from '../../AppContext';
import { useContext } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const sampleProjects = projects;

// TODO: bring in user context to get current user id list of songs and replace in get route

const Projects = () => {
  const { songs } = useContext(AppContext);

  return (
    <>
    <Head>
      <title>improvibe</title>
      <meta name="project editor" content="page to edit songs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavigationBar />
    <div className='project-editor-grid'>
      <div className='page-title'>Edit Project</div>
      <div className='editor-container'>
        <ProjectContextProvider project_id={null}>
            <ProjectHeader />
            <LayerList />
            <AddLayer />
        </ProjectContextProvider>
      </div>
      <div className='projects-container'>
        <div className='newproject-holder'>
          <div className='project-header'>My Projects</div>
          <NewProject />
        </div>
        {/* TODO: replace with projects list from global context */}
        <ProjectList projects={songs}/>
      </div>
    </div>
  </>
)
};

export default Projects;

