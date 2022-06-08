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
import pool from '../sql/db';

const getServerSideProps = /*async*/ (context: any) => {
  return {
    props: { // = RESULTS OF DB QUERY
      userId: 1,
      name: 'David Bowe',
      aboutMe: 'All about David Bowe...',
      photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      // songs: [
      //   {
      //     song_id: 1,
      //     song_name: 'Song Name1',
      //     artist_name: 'Artist Name1',
      //     in_projects: false,
      //     genre: 'rock',
      //     photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      //     song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      //     liked: true,
      //   },
      //   {
      //     song_id: 2,
      //     song_name: 'Song Name2',
      //     artist_name: 'Artist Name2',
      //     in_projects: true,
      //     genre: 'hip hop',
      //     photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      //     song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      //     liked: true
      //   },
      // ]
    }
  }
};

const ProfileEditor: NextPage = (props: any) => {

  const context: any = useContext(Context);
  const userId = context.user;
  const songs = context.songs;

  const router = useRouter();

  const [name, setName] = useState(props.name);
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
      await axios.post(`/api/profiles/update?userId=${userId}`, { name, email, password, aboutMe });
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