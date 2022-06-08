import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function QueryTypeSelect({queryTypeParam, setQueryTypeParam}: any) {

  const handleChange = (event: SelectChangeEvent) => {
    setQueryTypeParam(event.target.value as string);
  };

  return (
    <Box role='query-type-select'>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="query-type-simple-select-label">Query Type</InputLabel>
        <Select
          id="query-type-simple-select"
          value={queryTypeParam}
          label="Query Type Parameter"
          onChange={handleChange}
        >
          <MenuItem value={'Songs'}>Songs</MenuItem>
          <MenuItem value={'Artists'}>Artists</MenuItem>
          <MenuItem value={'Genres'}>Genres</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}