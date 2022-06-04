import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const types = [
  'Artists',
  'Genres',
  'Projects',
];

function getStyles(param: string, filterParams: string[], theme: Theme) {
  return {
    fontWeight:
      filterParams.indexOf(param) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FilterSelect({filterParams, setFilterParams}: any) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof filterParams>) => {
    const {
      target: { value },
    } = event;
    setFilterParams(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} role='filter-select'>
        <InputLabel id="demo-multiple-name-label">Filter</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={filterParams}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {types.map((type) => (
            <MenuItem
              key={type}
              value={type}
              style={getStyles(type, filterParams, theme)}
            >
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}