import { useState, useContext, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProjectContext } from './ProjectContext';

function GenreSelector() {
  const { genreState } = useContext(ProjectContext);
  const [genre, setGenre] = genreState;
  const [localGenre, setLocalGenre] = useState(genre)

  useEffect(() => {
    setLocalGenre(genre);
  }, [genreState]);

  const handleChange = (event) => {
    setGenre(event.target.value);
    setLocalGenre(event.target.value);
  };

  return (
    <FormControl sx={{ marginRight: 2 }}>
      <InputLabel value='genre' id="genre-select-label" size='small' sx={{borderColor:'#3A0CA3'}}>Genre</InputLabel>
      <Select
        labelId="genre-select-label"
        id="genre-select"
        value={localGenre}
        label="Genre"
        onChange={handleChange}
        sx={{ height: '36.5px', width: '7em'}}
      >
        <MenuItem value="" sx={{ fontSize: '1.7vh'}}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'pop'}>Pop</MenuItem>
        <MenuItem value={'rock'}>Rock</MenuItem>
        <MenuItem value={'hip-hop'}>Hip-Hop</MenuItem>
        <MenuItem value={'country'}>Country</MenuItem>
        <MenuItem value={'classical'}>Classical</MenuItem>
      </Select>
    </FormControl>
  );
  };

export default GenreSelector;