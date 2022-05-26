import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function GenreSelector() {
  const [genre, setGenre] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={genre}
          onChange={handleChange}
          label="Genre"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'rock'}>Rock</MenuItem>
          <MenuItem value={'hip-hop'}>Hip-Hop</MenuItem>
          <MenuItem value={'pop'}>Pop</MenuItem>
          <MenuItem value={'country'}>Country</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
  };

export default GenreSelector;