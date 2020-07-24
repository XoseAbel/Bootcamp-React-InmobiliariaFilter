import React, { useContext } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { filterInterface } from '../../const/types';
import { FilterContext } from '../../contextAPI/FilterContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    formControlTypes: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 450,
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};
const MenuPropsTypes = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 230,
    },
  },
};

const rooms = ['0', '1', '2', '3', '4', '5', '6'];
const bathrooms = ['0', '1', '2', '3', '4', '5'];
const parking = ['0', '1', '2', '3', '4'];
const types = ['Departamento', 'Oficina', 'Casa', 'Condominio horizontal'];

const FilterArea = () => {
  const classes = useStyles();

  const filter = useContext(FilterContext);

  const handleChange = (event: any) => {
    filter.set(event);
  };

  return (
    <div>
      <FormControl className={classes.formControlTypes}>
        <InputLabel id='Rooms'>Types</InputLabel>
        <Select
          multiple
          name='type'
          value={filter?.type}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuPropsTypes}
        >
          {types.map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='Rooms'>Rooms</InputLabel>
        <Select
          multiple
          name='rooms'
          value={filter?.rooms}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {rooms.map(room => (
            <MenuItem key={room} value={room}>
              {room}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='Bathrooms'>Bathrooms</InputLabel>
        <Select
          multiple
          name='bath'
          value={filter.bath}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {bathrooms.map(bath => (
            <MenuItem key={bath} value={bath}>
              {bath}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='Parking'>Parking</InputLabel>
        <Select
          multiple
          name='parking'
          value={filter.parking}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {parking.map(park => (
            <MenuItem key={park} value={park}>
              {park}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { FilterArea };
