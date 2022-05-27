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
import { getAllUserNames } from '../../database/profile-helpers';

const getStaticPaths = () => {
  const paths = await getAllUserNames();
  return {
    // paths,
    // TO DO - delete below
    paths: [
      { params: { name: 'jp' } }
    ],
    // TO DO - delete above
    fallback: 'blocking'
  };
};

const getStaticProps = ({ params }) => {
  const name = params.name;
  return { props: { name } };
};

const fetcher = (...args) => fetch(...args).then(res => res.json());

const ProfileEditor = ({ name }) => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');

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
                <TextField type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
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

export { getStaticPaths };
export { getStaticProps };
export default ProfileEditor;