import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectList from '../../components/projectEditor/ProjectList';


const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>improvibe</title>
        <meta name="project editor" content="page to edit songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProjectList />
    </>
  )
};

export default Projects;
