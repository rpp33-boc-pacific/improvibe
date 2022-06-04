import { useContext } from 'react';
// import Context from '../AppContext';
import Image from 'next/image';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import SongTile from '../../components/shared/SongTile';
import profile from '../../sample-data/profile';

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

const Profile: NextPage = (/*{ Component, pageProps }: AppProps*/) => {

  const router = useRouter();
  const userId = router.query.userId;

  // const { data, error } = useSWR(`/api/users/${userId}`, fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  return (
    <div>
      <SearchBar />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box>
            <Container>
              <Image
                alt='Profile picture of the arist'
                src={profile.photoUrl /* data.photoUrl */ }
                height={300}
                width={300}
                style={{ borderRadius: '90%' }}
              />
            </Container>
          </Box>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Box>
              <Typography>{profile.name /* data.artist */}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>About Me</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box>
              {profile.aboutMe /* data.aboutMe */}
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
              {/* {data.map((song, index) => <Grid item key={index}><SongTile key={index} user={user} song={song} /></Grid>)} */}
              <SongTile />
              <SongTile />
              <SongTile />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;