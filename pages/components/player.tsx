import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Player = () => {
  //hooks
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <PlayCircleIcon onClick={handleOpen}></PlayCircleIcon>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <audio controls></audio>
          </Box>
        </Modal>
      </div>
    );
}

export default Player;