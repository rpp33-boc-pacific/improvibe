/* eslint-disable react/display-name */
import {forwardRef, useState} from 'react';
import Link from 'next/link'
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

const TopArtists = (props: { Artists: any[]; }) => {
  const [dense, setDense] = useState(false);
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
                          <FavoriteIcon />
                            {artist.likes}
                        </IconButton>
                      } key = {artist.name}
                    >
                      <ListItemAvatar>
                        <Avatar src="/broken-image.jpg" />
                      </ListItemAvatar>
                      <Link href="/profile" passHref>
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