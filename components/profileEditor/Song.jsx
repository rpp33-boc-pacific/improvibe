import { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { LockOpen } from '@mui/icons-material';
import { Typography } from '@mui/material';
import axios from 'axios';

const Songs = ({ song }) => {

  const [publicState, setpublicState] = useState(song.public);
  const [updateError, setUpdateError] = useState(false);

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
            <Grid item xs={10}>
                <Typography>{song.song_name}</Typography>
            </Grid>
            <Grid item container xs={2} justifyContent='flex-end'>
              <Grid paddingRight='1vw'>
                <Typography>try again public</Typography>
              </Grid>
              <Grid>
                <LockOpen onClick={handleLockOpenClick} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <Grid container sx={{ marginTop: '10px', backgroundColor: 'lightgray', padding: '10px 20px', borderRadius: '5px' }}>
            <Grid item xs={10}>
              <Typography>{song.song_name}</Typography>
            </Grid>
            <Grid item container xs={2} justifyContent='flex-end'>
              <Grid paddingRight='1vw'>
                <Typography>public</Typography>
              </Grid>
              <Grid>
                <LockOpen onClick={handleLockOpenClick} />
              </Grid>
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
            <Grid item xs={10}>
              <Typography>{song.song_name}</Typography>
            </Grid>
            <Grid item container xs={2} justifyContent='flex-end'>
              <Grid paddingRight='1vw'>
                <Typography>try again private</Typography>
              </Grid>
              <Grid>
                <Lock onClick={handleLockClick} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <Grid container sx={{ marginTop: '10px', backgroundColor: 'lightgray', padding: '10px 20px', borderRadius: '5px' }}>
            <Grid item xs={10}>
              <Typography>{song.song_name}</Typography>
            </Grid>
            <Grid item container xs={2} justifyContent='flex-end'>
              <Grid paddingRight='1vw'>
                <Typography>private</Typography>
              </Grid>
              <Grid>
                <Lock onClick={handleLockClick} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
};

export default Songs;