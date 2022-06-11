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
import ShareIcon from '@mui/icons-material/Share';
import ApiIcon from '@mui/icons-material/Api';
import AppContext from '../../AppContext';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Dashboard = () => {
  const [dense, setDense] = React.useState(false);
  const [metrics, setMetrics] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  useEffect(() => {
    // The songs will come from the api call
    axios.get('api/top/dashboard/1')
    .then((response) => {
      setMetrics(response.data);
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
          <Typography sx={{ mt: 2, mb: 10 }} variant="h6" component="div">
            Your Dashboard
          </Typography>
          <Demo>
            <List dense={dense}>
              <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <FavoriteIcon />{metrics[0].totalLikes}
                    </IconButton>
                  } key = {metrics[0].totalLikes}
                >
                  <ListItemAvatar>
                  <ApiIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary='Total Likes'
                  />
              </ListItem>
              <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <ShareIcon />{metrics[0].totalShares}
                    </IconButton>
                  } key = {metrics[0].totalShares}
                >
                  <ListItemAvatar>
                  <ApiIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary='Total Shares'
                  />
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;