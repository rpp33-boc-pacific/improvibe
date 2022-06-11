import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavigationBar from '../components/NavigationBar';
import SongTile from '../components/shared/SongTile';
import Context from '../AppContext';

const noPhotoUrl = 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif';

const Profile: NextPage = () => {

  const context: any = useContext(Context);
  const userId = context.id;
  const photoUrl = context.user.photoUrl || noPhotoUrl;
  const name = context.user.name;
  const aboutMe = context.user.about_me;
  const songs = context.songs;

  return (
    <div>
      <NavigationBar />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Container>
            <Box sx={{ marginLeft: '60px', marginTop: '40px' }}>
              <Image
                alt='Profile picture of the artist'
                src={photoUrl || noPhotoUrl}
                height={270}
                width={270}
                style={{ borderRadius: '90%' }}
                data-testid='picture'
              />
            </Box>
          </Container>
        </Grid>
        <Grid container item xs={9} sx={{ marginTop: '40px' }}>
          <Grid item xs={8}>
            <Box>
              <Typography sx={{ fontSize: '2.5vh', fontWeight: 'bold' }}>{name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Link href={'/profile-editor'}><Typography><a>Edit Profile</a></Typography></Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>About Me</Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginRight: '60px' }}>
            <Box>
              {aboutMe}
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
              {songs.map((song: any, index: number) => <Box sx={{ marginRight: '20px', marginTop: '20px' }}><SongTile key={index} song={song} user={userId} color='white' /></Box>)}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;