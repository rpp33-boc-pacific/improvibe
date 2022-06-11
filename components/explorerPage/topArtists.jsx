/* eslint-disable react/display-name */
import React, { useEffect, useState, forwardRef } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import useSWR from 'swr';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fetcher from './fetcher';
import AppContext from '../../AppContext';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const MyButton = forwardRef(({onClick, href, artistName}, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {artistName}
    </a>
  )
})

const TopArtists = () => {
  const [dense, setDense] = useState(false);
  const [artists, setArtists] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  useEffect(() => {
    // The songs will come from the api call
    axios.get('api/artists/topArtists')
    .then((response) => {
      // console.log('respone from db', response);
      setArtists(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  })

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 1, mb: 0.5 }} variant="h6" component="div">
            Top Artists
          </Typography>
          <Demo>
            <List dense={dense}>
              {artists.map((artist) =>{
                return (
                  <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <FavoriteIcon />
                            {artist.likes}
                        </IconButton>
                      } key = {artist.name}
                    >
                      <ListItemAvatar>
                        <Avatar src="/broken-image.jpg" />
                      </ListItemAvatar>
                      <Link href = {`profiles/${artist.id}`} passHref>
                        <MyButton artistName = {artist.name}/>
                      </Link>
                  </ListItem>
                )
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopArtists;