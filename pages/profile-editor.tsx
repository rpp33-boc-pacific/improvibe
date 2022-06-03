import { useState } from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Photo from '../components/profileEditor/Photo';
import Song from '../components/profileEditor/Song';
import SearchBar from '../components/SearchBar';
import editProfile from '../sample-data/profileeditor'; // REMOVE LATER
import { useContext } from 'react';  // const userInfo = useContext(Context);
// const userIdInState = userInfo.userId;
// const songs = useContext(Context);
// import Context from '../AppContext';

const ProfileEditor: NextPage = (/*{ Component, pageProps }: AppProps*/) => {

  // const context = useContext(Context);
  // const userIdInState = context.user.userId;
  // const nameInState = context.user.name;
  // const emailInState = context.user.email;
  // const aboutMeInState = context.user.aboutMe;
  // const photoUrl = context.user.photoUrl;
  // const songs = context.songs;

  const router = useRouter();
  const userId: string = router.query.userId as string;

  const [name, setName] = useState(editProfile.name /* nameInState */);
  const [email, setEmail] = useState(editProfile.email /* emailInState */);
  const [aboutMe, setAbout] = useState(editProfile.aboutMe /* aboutMeInState */);
  const [password, setPassword] = useState('');

  const handleNameChange = (event: any) => setName(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);
  const handleAboutMeChange = (event: any) => setAbout(event.target.value);
  const handleSave = async () => {
    let err = false;
    try {
      await axios.post(`/api/profiles/${userId}`, { name, email, password, aboutMe });
    } catch (error) {
      err = true;
    } finally {
      if (err) {
        // NOTIFY USER
      } else {
        router.push('/profile');
      }
    }
  };

  if (userId === editProfile.userId /* userIdInState */) {
    return (
      <div>
        <SearchBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Photo photoUrl={editProfile.photoUrl /* photoUrl */ } />
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
                <TextField type='text' value={editProfile.name /* name */} onChange={handleNameChange} />
                <TextField type='password' placeholder='New password' value={password} onChange={handlePasswordChange} />
                <TextField type='text' multiline value={editProfile.aboutMe /* aboutMe */ } onChange={handleAboutMeChange} />
                <Typography>Songs {editProfile.songs.length /* songs */ }</Typography>
                <Stack>
                  {editProfile.songs.map((song, index) => <Song key={index} song={song} />)}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <p>You cannot edit another profile</p>
      </div>
    );
  }
};

export default ProfileEditor;