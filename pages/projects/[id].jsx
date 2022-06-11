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
import AppContext from '../../AppContext';
import { useContext, useEffect } from 'react';
import Protect from '../../components/Protect';
import { getSession } from "next-auth/react";

const Editor = (props) => {
  const { songs, setUser } = useContext(AppContext);
  const router = useRouter();
  let { id } = router.query;
  setUser(props.user.id);

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

export default Editor;
