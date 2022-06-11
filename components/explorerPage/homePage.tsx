import * as React from 'react';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import AppContext from '../../AppContext';
import Dashboard from './dashboard';
import TopGenres from './topGenres';
import TopArtists from './topArtists';
import YourContributions from './yourContributions';
import HorizontalCarousel from './horizontalCarousel';
import NavigationBar from '../NavigationBar';
import GenreData from './genres-sampleData';
import Artists from './topArtists-sampleData';
import Songs from './topContributions-sampleData';
import Performance from './dashboard-sampleData';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import fetch from 'node-fetch';
// let userId = useContext(AppContext);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item elevation={0}>
            <div className = 'NavigationBar' >
              <NavigationBar/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sx={{padding: '1em', marginLeft:"2em"}}>
          <Item elevation={0}>
            <div className = 'top-genres'>
              <TopGenres GenreData = {GenreData}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}>
            <div className = 'carousel'>
              <HorizontalCarousel/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className = 'dashboard'>
              <Dashboard Performance = {Performance}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}>
            <div className = 'carousel'>
              <HorizontalCarousel/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className = 'your-contributions'>
              <YourContributions  />
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item elevation={0}>
            <div className = 'carousel'>
              <HorizontalCarousel/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className = 'top-artists'>
              <TopArtists/>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
