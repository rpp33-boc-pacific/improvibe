import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { LockOpen } from '@mui/icons-material';
import axios from 'axios';

const Songs = ({ song }) => {
  const [ publicState, setpublicState ] = useState(song.public);

  const handleLockClick = async () => {
    let err;
    try {
      await axios.post(`/api/songs/${song.id}/public`);
    } catch (error) {
      err = error;
    } finally {
      if (err === undefined) {
        setpublicState(!publicState);
      }
    }
  };

  const handleLockOpenClick = async () => {
    let err;
    try {
      await axios.post(`/api/songs/${song.id}/private`);
    } catch (error) {
      err = error;
    } finally {
      if (err === undefined) {
        setpublicState(!publicState);
      }
    }
  };

  if (publicState) {
    return (
      <ListItem>
        <Grid container>
          <Grid item>
          <ListItemText primary={song.name} />
          </Grid>
          <Grid item>
            <LockOpen onClick={handleLockOpenClick} />
          </Grid>
        </Grid>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <Grid container>
          <Grid item>
          <ListItemText primary={song.name} />
          </Grid>
          <Grid item>
            <Lock onClick={handleLockClick} />
          </Grid>
        </Grid>
      </ListItem>
    );
  }
};

export default Songs;