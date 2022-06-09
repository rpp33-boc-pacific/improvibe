import { useState, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProjectContext } from './ProjectContext';

function GenreSelector() {
  const context = useContext(ProjectContext);
  const [newContext, updatedContext] = useState(context);

  const initialValue = '';
  const [genre, setGenre] = useState(initialValue)

  const handleChange = (e) => {
    setGenre(e.target.value);
    context.genreState = e.target.value;
  };

  return (
    <ProjectContext.Provider value={context}>
      <FormControl sx={{ mr: 2 }}>
        <InputLabel id="genre-select-label" sx={{ fontSize: '1.5vh '}}>Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={genre}
          label="Genre"
          onChange={handleChange}
          sx={{ height: '4vh', width: '8vw', fontSize: '1.7vh'}}
        >
          <MenuItem value="" sx={{ fontSize: '1.7vh '}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'pop'} sx={{ fontSize: '1.7vh'}}>Pop</MenuItem>
          <MenuItem value={'rock'} sx={{ fontSize: '1.7vh'}}>Rock</MenuItem>
          <MenuItem value={'hip-hop'} sx={{ fontSize: '1.7vh'}}>Hip-Hop</MenuItem>
          <MenuItem value={'country'} sx={{ fontSize: '1.7vh'}}>Country</MenuItem>
          <MenuItem value={'classical'} sx={{ fontSize: '1.7vh'}}>Classical</MenuItem>
        </Select>
      </FormControl>
    </ProjectContext.Provider>
  );
  };

export default GenreSelector;