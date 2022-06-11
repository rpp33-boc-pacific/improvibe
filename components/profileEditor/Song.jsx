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
        if (err) {
          setUpdateError(true);
        } else {
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
        if (err) {
          setUpdateError(true);
        } else {
          setUpdateError(false);
          setpublicState(false);
        }
      });
  };

  if (publicState) {
    if (updateError) {
      return (
        <div>
          <Grid container sx={{ marginTop: '10px', backgroundColor: 'lightgray', padding: '10px 20px', borderRadius: '5px' }}>
            <Grid item xs={11}>
              <Box>
                <Typography>{song.song_name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              Try again public <LockOpen onClick={handleLockOpenClick} />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <Grid container sx={{ marginTop: '10px', backgroundColor: 'lightgray', padding: '10px 20px', borderRadius: '5px' }}>
            <Grid item xs={11}>
              <Box>
                <Typography>{song.song_name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              public <LockOpen onClick={handleLockOpenClick} />
            </Grid>
          </Grid>
        </div>
      );
    }
  } else {
    if (updateError) {
      return (
        <div>
          <Grid container sx={{ marginTop: '10px', backgroundColor: 'lightgray', padding: '10px 20px', borderRadius: '5px' }}>
            <Grid item xs={11}>
                <Typography>{song.song_name}</Typography>
            </Grid>
            <Grid item xs={1}>
              Try again private<Lock onClick={handleLockClick} />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <Grid container sx={{ marginTop: '10px', backgroundColor: 'lightgray', padding: '10px 20px', borderRadius: '5px' }}>
            <Grid item xs={11}>
                <Typography>{song.song_name}</Typography>
            </Grid>
            <Grid item xs={1}>
              private<Lock onClick={handleLockClick} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
};

export default Songs;