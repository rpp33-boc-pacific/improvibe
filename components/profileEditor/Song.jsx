import { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Lock } from '@mui/icons-material';
import { LockOpen } from '@mui/icons-material';
import { Typography } from '@mui/material';
import axios from 'axios';

const Songs = ({ song }) => {

  const [publicState, setpublicState] = useState(props.song.public);

  const handleLockClick = () => {
    let err = false;
    axios.put(`/api/songs/${props.song.id}/public`)
      .catch((error) => {
        err = true;
      })
      .then((res) => {
        if (!err && res.status.toString()[0] === '2') {
          setpublicState(!publicState);
        }
      });
  };
  const handleLockOpenClick = () => {
    let err = false;
    axios.put(`/api/songs/${props.song.id}/private`)
      .catch((error) => {
        err = true;
      })
      .then((res) => {
        if (!err && res.status.toString()[0] === '2') {
          setpublicState(!publicState);
        }
      });
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
              <Typography>{props.song.name}</Typography>
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