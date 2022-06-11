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
import CardContent from '@mui/material/CardContent';
import useQuery from '../../helper/query';

const Query: NextPage = () => {

  const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    marginLeft: '200px',
    color: theme.palette.text.secondary,
  }));

  const userProp = {
    userId: 1,
    name: 'Artist Name',
    email: 'artistname@email.com',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liked: false //liked by current user
  }
  // `SELECT projects.id, projects.name, projects.genre, projects.likes, projects.shares, projects.user_id, projects.song_path, projects.date_created, users.photo_url
  const songProp = {
    id: 1,
    name: 'Song Name',
    artistName: 'Artist Name',
    song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
    genre: 'Rock',
    photo_url: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
    likes: 234,
    shares: 100,
    user_id: 1,
    date_created: 1
  }

  var [loadedData, setLoadedData] = useState(['Not Loaded']);
  const [queryTypeParam, setQueryTypeParam] = useState('Songs');
  var [sortParam, setSortParam] = useState('Most Liked');
  var [menuItems, setMenuItems] = useState(['Most Liked', 'Least Liked', 'Most Shared', 'Least Shared', 'Most Recent', 'Least Recent']);
  const queryInput = useQuery() || {queryString: ''};
  var [queryState, setQueryState] = useState(0);

  useEffect(() => {
    if (queryTypeParam === 'Songs') {
      setMenuItems(['Most Liked', 'Least Liked', 'Most Shared', 'Least Shared', 'Most Recent', 'Least Recent']);
      setSortParam('Most Liked');
      setQueryState(1);
    } else if (queryTypeParam === 'Artists') {
      setMenuItems(['Most Popular', 'Least Popular', 'Alphabetical']);
      setSortParam('Most Popular');
      setQueryState(1);
    } else if (queryTypeParam === 'Genres') {
      setMenuItems(['Most Liked', 'Least Liked', 'Most Shared', 'Least Shared', 'Most Recent', 'Least Recent', 'Alphabetical']);
      setSortParam('Most Liked');
      setQueryState(1);
    }
  }, [queryTypeParam]);

  useEffect(() => {
    if (queryInput.queryString !== '') {
      setQueryState(1);
    }
  }, [queryInput]);

  useEffect(() => {
    setLoadedData(['Not Loaded']);
    setQueryState(0);
    fetch(`/api/query/${queryInput.queryString}/${queryTypeParam}/${sortParam}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setLoadedData(data.rows);
    })
    .catch((err) => {
      setLoadedData(['Error']);
      console.log('Error with GET request: ', err);
    });
    if (!queryInput) {
      return;
    }
    console.log(queryInput.queryString);
    console.log(queryTypeParam);
    console.log(sortParam);
  }, [sortParam, queryState]);

  return (
    <div>
      <Head>
        <title>improvibe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar/>
      <Grid container spacing={1} sx={{padding: 0}}>
          <Grid item xs={12} sx={{padding: 0}}>
            <CardContent sx={{display: 'flex', flexDirection: 'row-reverse', mr: "200px", padding:0}}>
              <SortSelect sortParam={sortParam} setSortParam={setSortParam} menuItems={menuItems}/>
              <QueryTypeSelect queryTypeParam={queryTypeParam} setQueryTypeParam={setQueryTypeParam}/>
            </CardContent>
          </Grid>
        </Grid>
      {loadedData[0] === 'Not Loadeds' ?
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <Skeleton variant="text" animation="wave" height={30} width="25%" sx={{ margin: 0, ml: '100px'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '100px', mr: '100px'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '100px', mr: '100px'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '100px', mr: '100px'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '100px', mr: '100px'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '100px', mr: '100px'}}/>
        </Grid>
      </Grid>
      :
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <Item>Showing {loadedData.length} results</Item>
        </Grid>
        {/* <Grid item xs={12}>
          <ArtistResult user={userProp}/>
        </Grid> */}
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
