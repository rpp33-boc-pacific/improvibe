import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectList from '../../components/projectEditor/ProjectList';
import projects from '../../sample-data/projects';
import SearchAppBar from '../../components/SearchBar';

const sampleProjects = projects;

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>improvibe</title>
        <meta name="project editor" content="page to edit songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchAppBar />
      <ProjectList projects={sampleProjects}/>
    </>
  )
};

export default Projects;
