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
      <FormControl sx={{ mr: 1, width: '6vw', height: '4vh', fontSize: '1.7vh' }} size='small'>
        <InputLabel id="genre-select-label" sx={{ height: '4vh', width: '6vw', fontSize: '1.5vh '}}>Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={genre}
          label="Genre"
          onChange={handleChange}
        >
          <MenuItem value="" sx={{ fontSize: '1.7vh '}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'pop'} sx={{ fontSize: '1.7vh '}}>Pop</MenuItem>
          <MenuItem value={'rock'} sx={{ fontSize: '1.7vh '}}>Rock</MenuItem>
          <MenuItem value={'hip-hop'} sx={{ fontSize: '1.7vh '}}>Hip-Hop</MenuItem>
          <MenuItem value={'country'} sx={{ fontSize: '1.7vh '}}>Country</MenuItem>
        </Select>
    </FormControl>
    </div>
  );
  };

export default GenreSelector;