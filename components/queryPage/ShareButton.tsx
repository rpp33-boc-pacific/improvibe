import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../styles/ShareButton.module.css';
import LinkIcon from '@mui/icons-material/Link';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function ShareButton(songURL: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button size="small" onClick={handleOpen}>Share</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{margin: 0, padding: 0}}>
            Text in a modal
          </Typography>
          <div className="field d-flex align-items-center justify-content-center">
            <LinkIcon/>
            <input type="text" value={songURL}/>
            <Button>Copy</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}