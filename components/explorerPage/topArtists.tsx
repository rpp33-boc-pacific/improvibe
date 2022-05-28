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
import Player from '../reusable/AudioPlayer';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const TopArtists = (props: { Artists: any[]; }) => {
  const [dense, setDense] = React.useState(false);
  const TopArtists = props.Artists.slice(0,3);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 1, mb: 0.5 }} variant="h6" component="div">
            Top Artists
          </Typography>
          <Demo>
            <List dense={dense}>
              {TopArtists.map((artist) =>{
                return (
                  <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <FavoriteIcon />{artist.likes}
                        </IconButton>
                      } key = {artist.name}
                    >
                      <ListItemAvatar>
                      <Avatar src="/broken-image.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={artist.name}
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

export default TopArtists;