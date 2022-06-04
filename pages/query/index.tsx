import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavigationBar from '../../components/NavigationBar';
import { Grid, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import SongResult from '../../components/queryPage/SongResult';
import FilterSelect from '../../components/queryPage/FilterSelect';
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

  const [filterParams, setFilterParams] = useState<string[]>([]);
  const [sortParam, setSortParam] = useState('');

  return (
    <div>
      <Head>
        <title>improvibe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar/>
      <Grid container spacing={1}>
          <Grid item xs={6}>
            <FilterSelect filterParams={filterParams} setFilterParams={setFilterParams}/>
          </Grid>
          <Grid item xs={6}>
            <SortSelect sortParam={sortParam} setSortParam={setSortParam}/>
          </Grid>
        </Grid>
      <Grid container spacing={1} direction="column">

      </Grid>
    </div>
  )
};

export default Query;
