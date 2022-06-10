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
    id: 1,
    name: 'David Bowe',
    about_me: 'All about David Bowe...',
    email: 'email@email.com',
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  },
  songs: [ // public and private
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      genre: 'rock',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      searched: 9,
      likes: 20,
      shares: 10,
      public: true,
      total_time: 2,
      date_created: 'timestamp here',
      liked: true,
    },
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      genre: 'rock',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      searched: 9,
      likes: 20,
      shares: 10,
      public: true,
      total_time: 2,
      date_created: 'timestamp here',
      liked: true,
    },
  ]
};

const ProfileEditor: NextPage = () => {

  const router = useRouter();
  const { id } = router.query;

  const context: any = useContext(Context);

  const [ name, setName ] = useState(tempContext.user.name);
  const [ email, setEmail ] = useState(tempContext.user.email);
  const [ aboutMe, setAbout ] = useState(tempContext.user.about_me);
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
      await axios.put('/api/user/update', {
        id: id,
        name,
        email,
        password,
        aboutMe: aboutMe,
        photoUrl: photoUrl }
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
            <Box sx={{ marginLeft: '40px', marginTop: '40px' }}>
              <Photo photoUrl={photoUrl} handlePhotoUrlChange={handlePhotoUrlChange} />
            </Box>
          </Grid>
          <Grid container item xs={8} sx={{ paddingRight: '60px', marginTop: '40px' }}>
            <Grid item xs={9}>
            </Grid>
            <Grid item xs={3}>
              <Typography onClick={handleSave}><u>Save Changes</u></Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <TextField type='text' size={'small'} value={name} onChange={handleNameChange} />
                <TextField type='email' size={'small'} value={email} onChange={handleEmailChange} />
                <TextField type='password' size={'small'} placeholder='New password' value={password} onChange={handlePasswordChange} />
                <TextField type='text' size={'small'} multiline value={aboutMe} onChange={handleAboutMeChange} />
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