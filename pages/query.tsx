import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SearchAppBar from '../components/SearchBar';
import { Grid, Skeleton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import styles from '../styles/Query.module.css';

const Query: NextPage = () => {

  const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const SearchResult = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchAppBar/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="text" animation="wave" height={20}/>
          <Item>Showing 3 of 3 items</Item>
        </Grid>
        <Grid item xs={8}>
          <Item></Item>
        </Grid>
      </Grid>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={100} animation="wave"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={100} animation="wave"/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={100} animation="wave"/>
        </Grid>
      </Grid>

    </div>
  )
};

export default Query;