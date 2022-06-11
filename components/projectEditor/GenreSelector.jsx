import { useState, useContext, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProjectContext } from './ProjectContext';

function GenreSelector() {
  const { genreState } = useContext(ProjectContext);
  const [genre, setGenre] = genreState;
  console.log('genre', genre);
  const [localGenre, setLocalGenre] = useState(genre)

  useEffect(() => {
    setLocalGenre(genre);
  }, [genreState]);

  const handleChange = (event) => {
    setGenre(event.target.value);
    setLocalGenre(event.target.value);
  };

  return (
    <FormControl sx={{ mr: 2 }}>
      <InputLabel id="genre-select-label" sx={{ fontSize: '1.5vh' }}>Genre</InputLabel>
      <Select
        labelId="genre-select-label"
        id="genre-select"
        value={localGenre}
        label="Genre"
        onChange={handleChange}
        sx={{ height: '4vh', width: '8vw', fontSize: '1.7vh' }}
      >
        <MenuItem value="" sx={{ fontSize: '1.7vh'}}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'pop'} sx={{ fontSize: '1.7vh'}}>Pop</MenuItem>
        <MenuItem value={'rock'} sx={{ fontSize: '1.7vh'}}>Rock</MenuItem>
        <MenuItem value={'hip-hop'} sx={{ fontSize: '1.7vh'}}>Hip-Hop</MenuItem>
        <MenuItem value={'country'} sx={{ fontSize: '1.7vh'}}>Country</MenuItem>
        <MenuItem value={'classical'} sx={{ fontSize: '1.7vh'}}>Classical</MenuItem>
      </Select>
    </FormControl>
  );
  };

export default GenreSelector;