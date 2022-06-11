import React, { useContext, useEffect, useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
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
import highestRankingBy from '../../pages/api/songs/most/[genre]';
import fetch from 'node-fetch';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HomePage() {

  const ref = useRef();
  const [songs, setSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [countrySongs, setCountrySongs] = useState([]);
  const [hiphopSongs, sethiphopSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [electronicSongs, setElectronicSongs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  useEffect(() => {
    // The songs will come from the api call
    fetchData();
  }, [])

  const fetchData = () => {

    // GET request to fetch top songs
    axios.get('api/songs/most/all')
    .then((response) => {
      setSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    // GET request to fetch top rock songs
    axios.get('api/songs/most/rock')
    .then((response) => {
      setRockSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    // GET request to fetch top country songs
    axios.get('api/songs/most/country')
    .then((response) => {
      setCountrySongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    // GET request to fetch top hiphop songs
    axios.get('api/songs/most/hiphop')
    .then((response) => {
      sethiphopSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    // GET request to fetch top pop songs
    axios.get('api/songs/most/pop')
    .then((response) => {
      setPopSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    // GET request to fetch top electronic songs
    axios.get('api/songs/most/electronic')
    .then((response) => {
      setElectronicSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  }


  return (
    isLoading === true ? <>Loading...</> :
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <Item> */}
            <span className = 'NavigationBar' >
              <NavigationBar/>
            </span>
          {/* </Item>
        </Grid> */}
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
              <HorizontalCarousel songs = {songs} genre = {'Top'}/>
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
              <HorizontalCarousel songs = {rockSongs} genre = {'Rock'}/>
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
          <Item>
            <div className = 'carousel'>
              <HorizontalCarousel songs = {countrySongs} genre = {'Country'}/>
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
        <Grid item xs={8}>
          <Item>
            <div className = 'carousel'>
              <HorizontalCarousel songs = {hiphopSongs} genre = {'Hip-Hop'}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div className = 'carousel'>
              <HorizontalCarousel songs = {popSongs} genre = {'Pop'}/>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div className = 'carousel'>
              <HorizontalCarousel songs = {electronicSongs} genre = {'Electronic'}/>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
