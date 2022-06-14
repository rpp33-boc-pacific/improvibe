import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavigationBar from '../components/NavigationBar';
import SongTile from '../components/shared/SongTile';
import AppContext from '../AppContext';
import { getSession } from 'next-auth/react';
import axios from 'axios';

const noPhotoUrl = 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif';

const Profile = (props) => {

  const { user, setUser } = useContext(AppContext);
  setUser(props.user);
  const userId = user.id;

  const [name, setName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then((res) => {
        setName(res.data.user.name);
        setAboutMe(res.data.user.about_me);
        setPhotoUrl(res.data.user.photo_url);
        setSongs(res.data.songs);
      })
      .catch((err) => {
        console.log('Error getting user info');
      })
  }, []);

  return (
    <div>
      <NavigationBar />
      <Box maxWidth='100vw' paddingLeft='0' paddingRight='4vw' paddingTop='4vw' paddingBottom='4vw'>
        <Grid container>
          <Grid item xs={3}>
            <Grid container direction='row'>
              <Grid item container justifyContent='center'>
                <Image
                  alt='Profile picture of the artist'
<<<<<<< Updated upstream
                  src={data.user.photoUrl || noPhotoUrl}
=======
                  src={photoUrl || noPhotoUrl}
>>>>>>> Stashed changes
                  height={270}
                  width={270}
                  style={{ borderRadius: '90%' }}
                  data-testid='picture'
                />
              </Grid>
              <Link href='/profiles/3'>/3</Link>
            </Grid>
          </Grid>
          <Grid container item xs={9} padding='0 4vw'>
            <Grid item xs={10} paddingBottom='2vw'>
              <Typography sx={{ fontSize: '2.5vh', fontWeight: 'bold' }}>{name}</Typography>
            </Grid>
            <Grid container item xs={2} direction='row' justifyContent='flex-end' paddingBottom='2vw'>
              <Grid item>
                <Link href={'/profile-editor'}><Typography><a><u>Edit Profile</u></a></Typography></Link>
              </Grid>
            </Grid>
            <Grid item xs={12} paddingBottom='2vw'>
              <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>About Me</Typography>
            </Grid>
<<<<<<< Updated upstream
            <Grid item xs={12} sx={{ marginRight: '60px' }}>
              <Box>
                {data.user.about_me}
              </Box>
=======
            <Grid item xs={12} paddingBottom='2vw'>
              {aboutMe}
>>>>>>> Stashed changes
            </Grid>
            <Grid item xs={12} paddingBottom='2vw'>
              <Typography sx={{ fontSize: '2vh', fontWeight: 'bold' }}>My Songs {songs.length}</Typography>
            </Grid>
            <Grid container item xs={12} spacing={1} direction='row' justifyContent='flex-start'>
              {songs.map((song, index) => <Grid item><SongTile key={index} song={song} user={userId} color='white' /></Grid>)}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
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