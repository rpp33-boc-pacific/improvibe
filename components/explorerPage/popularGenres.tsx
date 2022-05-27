import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PopularGenres = (props: any) => {

  let k = 5;

  const TopGenre = props.GenreData.slice(0, k);
  // console.log(FiveLargest)

  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {TopGenre.map((genre) => {
          return (
            <Item>{genre.name}</Item>
          )
        })}
      </Stack>
    </div>
  );
}

export default PopularGenres;