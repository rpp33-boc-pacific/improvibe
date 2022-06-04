import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import NavigationBar from '../../components/NavigationBar';
import { Grid, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import FilterSelect from '../../components/queryPage/FilterSelect';
import SortSelect from '../../components/queryPage/SortSelect';

const Query: NextPage = () => {

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
