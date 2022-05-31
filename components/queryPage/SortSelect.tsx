import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SortSelect() {
  const [sort, setSort] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'Most Popular'}>Most Popular</MenuItem>
          <MenuItem value={'Least Popular'}>Least Popular</MenuItem>
          <MenuItem value={'Most Recent'}>Most Recent</MenuItem>
          <MenuItem value={'Least Recent'}>Least Recent</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}