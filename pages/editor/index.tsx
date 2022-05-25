import type { NextPage } from 'next';
import Head from 'next/head';
import LayerList from '../../components/projectEditor/LayerList';

const Editor: NextPage = () => {
  return (
    <div>
      <Head>
        <title>improvibe</title>
        <meta name="project editor" content="page to edit songs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayerList layers={[{ id: 1 }, { id: 2 }, { id:3 }, { id: 4 }]}/>
    </div>
  )
};

export default Editor;
