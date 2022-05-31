import Image from 'next/image';
import { Alert } from '@mui/material';
import { CircularProgress } from '@mui/material';
// import { useProfile } from '../../lib/profile-helpers';

const Photo = (props: { photoUrl: string, userId: string }) => {
  // const { profile, isLoading, isError } = useProfile(userId);
  // if (isLoading) return <CircularProgress />;
  // if (isError) return <Alert />;
  return (
      <Image
        alt='Picture of the artist'
        src={props.photoUrl}
        height={300}
        width={300}
        style={{ borderRadius: '90%' }}
      />
  );
};

export default Photo;