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

const Profile: NextPage = () => {
  const router = useRouter();
  const userId: string = router.query.userId as string;
  const owner: string = router.query.owner as string;

  if (owner === 'false') {
    return (
      <div>
        <SearchBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box>
              <Container>
                <Photo photoUrl={profile.photoUrl} userId={userId} />
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
              <About aboutMe={profile.aboutMe} userId={userId} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography>My Songs</Typography>
            </Grid>
            <Grid container item xs={12}>
              <SongTiles songs={profile} userId={userId} />
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
                <Photo photoUrl={profile.photoUrl} userId={'1'} />
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
              <About aboutMe={profile.aboutMe} userId={'1'} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography>My Songs</Typography>
            </Grid>
            <Grid container item xs={12}>
              <SongTiles songs={profile} userId={'1'} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Profile;