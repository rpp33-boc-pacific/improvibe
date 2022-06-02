import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LayerList from '../../components/projectEditor/LayerList'
import ProjectHeader from '../../components/projectEditor/ProjectHeader'
import AddLayer from '../../components/projectEditor/AddLayer'
import NewProject from '../../components/projectEditor/NewProject'
import ProjectList from '../../components/projectEditor/ProjectList'
import SearchAppBar from '../../components/SearchBar';
import projects from '../../sample-data/projects';
import { NextPage } from 'next';
import { ProjectContextProvider } from '../../components/projectEditor/ProjectContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Edit Project</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div className='layers'>
                  <ProjectContextProvider>
                    <ProjectHeader />
                    <LayerList layers={[]}/>
                    <AddLayer />
                  </ProjectContextProvider>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className='projects'>
                  <h2>My Projects</h2>
                  <ProjectList projects={sampleProjects}/>
                  <NewProject />
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Projects;

