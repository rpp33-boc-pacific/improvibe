import { useContext } from 'react';
import Button from '@mui/material/Button';
import saveSong from './saveSong';
import { ProjectContext } from './ProjectContext';
import AppContext from '../../AppContext';

export default function SaveProject() {
  const layers = useContext(ProjectContext);
  const user = useContext(AppContext)
  return (
    <Button
    onClick={() => {
      saveSong(layers, user)
      // .then((id) => {
      //   //this project now has an id, important for POST vs PUT
      // })
    }}
    variant="contained"
    sx={{ width: '6vw', height: '4vh', fontSize: '1.7vh'}}
    >Save</Button>
  );
}
