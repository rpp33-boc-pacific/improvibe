import { useContext } from 'react';
// import Context from '../AppContext';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import NavigationBar from '../components/NavigationBar';
import SongTile from '../components/shared/SongTile';
import profile from '../sample-data/profile'; // REMOVE LATER

console.log('Host: ', process.env.POSTGRES_HOST);
console.log('Host: ', process.env.POSTGRES_USER);
console.log('Host: ', process.env.POSTGRES_PASSWORD);


const Profile: NextPage = (/* { Component, pageProps }: AppProps */) => {

  // const userInfo = useContext(Context);
  // const userIdInState = userInfo.user.userId;
  // const name = userInfo.user.name;
  // const aboutMe = userInfo.user.aboutMe;
  // const photoUrl = userInfo.user.photoUrl;
  // const songs = userInfo.songs;

  return (
    <div>
      <NavigationBar />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box>
            <Container>
              <Image
                alt='Profile picture of the arist'
                src={profile.photoUrl /* photoUrl */}
                height={300}
                width={300}
                style={{ borderRadius: '90%' }}
              />
            </Container>
          </Box>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={9}>
            <Box>
              <Typography>{profile.name /* name */}</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Link href={'/profile-editor'}><Typography><a>Edit Profile</a></Typography></Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>About Me</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box>
              {profile.aboutMe /* aboutMe */}
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Typography>My Songs</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Stack direction='row' spacing={1}>
              {/* {songs.map((song, index) => <Grid item key={index}><SongTile key={index} user={user} song={song} /></Grid>)} */}
              {/* <SongTile />
              <SongTile />
              <SongTile /> */}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;