import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { LockOpen } from '@mui/icons-material';

const Songs = ({ song }) => {
  const [ publicState, setpublicState ] = useState(song.public);

  const handleLockClick = async () => {
    let err;
    try {
      await fetch(`/api/songs/${song.id}/public`, { method: 'PUT' });
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
      await fetch(`/api/songs/${song.id}/private`, { method: 'PUT' });
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