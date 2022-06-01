import { useContext } from 'react';
// import Context from '../AppContext';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchBar from '../../components/SearchBar';
import Photo from '../../components/profile/Photo';
import About from '../../components/profile/About';
import SongTiles from '../../components/profile/SongTiles';
import profile from '../../sample-data/profile'; // REMOVE LATER

const Profile: NextPage = (/*{ Component, pageProps }: AppProps*/) => {

  // const userInfo = useContext(Context);
  // const userIdInState = userInfo.userId;
  // const songs = useContext(Context);
  const router = useRouter();
  const userId: string = router.query.userId as string || '1';

  if (userId === '1' /* === userIdInState */ ) {
    return (
      <div>
        <SearchBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box>
              <Container>
                <Photo photoUrl={profile.photoUrl /* userInfo.photoUrl */ } userId={userId} />
              </Container>
            </Box>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={9}>
              <Box>
                <Typography>{profile.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Link href='/profileeditor'><Typography><a>Edit Profile</a></Typography></Link>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>About Me</Typography>
            </Grid>
            <Grid item xs={12}>
              <About aboutMe={profile.aboutMe /* userInfo.aboutMe */ } userId={userId} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography>My Songs</Typography>
            </Grid>
            <Grid container item xs={12}>
            <SongTiles songs={profile /* songs */} userId={userId} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <SearchBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box>
              <Container>
                <Photo photoUrl={profile.photoUrl /* userInfo.photoUrl */ } userId={userId} />
              </Container>
            </Box>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Box>
                <Typography>{profile.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>About Me</Typography>
            </Grid>
            <Grid item xs={12}>
              <About aboutMe={profile.aboutMe /* userInfo.aboutMe */ } userId={userId} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography>My Songs</Typography>
            </Grid>
            <Grid container item xs={12}>
              <SongTiles songs={profile /* songs */} userId={userId} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Profile;