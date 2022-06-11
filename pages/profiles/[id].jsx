import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import AppContext from '../../AppContext';
import { getSession } from 'next-auth/react';

const noPhotoUrl = 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Profile = (props) => {

  const router = useRouter();
  const id = router.query.id;
  const { user, setUser } = useContext(AppContext);
  setUser(props.user);
  const userId = user.id;

  const { data, error } = useSWR(`/api/user/public/${id}?client=${userId}`, fetcher);

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
          <Grid item xs={3}>
            <Container>
              <Box sx={{ marginLeft: '60px', marginTop: '40px' }}>
                <Image
                  alt='Profile picture of the artist'
                  src={data.user.photoUrl || noPhotoUrl}
                  height={270}
                  width={270}
                  style={{ borderRadius: '90%' }}
                  data-testid='picture'
                />
              </Box>
            </Container>
          </Grid>
          <Grid container item xs={9} sx={{ marginTop: '40px' }}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{ fontSize: '2.5vh', fontWeight: 'bold' }}>{data.user.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>About Me</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginRight: '60px' }}>
              <Box>
                {data.user.about_me}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>My Songs</Typography>
            </Grid>
            <Grid container item xs={12} sx={{ marginTop: '40px' }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.songs.map((song, index) => <Box sx={{ marginRight: '20px', marginTop: '20px' }}><SongTile key={index} song={song} user={data.user.id} color='white' /></Box>)}
              </Box>
            </Grid>
          </Grid>
        </Grid>
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

export default Profile;