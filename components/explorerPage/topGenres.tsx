import * as React from 'react';
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
        {TopGenre.map((genre: { name: string, likes: number}) => {
          return (
            <Item key = {genre.name}>{genre.name}</Item>
          )
        })}
      </Stack>
    </div>
  );
}

export default TopGenres;