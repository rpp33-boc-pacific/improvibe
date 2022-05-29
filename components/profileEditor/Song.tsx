import { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { LockOpen } from '@mui/icons-material';
import { Typography } from '@mui/material';

const Songs = (props: { song: any }) => {

  const [ publicState, setpublicState ] = useState(props.song.public);

  const handleLockClick = async () => {
    let err;
    try {
      await fetch(`/api/songs/${props.song.id}/public`, { method: 'PUT' });
    } catch (error) {
      err = true;
    } finally {
      if (err === undefined) {
        setpublicState(!publicState);
      }
    }
  };
  const handleLockOpenClick = async () => {
    let err;
    try {
      await fetch(`/api/songs/${props.song.id}/private`, { method: 'PUT' });
    } catch (error) {
      err = true;
    } finally {
      if (err === undefined) {
        setpublicState(!publicState);
      }
    }
  };

  if (publicState) {
    return (
      <div>
        <Grid container>
          <Grid item>
            <Box>
              <Typography>{props.song.name}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <LockOpen onClick={handleLockOpenClick} />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid container>
          <Grid item>
            <Box>
              {props.song.name}
            </Box>
          </Grid>
          <Grid item>
            <Lock onClick={handleLockClick} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Songs;