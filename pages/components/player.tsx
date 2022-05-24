import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';

const Player = () => {
  //hooks
  const style = {
    position: 'absolute' as 'absolute',
    top: '97%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '100%',
    bgcolor: 'black',
    border: '1px solid #000',
    p: 4,
  };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div id="play-song-container">
        <IconButton
          aria-label="play-modal"
          onClick={handleOpen}>
          <PlayCircleIcon/>
        </IconButton>
        <Modal
          hideBackdrop
          aria-describedby="song-audio-player"
          open={open}
          onClose={handleClose}>
          <Box sx={style}>
            <audio role="audio-player" controls></audio>
            <IconButton
              aria-label="close-modal"
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