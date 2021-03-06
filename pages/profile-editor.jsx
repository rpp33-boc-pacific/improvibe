import { useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Photo from '../components/profileEditor/Photo';
import NavigationBar from '../components/NavigationBar';
import Song from '../components/profileEditor/Song';
import AppContext from '../AppContext';
import { getSession } from 'next-auth/react';
import useSWR from 'swr';

const noPhotoUrl = 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif';

const ProfileEditor = (props) => {

  const router = useRouter();
  const { user, setUser } = useContext(AppContext);
  setUser(props.user);
  const userId = user.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [songs, setSongs] = useState([]);
  const [saveFailed, setSaveFailed] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleAboutMeChange = (event) => setAboutMe(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePhotoUrlChange = (url) => setPhotoUrl(url);
  const handleSave = async () => {
    let err = false;
    try {
      await axios.put('/api/user/update', {
        id: userId,
        name,
        email,
        password,
        aboutMe,
        photoUrl
      });
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

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then((res) => {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setAboutMe(res.data.user.about_me);
        setPhotoUrl(res.data.user.photo_url);
        setSongs(res.data.songs);
      })
      .catch((err) => {
        console.log('Error getting user info');
      })
  }, []);

  if (!saveFailed) {
    return (
      <div>
        <NavigationBar />
        <Box maxWidth='100vw' paddingLeft='0' paddingRight='4vw' paddingTop='4vw' paddingBottom='4vw'>
          <Grid container>
            <Grid item xs={3}>
              <Photo photoUrl={photoUrl || noPhotoUrl} handlePhotoUrlChange={handlePhotoUrlChange} />
            </Grid>
            <Grid container item xs={9} padding='0 4vw'>
              <Grid item xs={10} paddingBottom='2vw'>
                <Typography sx={{ fontSize: '2.5vh', fontWeight: 'bold' }}>Edit Profile</Typography>
              </Grid>
              <Grid container item xs={2} direction='row' justifyContent='flex-end' paddingBottom='2vw'>
                <Typography onClick={handleSave}><u>Save Changes</u></Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2}>
                  <TextField type='text' size={'small'} value={name} onChange={handleNameChange} />
                  <TextField type='email' size={'small'} value={email} onChange={handleEmailChange} />
                  <TextField type='password' size={'small'} placeholder='New password' value={password} onChange={handlePasswordChange} />
                  <TextField type='text' size={'small'} multiline value={aboutMe} onChange={handleAboutMeChange} />
                  <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>Songs ({songs.length})</Typography>
                  <Stack>
                    {songs.map((song, index) => <Song key={index} song={song} />)}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <NavigationBar />
        <Box maxWidth='100vw' paddingLeft='0' paddingRight='4vw' paddingTop='4vw' paddingBottom='4vw'>
          <Grid container>
            <Grid item xs={3}>
              <Photo photoUrl={photoUrl || noPhotoUrl} handlePhotoUrlChange={handlePhotoUrlChange} />
            </Grid>
            <Grid container item xs={9} padding='0 4vw'>
              <Grid item xs={10} paddingBottom='2vw'>
                <Typography sx={{ fontSize: '2.5vh', fontWeight: 'bold' }}>Edit Profile</Typography>
              </Grid>
              <Grid container item xs={2} direction='row' justifyContent='flex-end' paddingBottom='2vw'>
                <Typography onClick={handleSave}><u>Save Changes (Try Again)</u></Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2}>
                  <TextField type='text' size={'small'} value={name} onChange={handleNameChange} />
                  <TextField type='email' size={'small'} value={email} onChange={handleEmailChange} />
                  <TextField type='password' size={'small'} placeholder='New password' value={password} onChange={handlePasswordChange} />
                  <TextField type='text' size={'small'} multiline value={aboutMe} onChange={handleAboutMeChange} />
                  <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>Songs ({songs.length})</Typography>
                  <Stack>
                    {songs.map((song, index) => <Song key={index} song={song} />)}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
};

export async function getServerSideProps(AppContext) {
  const { req, res } = AppContext;
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, {
      Location: "/logIn",
    });
    res.end();
    return;
  }
  return { props: session };
};

export default ProfileEditor;