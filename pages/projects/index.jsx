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
import { useContext, useEffect } from 'react';
import { getSession } from "next-auth/react";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Projects = (props) => {
  const { songs, setUser, setSongs } = useContext(AppContext);
  setUser(props.user.id);

  useEffect(() => {
    axios.get(`/api/projects/user/${props.user.id}`)
    .then((res) => {
      console.log(res.data);
      if (res.data.songs.length > 0) {
        setSongs(res.data.songs);
      }
    })
    .catch((err) => {
      console.log('error getting layers', err);
    })
  }, []);

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
        <ProjectContextProvider >
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
        <ProjectList projects={songs}/>
      </div>
    </div>
  </>
)
};

export async function getServerSideProps (context) {
  const { req, res } = context;
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, {
      Location: "/logIn",
    });
    res.end();
    return;
  }

  return { props: session };
};

export default Projects;

