import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dashboard from './dashboard';
import PopularGenres from './popularGenres';
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <NavigationBar/>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
          <PopularGenres GenreData = {GenreData}/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <HorizontalCarousel/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Dashboard Performance = {Performance}/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <HorizontalCarousel/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <YourContributions Songs = {Songs}/>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <HorizontalCarousel/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <TopArtists Artists = {Artists}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
