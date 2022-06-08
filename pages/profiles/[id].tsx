import Image from 'next/image';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import NavigationBar from '../../components/NavigationBar';
import SongTile from '../../components/shared/SongTile';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Profile: NextPage = () => {

  const router = useRouter();
  let { id } = router.query;

  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  if (error) {
    return (
      <div>
        <p>An error has occurred</p>
      </div>
    );
  } else if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        <NavigationBar />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box>
              <Container>
                <Image
                  alt='Profile picture of the arist'
                  src={data.photoUrl}
                  height={300}
                  width={300}
                  style={{ borderRadius: '90%' }}
                  data-testid='picture'
                />
              </Container>
            </Box>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Box>
                <Typography>{data.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>About Me</Typography>
            </Grid>
            <Grid item xs={12}>
              <Box>
                {data.aboutMe}
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
                {data.songs.map((song: any, index: number) => <Grid item key={index}><SongTile key={index} song={song} user={data.userId} color='white' /></Grid>)}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Profile;