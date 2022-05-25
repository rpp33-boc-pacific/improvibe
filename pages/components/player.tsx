import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';

const Player = () => {
  const style = {
    position: 'absolute',
    bottom: '0%',
    height: '300px',
    width: '100%',
    bgcolor: '#333',
    border: '1px solid #000',
    p: 4,
  };

  const ProfileImage = () => {
    return (
      <Image src={"https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"} alt="artist-profile-picture" layout={"fixed"} width="75px" height="75px"/>
    )
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div id="play-song-container">
        <IconButton
          aria-label="open-player-modal"
          onClick={handleOpen}>
          <PlayCircleIcon/>
        </IconButton>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}>
          <Box sx={style}>
            <Grid container direction="row" spacing={2} sx={{paddingBottom: '.5em'}}>
              <Grid item xs={1.2}>
              <Link href="#">
                <ProfileImage></ProfileImage>
              </Link>
              </Grid>
              <Grid item xs={2} sx={{paddingBotton: ".5em"}}>
                <Typography
                  variant="h4"
                  sx={{color: "white"}}>
                    Song
                </Typography>
                <Link sx={{color: "white"}}>Artist Name</Link>
              </Grid>
              <Grid
                item xs={3}>
                <Typography sx={{color: "white", textAlign: "center"}}>
                    Genre #tag
                </Typography>
              </Grid>
            </Grid>
            <audio role="audio-player" controls></audio>
            <IconButton
              aria-label="close-player-modal"
              sx={{color: 'white', position: 'absolute', top: '2%', right: '1%'}}
              onClick={handleClose}>
                <CloseIcon></CloseIcon>
            </IconButton>
          </Box>
        </Modal>
      </div>
    );
}

export default Player;