import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dashboard from './dashboard';
import TopGenres from './topGenres';
import TopArtists from './topArtists';
import YourContributions from './yourContributions';
import HorizontalCarousel from './horizontalCarousel';
import SearchBar from '../SearchBar';
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
            <div className = 'searchBar' >
              <SearchBar/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <div className = 'top-genres'>
              <TopGenres GenreData = {GenreData}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
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
          <Item>
            <div className = 'carousel'>
              <HorizontalCarousel/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className = 'your-contributions'>
              <YourContributions Songs = {Songs}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div className = 'carousel'>
              <HorizontalCarousel/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div className = 'top-artists'>
              <TopArtists Artists = {Artists}/>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
