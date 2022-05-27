import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LayerList from '../../components/projectEditor/LayerList'
import ProjectHeader from '../../components/projectEditor/ProjectHeader'
import AddLayer from '../../components/projectEditor/AddLayer'
import NewProject from '../../components/projectEditor/NewProject'
import ProjectList from '../../components/projectEditor/ProjectList'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Editor() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Edit Project</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Item>
                <div className='layers'>
                  <div>
                    <ProjectHeader />
                    <LayerList layers={[]}/>
                    <AddLayer />
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <div className='projects'>
                  <h2>My Projects</h2>
                  <ProjectList />
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