import { useContext, useState } from 'react';
import Context from '../AppContext';
// import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Photo from '../components/profileEditor/Photo';
import Song from '../components/profileEditor/Song';
import NavigationBar from '../components/NavigationBar';

const userInfo = {
  id: 9,
  artist: 'David Bowe',
  email: 'email',
  aboutMe: 'About David Bowe',
  photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  songs: [
    {
      id: 1,
      name: 'Space Odity',
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
      totalLikes: 14,
      liked: true,
      genre: 'Rock',
      artistPic: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      artist: 'David Bowe'
    },
    {
      id: 2,
      name: 'Golden Years',
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
      totalLikes: 21,
      liked: false,
      genre: 'Smooth Rock',
      artistPic: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      artist: 'David Bowe'
    }
  ]
}

const getServerSideProps = /*async*/ (context: any) => {
  return {
    props: userInfo,
  }
};

const ProfileEditor: NextPage = (props: any) => {

  const context: any = useContext(Context);
  const userId = context.user;
  const songs = context.songs;

  const router = useRouter();

  const [name, setName] = useState(props.artist);
  const [email, setEmail] = useState(props.email);
  const [aboutMe, setAbout] = useState(props.aboutMe);
  const [password, setPassword] = useState('');

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);
  const handleAboutMeChange = (event: any) => setAbout(event.target.value);
  const handleSave = async () => {
    let err = false;
    try {
      await axios.post(`/api/user/update?userId=${userId}`, { name, email, password, aboutMe });
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

  return (
    <div>
      <NavigationBar />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Photo photoUrl={props.photoUrl} />
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
              <TextField type='text' value={name} onChange={handleNameChange} />
              <TextField type='email' value={email} onChange={handleEmailChange} />
              <TextField type='password' placeholder='New password' value={password} onChange={handlePasswordChange} />
              <TextField type='text' multiline value={aboutMe} onChange={handleAboutMeChange} />
              <Typography>Songs {props.songs.length}</Typography>
              <Stack>
                {props.songs.map((song: any, index: number) => <Song key={index} song={song} />)}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { getServerSideProps };
export default ProfileEditor;