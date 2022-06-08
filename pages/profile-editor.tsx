import { useContext, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Photo from '../components/profileEditor/Photo';
import NavigationBar from '../components/NavigationBar';
import Song from '../components/profileEditor/Song';
import Context from '../AppContext';

const tempContext = {
  user: {
    userId: '1',
    name: 'David Bowe',
    email: 'dbowe@gmail.com',
    aboutMe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut` +
      `labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut` +
      `aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum` +
      `dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia` +
      `deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut` +
      `labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut` +
      `aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum` +
      `dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia` +
      `deserunt mollit anim id est laborum.`,
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  },
  songs: [
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      in_projects: false,
      genre: 'rock',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      liked: true,
      public: true,
    },
    {
      song_id: 2,
      song_name: 'Song Name2',
      artist_name: 'Artist Name2',
      in_projects: true,
      genre: 'hip hop',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      liked: true,
      public: false,
    },
  ],
};

const ProfileEditor: NextPage = () => {

  const router = useRouter();
  const { id } = router.query;

  const context: any = useContext(Context);

  const [ name, setName ] = useState(tempContext.user.name);
  const [ email, setEmail ] = useState(tempContext.user.email);
  const [ aboutMe, setAbout ] = useState(tempContext.user.aboutMe);
  const [ password, setPassword ] = useState('');
  const [ photoUrl, setPhotoUrl ] = useState(tempContext.user.photoUrl);
  const [ saveFailed, setSaveFailed ] = useState(false);

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handleAboutMeChange = (event: any) => setAbout(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);
  const handlePhotoUrlChange = (url: string) => setPhotoUrl(url);
  const handleSave = async () => {
    let err = false;
    try {
      await axios.post('/api/user/update', {
        user_id: id,
        name,
        email,
        password,
        about_me: aboutMe,
        photo_url: photoUrl }
      );
    } catch (error) {
      err = true;
    } finally {
      if (err) {
        setSaveFailed(true);
      } else {
        router.push('/profile');
      }
    }
  };

  if (!saveFailed) {
    return (
      <div>
        <NavigationBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Photo photoUrl={photoUrl} handlePhotoUrlChange={handlePhotoUrlChange} />
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={9}>
            </Grid>
            <Grid item xs={3}>
              <Typography onClick={handleSave}>Save Changes</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <TextField type='text' value={name} onChange={handleNameChange} />
                <TextField type='email' value={email} onChange={handleEmailChange} />
                <TextField type='password' placeholder='New password' value={password} onChange={handlePasswordChange} />
                <TextField type='text' multiline value={aboutMe} onChange={handleAboutMeChange} />
                <Typography>Songs {tempContext.songs.length}</Typography>
                <Stack>
                  {tempContext.songs.map((song: any, index: number) => <Song key={index} song={song} />)}
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
        <NavigationBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
          <Photo photoUrl={photoUrl} handlePhotoUrlChange={handlePhotoUrlChange} />
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={9}>
              <Typography>Save failed, try again</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography onClick={handleSave}>Save Changes</Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack>
                <TextField type='text' value={name} onChange={handleNameChange} />
                <TextField type='email' value={email} onChange={handleEmailChange} />
                <TextField type='password' placeholder='New password' value={password} onChange={handlePasswordChange} />
                <TextField type='text' multiline value={aboutMe} onChange={handleAboutMeChange} />
                <Typography>Songs {tempContext.songs.length}</Typography>
                <Stack>
                  {tempContext.songs.map((song: any, index: number) => <Song key={index} song={song} />)}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default ProfileEditor;