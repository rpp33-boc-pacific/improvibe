import React, { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import Player from '../../components/reusable/AudioPlayer';
import Photo from '../../components/profile/Photo';
import About from '../../components/profile/About';
import SongTiles from '../../components/profile/SongTiles';
// import SearchBar from '../../components/SearchBar';

const getServerSideProps = (context) => {
  const name = context.params.name;
  const owner = context.query.owner;
  return { props: { name, owner } };
};

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Profile = ({ name, owner }) => {

  const { data, error } = useSWR(`/api/profiles/${name}`, fetcher);
  if (error) {
    console.log(error);
    return <Alert severity='error'>Error fetching data</Alert>;
  }
  if (!data) {
    return <CircularProgress />;
  }

  if (owner === 'true') {
    return (
      <Grid>
        {/* <SearchBar /> */}
        <Grid container>
          <Grid item>
            <Photo photoUrl={data.user.photoUrl}></Photo>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography>{name}</Typography>
              </Grid>
              <Grid item>
                <Link href={`/profileEditors/${name}`}><Typography><a>Edit Profile</a></Typography></Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>About Me</Typography>
          </Grid>
          <Grid item>
            <About about={data.user.about}/>
          </Grid>
          <Grid item>
            <Typography>My Songs</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <SongTiles songs={data.songs} user={data.user} />
            </Grid>
          </Grid>
        </Grid>
        <Player color={'white'} song={'songProp'} user={'userProp'} />
      </Grid>
    );
  } else {
    return (
      <Grid>
        {/* <SearchBar /> */}
        <Grid container>
          <Grid item>
            <Photo photoUrl={data.user.photoUrl}></Photo>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography>{name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>About Me</Typography>
          </Grid>
          <Grid item>
            <About about={data.user.about}/>
          </Grid>
          <Grid item>
            <Typography>My Songs</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <SongTiles songs={data.songs} user={data.user} />
            </Grid>
          </Grid>
        </Grid>
        <Player color={'white'} song={'songProp'} user={'userProp'} />
      </Grid>
    );
  }
};

export { getServerSideProps };
export default Profile;