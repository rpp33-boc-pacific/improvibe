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


const AudioPlayer = ({ song, user, color, customStyle }) => {

  const style = {
    position: 'absolute',
    bottom: '0%',
    color: 'white',
    height: '275px',
    width: '100%',
    bgcolor: '#333',
    // bgcolor: '#F1F3F4',
    border: '1px solid #000',
    p: 4,
  };

  const imageStyle = {
    'border-style': 'solid',
    'width': '10vh',
    'height': '10vh',
    'border-radius': '10px',
    'border-width': '1px',
  }

  const photoUrl = song.photo_url || 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif';

  const ProfileImage = () => {
    return (
      <div className='image-card-audio' >
        <Image src={song.photo_url} style={imageStyle} alt="artist-profile-picture" objectFit={"cover"} layout={"responsive"} sizes="10vh" width="10h" height="10vh" />
      </div>
    )
  }
  const [liked, updateLiked] = useState(song.liked);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyle = {
    display: 'inline-block',
    padding:0,
    minHeight: 0,
    minWidth: 0,
  }

    return (
      <div id="play-song-container">
        <IconButton
          sx={customStyle}
          aria-label="open-player-modal"
          onClick={handleOpen}>
          <PlayCircleIcon fontSize="medium" />
        </IconButton>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}>
            <Box sx={style}>
              <Stack direction='column' spacing={2}>
                <Stack direction='row' justifyContent='space-between'>
                  <Stack direction='row' spacing={5}>
                    <Link href="./profile">
                    <div style={{ width:"8vh", height: '8vh'}}>
                      <ProfileImage></ProfileImage>
                    </div>
                    </Link>
                    <Stack direction='column'>
                      <Typography variant="h4"sx={{color: style.color}}>{song.song_name}</Typography>
                      <Link href="./profile" sx={{color: style.color}}>{song.artist_name}</Link>
                    </Stack>
                  </Stack>
                  <AddToProjects song={song} user={user} color={color}/>
                </Stack>
                <div style={{ paddingTop: "2em" }}>
                  <audio controls src={song.song_path} style={{width: "100%", textAlign:"center"}}></audio>
                </div>
              </Stack>

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