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

  const ref = useRef();
  const [songs, setSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [countrySongs, setCountrySongs] = useState([]);
  const [hiphopSongs, sethiphopSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [classicalSongs, setClassicalSongs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  var userId = user.user.id;

  useEffect(() => {
    if (userId !== undefined) {
      fetchData();
    }
  }, [user])

  const fetchData = () => {
    axios.get(`api/home/top/${userId}`)
    .then((response) => {
      console.log(response.data.songs);
      setSongs(response.data.songs);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    axios.get(`api/home/rock/${userId}`)
    .then((response) => {
      console.log(response.data.songs)
      setRockSongs(response.data.songs);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    axios.get(`api/home/country/${userId}`)
    .then((response) => {
      setCountrySongs(response.data.songs);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    axios.get(`api/home/hip-hop/${userId}`)
    .then((response) => {
      sethiphopSongs(response.data.songs);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    axios.get(`api/home/pop/${userId}`)
    .then((response) => {
      setPopSongs(response.data.songs);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })

    axios.get(`api/home/classical/${userId}`)
    .then((response) => {
      setClassicalSongs(response.data.songs);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  }

  return (
    isLoading === true ? <>Loading...</> :
    <>
    <div className = 'NavigationBar' >
      <NavigationBar/>
    </div>
    <div className='home-grid'>
      <div className = 'carousel home-categories'>
        <HorizontalCarousel songs = {songs} genre = {'Top'}/>
      </div>
      <div className = 'carousel home-categories'>
        <HorizontalCarousel songs = {rockSongs} genre = {'Rock'}/>
      </div>
      <div className = 'carousel home-categories'>
        <HorizontalCarousel songs = {countrySongs} genre = {'Country'}/>
      </div>
      <div className = 'carousel home-categories'>
        <HorizontalCarousel songs = {hiphopSongs} genre = {'Hip-Hop'}/>
      </div>
      <div className = 'carousel home-categories'>
        <HorizontalCarousel songs = {popSongs} genre = {'Pop'}/>
      </div>
      <div className = 'carousel home-categories'>
        <HorizontalCarousel songs = {classicalSongs} genre = {'Classical'}/>
      </div>
    </div>
    </>
  );
}
