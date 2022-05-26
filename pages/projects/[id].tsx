import type { NextPage } from 'next';
import Head from 'next/head';
import LayerList from '../../components/projectEditor/LayerList';
import ProjectHeader from '../../components/projectEditor/ProjectHeader'
import AddLayer from '../../components/projectEditor/AddLayer'
import NewProject from '../../components/projectEditor/NewProject'
import ProjectList from '../../components/projectEditor/ProjectList'

const Editor: NextPage = () => {
  return (
      <>
      <Head>
        <title>improvibe</title>
        <meta name="project editor" content="page to edit songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Edit Project</h1>
      <div className='main'>
        <div className='layers'>
          <div>
            <ProjectHeader />
            <LayerList layers={[{ id: 1, settings: { pitch: 10, tempo: 50, volume: 75, loop: false } }, { id: 2, settings: { pitch: 80, tempo: 25, volume: 50, loop: true }}]} />
            <AddLayer />
          </div>
        </div>
        <div className='projects'>
          <h2>My Projects</h2>
          <NewProject />
          <ProjectList />
        </div>
      </div>
    </>
  )
};

export default Editor;