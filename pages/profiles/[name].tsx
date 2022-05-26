import * as React from 'react';
import useSWR from 'swr';
// Import MaterialUI components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// Import own components
import Name from '../components/profile/Name';
import About from '../components/profile/About';
import Photo from '../components/profile/Photo';
import Songs from '../components/profile/Songs';
// Import resuable components
import SongTile from '../components/reusable/'
import Player from '../components/resuable/SongTile';
// TO DO - import Nav bar
// TO DO - import search bar
// Import database helper functions
import { getAllUserNames } from '../../database/profile-helpers';

export async function getStaticPaths () {
  const paths = await getAllUserNames();
  return { paths, fallback: 'blocking' };
};

export function getStaticProps ({ params }) {
  const name = params.name;
  return { props: { name } };
};

export default function Profile ({ name }) {

  return (
    <div>
      {/* Profile page */}
    </div>
  );
};