import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function GenreSelector() {
  // genre selection available in genre
  const [genre, setGenre] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="genre-select-label">Genre</InputLabel>
      <Select
        labelId="genre-select-label"
        id="genre-select"
        value={genre}
        label="Genre"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'pop'}>Pop</MenuItem>
        <MenuItem value={'rock'}>Rock</MenuItem>
        <MenuItem value={'hip-hop'}>Hip-Hop</MenuItem>
        <MenuItem value={'country'}>Country</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
  };

export default GenreSelector;