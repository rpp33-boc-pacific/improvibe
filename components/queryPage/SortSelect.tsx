import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SortSelect({sortParam, setSortParam, menuItems}: any) {

  const handleChange = (event: SelectChangeEvent) => {
    setSortParam(event.target.value as string);
  };

  return (
    <Box role='sort-select'>
      <FormControl sx={{ m: 1, width: 150, padding: 0}}>
        <InputLabel id="sort-simple-select-label">Sort</InputLabel>
        <Select
          id="sort-simple-select"
          value={sortParam}
          label="Sort Parameter"
          onChange={handleChange}
          size="small"
        >
          {menuItems.map((item: string) => {
            return <MenuItem key={item} value={item}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}