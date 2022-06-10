import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavigationBar from '../../components/NavigationBar';
import { Grid, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import SongResult from '../../components/queryPage/SongResult';
import ArtistResult from '../../components/queryPage/ArtistResult';
import QueryTypeSelect from '../../components/queryPage/QueryTypeSelect';
import SortSelect from '../../components/queryPage/SortSelect';
import pool from '../../sql/db';
import useQuery from '../../helper/query';

const Query: NextPage = () => {

  const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const userProp = {
    userId: 1,
    name: 'Artist Name',
    email: 'artistname@email.com',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liked: false, //liked by current user
  }
  const songProp = {
    songName: 'Song Name',
    artistName: 'Artist Name',
    songPath: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
    genre: 'Rock',
    tags: ['smooth', 'funky'],
    artistPic: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
    cumulativeLikes: 234,
  }

  var [loadedData, setLoadedData] = useState(['Not Loaded']);
  const [queryTypeParam, setQueryTypeParam] = useState('Songs');
  var [sortParam, setSortParam] = useState('Most Liked');
  var [menuItems, setMenuItems] = useState(['Most Liked', 'Least Liked', 'Most Shared', 'Least Shared', 'Most Recent', 'Least Recent']);

  const queryInput = useQuery() || {queryString: ''};

  useEffect(() => {
    if (queryTypeParam === 'Songs') {
      setSortParam('Most Liked');
      setMenuItems(['Most Liked', 'Least Liked', 'Most Shared', 'Least Shared', 'Most Recent', 'Least Recent']);
    } else if (queryTypeParam === 'Artists') {
      setSortParam('Most Popular');
      setMenuItems(['Most Popular', 'Least Popular']);
    } else if (queryTypeParam === 'Genres') {
      setSortParam('Most Liked');
      setMenuItems(['Most Liked', 'Least Liked', 'Most Shared', 'Least Shared', 'Most Recent', 'Least Recent', 'Alphabetical']);
    }
  }, [queryTypeParam]);

  useEffect(() => {
    setLoadedData(['Not Loaded']);
    fetch(`/api/query/${queryInput.queryString}/${queryTypeParam}/${sortParam}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setLoadedData(data);
    })
    .catch((err) => {
      console.log('Error with GET request: ', err);
    });
    if (!queryInput) {
      return;
    }
    console.log(queryInput.queryString);
    console.log(queryTypeParam);
    console.log(sortParam);
  }, [sortParam]);

  return (
    <div>
      <Head>
        <title>improvibe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar/>
      <Grid container spacing={1}>
          <Grid item xs={6}>
            <QueryTypeSelect queryTypeParam={queryTypeParam} setQueryTypeParam={setQueryTypeParam}/>
          </Grid>
          <Grid item xs={6}>
            <SortSelect sortParam={sortParam} setSortParam={setSortParam} menuItems={menuItems}/>
          </Grid>
        </Grid>
      {loadedData[0] === 'Not Loaded' ?
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <Skeleton variant="text" animation="wave" height={30} width="25%"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave"/>
        </Grid>
      </Grid>
      :
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <Item>Showing 3 results</Item>
        </Grid>
        <Grid item xs={12}>
          <ArtistResult user={userProp}/>
        </Grid>
        <Grid item xs={12}>
          <SongResult song={songProp} user={userProp}/>
        </Grid>
        <Grid item xs={12}>
          <SongResult song={songProp} user={userProp}/>
        </Grid>
      </Grid>
      }
    </div>
  )
};

export default Query;
