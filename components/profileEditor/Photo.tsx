import { useState } from 'react';
import Image from "next/image";
// import { Alert } from '@mui/material';
import { Box } from '@mui/material';
// import { CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
// import { useEditProfile } from '../../lib/profile-helpers';

const Photo = (props: { photoUrl: string, userId: string }) => {


  const [url, setphotoUrl] = useState(props.photoUrl);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const { editProfile, isLoading, isError } = useEditProfile(userId);
  // const { profile, isLoading, isError } = useProfile(userId);
  // if (isLoading) return <CircularProgress />;
  // if (isError) return <Alert />;
  return (
    <div>
      <Image
        alt='Profile picture'
        src={url}
        height={300}
        width={300}
        style={{ borderRadius: '90%' }}
      />
      <Typography onClick={handleOpen}>Upload image</Typography>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box>
          <CloseIcon onClick={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
};

export default Photo;