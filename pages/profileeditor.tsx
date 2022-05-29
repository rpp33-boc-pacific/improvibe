import { useState } from 'react';
// import { Alert } from '@mui/material';
import { Box } from '@mui/material';
// import { CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Photo from '../components/profileEditor/Photo';
import Songs from '../components/profileEditor/Songs';
import SearchBar from '../components/SearchBar';
// import { useEditProfile } from '../lib/profile-helpers';
import editProfile from '../sample-data/profileeditor';

const ProfileEditor: NextPage = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ aboutMe, setAbout ] = useState('');

  const router = useRouter();

  const handleNameChange = (event: any) => setName(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);
  const handleAboutMeChange = (event: any) => setAbout(event.target.value);
  const handleSave = async () => {
    let err;
    try {
      await axios.post(`/api/profileeditor/${editProfile.userId}`, { name, email, password, aboutMe });
    } catch (error) {
      err = true;
    } finally {
      if (err) {
        // NOTIFY USER
      } else {
        //
      }
      router.push('/profile');
    }
  };

  // const { editProfile, isLoading, isError } = useEditProfile(userId);
  // const { profile, isLoading, isError } = useProfile(userId);
  // if (isLoading) return <CircularProgress />;
  // if (isError) return <Alert />;

  return (
    <div>
      <SearchBar />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Photo photoUrl={editProfile.photoUrl} userId={editProfile.userId}></Photo>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={9}>
            <Typography>Edit Profile</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography onClick={handleSave}>Save Changes</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack>
              <TextField type='text' value={editProfile.name} onChange={handleNameChange} />
              <TextField type='password' placeholder='New password' value={password} onChange={handlePasswordChange} />
              <TextField type='text' multiline value={editProfile.aboutMe} onChange={handleAboutMeChange} />
              <Typography>Songs {editProfile.songs.length}</Typography>
              <Songs songs={editProfile.songs} userId={editProfile.userId} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileEditor;