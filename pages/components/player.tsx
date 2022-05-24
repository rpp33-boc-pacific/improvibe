import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
    width: '100%',
    bgcolor: 'white',
    border: '1px solid #000',
    p: 4,
  };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <PlayCircleIcon onClick={handleOpen}></PlayCircleIcon>
        <Modal
          hideBackdrop
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={open}
          onClose={handleClose}>
          <Box sx={style}>
            <audio controls></audio>
            <CloseIcon
              sx={{position: 'absolute', top: '2%', right: '1%'}}
              onClick={handleClose}>
            </CloseIcon>
          </Box>
        </Modal>
      </div>
    );
}

export default Player;