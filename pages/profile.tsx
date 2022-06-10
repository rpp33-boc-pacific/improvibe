import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import NavigationBar from '../components/NavigationBar';
import SongTile from '../components/shared/SongTile';
import Context from '../AppContext';

const tempContext = {
  user: {
    userId: '1',
    name: 'David Bowe',
    aboutMe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`,
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  },
  songs: [
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      in_projects: false,
      genre: 'rock',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      liked: true,
      public: true,
    },
    {
      song_id: 2,
      song_name: 'Song Name2',
      artist_name: 'Artist Name2',
      in_projects: true,
      genre: 'hip hop',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      liked: true,
      public: false,
    },
  ],
};

const Profile: NextPage = () => {

  const context: any = useContext(Context);

  return (
    <div>
      <NavigationBar />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Container>
            <Box sx={{ marginLeft: '40px', marginTop: '40px' }}>
              <Image
                alt='Profile picture of the artist'
                src={tempContext.user.photoUrl}
                height={300}
                width={300}
                style={{ borderRadius: '90%' }}
                data-testid='picture'
              />
            </Box>
          </Container>
        </Grid>
        <Grid container item xs={8} sx={{ marginTop: '40px' }}>
          <Grid item xs={9}>
            <Box>
              <Typography>{tempContext.user.name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Link href={'/profile-editor'}><Typography><a><u>Edit Profile</u></a></Typography></Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>About Me</Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginRight: '60px' }}>
            <Box>
              {tempContext.user.aboutMe}
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
            <Stack direction='row' spacing={1.5}>
              {tempContext.songs.map((song: any, index: number) => <Grid item key={index}><SongTile key={index} song={song} user={tempContext.user.userId} color='white' /></Grid>)}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;