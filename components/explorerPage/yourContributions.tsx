import * as React from 'react';
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

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const YourContributions = (props: { Songs: any[]; }) => {
  const [dense, setDense] = React.useState(false);
  const TopSongs = props.Songs.slice(0,3);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 1, mb: 0.5 }} variant="h6" component="div">
            Your Top Contributions
          </Typography>
          <Demo>
            <List dense={dense}>
              {TopSongs.map((song) =>{
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