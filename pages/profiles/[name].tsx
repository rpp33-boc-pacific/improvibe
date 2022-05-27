import React, { useState } from 'react';
import useSWR from 'swr';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import About from '../../components/profile/About';
import Photo from '../../components/profile/Photo';
import Player from '../../components/reusable/AudioPlayer';
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

const Profile = ({ name }) => {

  const { data, error } = useSWR(`/api/profile/${name}`, fetcher);
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
              <Typography>{name}</Typography>
            </Grid>
            <Grid item>
              <Typography>Edit Profile</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>About Me</Typography>
        </Grid>
        <Grid item>
          <About about_me={data.about_me}/>
        </Grid>
        <Grid item>
          <Typography>My Songs</Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <SongTiles songs={data.songs} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { getStaticPaths };
export { getStaticProps };
export default Profile;