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
import ShareIcon from '@mui/icons-material/Share';
import ApiIcon from '@mui/icons-material/Api';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Dashboard = (props: { Performance: any }) => {
  const [dense, setDense] = React.useState(false);
  const Metrics = props.Performance;
  // console.log('metrics', Metrics)

  return (
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
                      <FavoriteIcon />{Metrics.likes}
                    </IconButton>
                  } key = {Metrics.likes}
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
                      <ShareIcon />{Metrics.shares}
                    </IconButton>
                  } key = {Metrics.shares}
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