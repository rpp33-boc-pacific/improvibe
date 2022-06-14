import { useEffect, useState } from 'react';
import LikeButton from './LikeButton';
import AddToProjects from './AddToProjects';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import { borderRadius } from '@mui/system';
// import Player from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import dynamic from 'next/dynamic';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import Player from 'material-ui-audio-player';

// const Player = dynamic(() => import('material-ui-audio-player'))
// const Player = dynamic(() => import('react-h5-audio-player'))


const AudioPlayer = ({ song, user, color }) => {

  const style = {
    position: 'absolute',
    bottom: '0%',
    color: 'white',
    height: '350px',
    width: '100%',
    bgcolor: '#333',
    // bgcolor: '#F1F3F4',
    border: '1px solid #000',
    p: 4,
  };


  const ProfileImage = () => {
    return (
      <Image src={song.photo_url || 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'} alt="artist-profile-picture" objectFit={"cover"} layout={"fixed"}width="125px" height="125px"/>
      )
    }
  const [liked, updateLiked] = useState(song.liked);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div id="play-song-container">
        <IconButton
          aria-label="open-player-modal"
          onClick={handleOpen}>
          <PlayCircleIcon fontSize="large"/>
        </IconButton>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}>
          <Box sx={style}>
            <Grid container sx={{height: "20px"}}>
              <Grid item xs={10.5}></Grid>
              <Grid item xs={1}>
              <LikeButton color={color} song={song} user={user} liked={liked} updateLiked={updateLiked} />
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2} sx={{paddingBottom: '.5em', paddingTop: '1em'}}>
              <Grid item xs={1.5}>
              <Link href="./profile">
                <div style={{borderRadius:"8px", overflow: "hidden", width:"125px"}}>
                  <ProfileImage></ProfileImage>
                </div>
              </Link>
              </Grid>
              <Grid item xs={10} sx={{paddingBotton: ".5em"}}>
                <Typography variant="h4"sx={{color: style.color}}>{song.song_name}</Typography>
                <Link href="./profile" sx={{color: style.color}}>{song.artist_name}</Link>
                <div style={{paddingTop: "2em", paddingLeft: "1.5em"}}>
                <audio controls src={song.song_path} style={{width: "100%", textAlign:"center"}}></audio>
              </div>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{paddingTop: '.5em'}}>
              <Grid item xs={8}>
                <Typography sx={{color: style.color, textAlign:"center"}}>
                      #{song.genre},  fresh,  popular
                  </Typography>
              </Grid>
              <Grid item xs={3}>
                <AddToProjects song={song} user={user} color={color}/>
              </Grid>
            </Grid>
            <IconButton
              aria-label="close-player-modal"
              sx={{color: style.color, position: 'absolute', top: '2%', right: '1%'}}
              onClick={handleClose}>
                <CloseIcon></CloseIcon>
            </IconButton>
          </Box>
        </Modal>
      </div>
    );
}

export default AudioPlayer;