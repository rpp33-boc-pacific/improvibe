import React, { useState } from 'react';
import useSWR from 'swr';
import { Grid } from '@mui/material';
// import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import { TextField } from '@mui/material';
import Photo from '../../components/profileEditor/Photo';
import Songs from '../../components/profileEditor/Songs';
// import SearchBar from '../../components/SearchBar';
import { getUserData } from '../../database/profileEditorHelpers';
import axios from 'axios';

const getServerSideProps = async (context) => {
  const userName = context.params.name;
  const userProfile = await getUserData(userName);
  const userId = userProfile.userId;
  const userEmail = userProfile.email;
  const userAbout = userProfile.about;
  const userPhotoUrl = userProfile.photoUrl;
  return { props: { userName, userEmail, userAbout, userPhotoUrl } };
};

const fetcher = (...args) => fetch(...args).then(res => res.json());

const ProfileEditor = ({ userName, userId, userEmail, userAbout, userPhotoUrl }) => {

  const [ name, setUserName ] = useState(userName);
  const [ email, setEmail ] = useState(userEmail);
  const [ password, setPassword ] = useState('');
  const [ about, setAbout ] = useState(userAbout);

  const handleNameChange = (event) => setUserName(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleAboutChange = (event) => setAbout(event.target.value);
  const handleSave = async () => {
    let err;
    try {
      await axios.post('/api/profileEditors', { userId, name, email, password, about });
    } catch (error) {
      err = true;
    } finally {
      if (err) {
        // TO DO - notify user
      } else {
        // route to profile page
      }
    }
  };

  const { data, error } = useSWR(`/api/profileEditors/${name}`, fetcher);

  if (error) {
    return <Alert severity='error'>Error fetching data</Alert>;
  }
  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Grid>
      <SearchBar />
      <Grid container>
        <Grid item>
          <Photo userPhotoUrl={userPhotoUrl}></Photo>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography>Edit Profile</Typography>
            </Grid>
            <Grid item>
              <Typography onClick={handleSave}>Save Changes</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <TextField type='text' value={userName} onChange={handleNameChange} />
            <Grid>
              <Grid item>
                <TextField type='password' placeholder='New password' value={password} onChange={handlePasswordChange} />
              </Grid>
              <Grid item>
                <TextField type='text' value={about} onChange={handleAboutChange} />
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Songs {data.songs.length}</Typography>
              <Songs songs={data.songs} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { getServerSideProps };
export default ProfileEditor;