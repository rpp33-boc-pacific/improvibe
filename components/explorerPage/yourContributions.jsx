import React, { useEffect, useState, useContext  } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
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
import Player from '../shared/AudioPlayer';
import Fetcher from './fetcher';
import AppContext from '../../AppContext';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const YourContributions = () => {
  const [dense, setDense] = React.useState(false);
  const [songs, setSongs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext
  let userId = user.user.id;

  useEffect(() => {
    // The songs will come from the api call
    axios.get(`api/top/songs/${userId}`)
    .then((response) => {
      setSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  })

  return (
    isLoading === true ? <>Loading...</> :
    <Box sx={{ flexGrow: 1, maxWidth: 752}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 1, mb: 2 }} variant="h6" component="div">
            Your Top Contributions
          </Typography>
          <Demo>
            <List dense={dense}>
              {songs.map((song) =>{
                return (
                  <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <FavoriteIcon />{song.cumulative_likes}
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <Player song={song} user={user} color={'white'}/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={song.song_name}
                      />
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

export default YourContributions;

