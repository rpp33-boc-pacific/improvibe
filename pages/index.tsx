import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dashboard from '../components/explorerPage/dashboard';
import PopularGenres from '../components/explorerPage/popularGenres';
import TopArtists from '../components/explorerPage/topArtists';
import YourContributions from '../components/explorerPage/yourContributions';
import HorizontalCarousel from '../components/explorerPage/horizontalCarousel';
import SearchBar from '../components/SearchBar';
import GenreData from '../components/explorerPage/genres-sampleData';
import Artists from '../components/explorerPage/topArtists-sampleData';
import Songs from '../components/explorerPage/topContributions-sampleData';
import Performance from '../components/explorerPage/dashboard-sampleData';
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
            <SearchBar/>
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
