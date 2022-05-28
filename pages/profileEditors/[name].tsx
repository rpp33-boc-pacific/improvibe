import React, { useState } from 'react';
import useSWR from 'swr';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import { TextField } from '@mui/material';
import Photo from '../../components/profileEditor/Photo';
import Songs from '../../components/profile/Songs';
// import SearchBar from '../../components/SearchBar';
import { getUserData } from '../../database/profileEditorHelpers';

const getServerSideProps = async (context) => {
  const userName = context.params.name;
  const userProfile = await getUserData(userName);
  const userEmail = userProfile.email;
  const userAbout = userProfile.about;
  return { props: { userName, userEmail, userAbout } };
};

const fetcher = (...args) => fetch(...args).then(res => res.json());

const ProfileEditor = ({ userName, userEmail, userAbout }) => {

  const [name, setUserName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState(userAbout);

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
          <Photo url={data.url}></Photo>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography>Edit Profile</Typography>
            </Grid>
            <Grid item>
              <Typography>Save Changes</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <TextField type='text' value={userName} onChange={(event) => setUserName(event.target.value)} />
            <Grid>
              <Grid item>
                <TextField type='password' placeholder='New password' value={password} onChange={(event) => setPassword(event.target.value)} />
              </Grid>
              <Grid item>
                <TextField type='text' value={about} onChange={(event) => setAbout(event.target.value)} />
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