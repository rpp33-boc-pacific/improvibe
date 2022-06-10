import { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { LockOpen } from '@mui/icons-material';
import { Typography } from '@mui/material';
import axios from 'axios';

const Songs = ({ song }) => {

  const [ publicState, setpublicState ] = useState(song.public);
  const [ updateError, setUpdateError ] = useState(false);

  const handleLockClick = () => {
    let err = false;
    axios.put(`/api/song/public?id=${song.song_id}&publicize=true`)
      .catch((error) => {
        err = true;
      })
      .then((res) => {
        if (err || res.status === 500) {
          setUpdateError(true);
        } else if (!err && res.status === 201) {
          setUpdateError(false);
          setpublicState(true);
        }
      });
  };
  const handleLockOpenClick = () => {
    let err = false;
    axios.put(`/api/song/public?id=${song.song_id}&publicize=false`)
      .catch((error) => {
        err = true;
      })
      .then((res) => {
        if (err || res.status === 500) {
          setUpdateError(true);
        }
        if (!err && res.status === 201) {
          setUpdateError(false);
          setpublicState(false);
        }
      });
  };

  if (publicState) {
    if (updateError) {
      return (
        <div>
          <Grid container>
            <Grid item>
              <Box>
                <Typography>{song.song_name}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <LockOpen onClick={handleLockOpenClick} />Try again
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
                <Typography>{song.song_name}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <LockOpen onClick={handleLockOpenClick} />
            </Grid>
          </Grid>
        </div>
      );
    }
  } else {
    if (updateError) {
      return (
        <div>
          <Grid container>
            <Grid item>
              <Box>
                <Typography>{song.song_name}</Typography>Try again
              </Box>
            </Grid>
            <Grid item>
              <Lock onClick={handleLockClick} />
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
                <Typography>{song.song_name}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Lock onClick={handleLockClick} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
};

export default Songs;