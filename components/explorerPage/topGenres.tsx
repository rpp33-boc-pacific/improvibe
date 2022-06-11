import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AppContext from '../../AppContext';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1976d2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: alpha(theme.palette.common.white, 1),
}));

const TopGenres = (props: any) => {

  const [genres, setGenres] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  useEffect(() => {

    axios.get('api/top/genre/genre-list')
    .then((response) => {
      setGenres(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  })

  // console.log(FiveLargest)

  return (
    isLoading === true ? <>Loading...</> :
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {genres.map((genre: { genre: string, totalLikes: number}) => {
          return (
            <Item key = {genre.genre}>{genre.genre}</Item>
          )
        })}
      </Stack>
    </div>
  );
}

export default TopGenres;