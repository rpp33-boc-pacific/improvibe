import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../../styles/ShareButton.module.css';
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

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

export default function ShareButton({songURL, shares}: any) {
  const [open, setOpen] = React.useState(false);
  const [totalShares, setTotalShares] = React.useState(shares);
  const [openNotification, setOpenNotification] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTotalShares(totalShares + 1);
  };
  const handleClose = () => setOpen(false);
  console.log(songURL)

  return (
    <div>
      <IconButton aria-label="unlike-song" onClick={handleOpen}>
        <Stack direction='row' spacing={1} alignItems='center' width='5vh'>
          <Typography sx={{ color: '#000' }} variant="subtitle2">{totalShares}</Typography>
          <ShareIcon sx={{ color: '#000' }}></ShareIcon>
        </Stack>
      </IconButton>
      <Snackbar
        open={openNotification}
        onClose={() => setOpenNotification(false)}
        autoHideDuration={3000}
        message="Copied to clipboard"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{margin: 0, padding: 0}}>
            Shareable Link
          </Typography>
          <div className="field d-flex align-items-center justify-content-center">
            <TextField
            type="text"
            variant="outlined"
            value={songURL}
            inputProps={
					  { readOnly: true }
				    }
            size="small"
            />
            <Button
            onClick={() => {
              setOpenNotification(true);
              navigator.clipboard.writeText(songURL);
            }}
            >Copy</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
