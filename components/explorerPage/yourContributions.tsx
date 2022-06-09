import * as React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useContext } from 'react';
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
import Player from './audioPlayer';
// import Fetcher from './fetcher';
// import Context from './'
// let userId = useContext(Context);

const fetcher = (url: string) => {
  axios.get(url).then(res => res.data);
}
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const YourContributions = () => {
  const [dense, setDense] = React.useState(false);
  const { data, error } = useSWR('/api/songs/1', fetcher)

  if (!data) return <div>loading...</div>
    console.log('data received from API', data);
  const TopSongs = data.slice(0,3);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 1, mb: 0.5 }} variant="h6" component="div">
            Your Top Contributions
          </Typography>
          <Demo>
            <List dense={dense}>
              {TopSongs.map((song: { likes: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; name: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.Key | null | undefined; }) =>{
                return (
                  <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <FavoriteIcon />{song.likes}
                        </IconButton>
                      } key = {song.name}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <Player />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={song.name}
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