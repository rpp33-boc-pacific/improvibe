import type { NextPage } from 'next';
import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import NavigationBar from '../../components/NavigationBar';
import { Grid, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import SongResult from '../../components/queryPage/SongResult';
import ArtistResult from '../../components/queryPage/ArtistResult';
import QueryTypeSelect from '../../components/queryPage/QueryTypeSelect';
import SortSelect from '../../components/queryPage/SortSelect';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import useQuery from '../../helper/query';
import AppContext from '../../AppContext';
import { getSession } from "next-auth/react";

const Query: NextPage = (props: any) => {
  const { setUser }: any = useContext(AppContext);
  setUser(props.user.id);

  const Item = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    marginLeft: '200px',
    color: theme.palette.text.secondary,
  }));

  const userProp = {
    id: 1,
    name: 'Artist Name',
    email: 'artistname@email.com',
    about_me: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    liked: false,
    photo_url: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
  }
  const songProp = {
    id: 1,
    song_name: 'Song Name',
    artist_name: 'Artist Name',
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
  var searchResults;
  var searchHeader;

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
    fetch(`/api/query/${queryInput.queryString}/${queryTypeParam}/${sortParam}/${props.user.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.rows.map((item: any) => {
        item.liked = false;
        item.in_projects = false;
      })
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
      <CardContent sx={{display: 'flex', flexDirection: 'row-reverse', mr: '20%', mt:'4vh', padding:0}}>
        <SortSelect sortParam={sortParam} setSortParam={setSortParam} menuItems={menuItems}/>
        <QueryTypeSelect queryTypeParam={queryTypeParam} setQueryTypeParam={setQueryTypeParam}/>
      </CardContent>
      {loadedData[0] === 'Not Loaded' ?
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Skeleton variant="text" animation="wave" height={30} width="25%" sx={{ margin: 0, ml: '15%'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '15%', mr: '15%'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '15%', mr: '15%'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '15%', mr: '15%'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '15%', mr: '15%'}}/>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={150} animation="wave" sx={{ margin: 0, ml: '15%', mr: '15%'}}/>
        </Grid>
      </Grid>
      :
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Item sx={{ ml: '15%'}}>Showing {loadedData.length} results</Item>
        </Grid>
        {/* <Grid item xs={12}>
            <SongResult song={songProp} user={props}/>
          </Grid> */}
        {queryTypeParam === 'Artists' ?
          loadedData.map((item: any) => {
            return <Grid item xs={12}>
            <ArtistResult user={item}/>
          </Grid>;
          })
          :
          loadedData.map((item: any) => {
            return <Grid item xs={12}>
            <SongResult song={item} user={props}/>
          </Grid>;
          })
        }
      </Grid>
      }
    </div>
  )
};

export async function getServerSideProps (context: any) {
  const { req, res } = context;
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, {
      Location: "/logIn",
    });
    res.end();
    return;
  }
  return { props: session };
};

export default Query;
