import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LayerList from '../components/projectEditor/LayerList'
import ProjectHeader from '../components/projectEditor/ProjectHeader'
import AddLayer from '../components/projectEditor/AddLayer'
import NewProject from '../components/projectEditor/NewProject'
import ProjectList from '../components/projectEditor/ProjectList'

export default function Editor() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Edit Project</h1>
        <div className='main'>
          <div className='layers'>
            <div>
              <ProjectHeader />
              <LayerList />
              <AddLayer />
            </div>
          </div>
          <div className='projects'>
            <h2>My Projects</h2>
            <NewProject />
            <ProjectList />
          </div>
        </div>
      </Container>
    </>
  );
}