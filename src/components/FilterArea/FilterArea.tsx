import React, { useContext, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FilterContext } from '../../contextAPI/FilterContext';
import { filterProperties } from './components/filterProperties';
import { PropertyContext } from '../../contextAPI/PropertyContext';

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

const FilterArea = () => {
  const classes = useStyles();

  //obtenemos metodos de la contextAPI
  const { filter } = useContext(FilterContext);
  const { handleChangeFilter } = useContext(FilterContext);
  const { handleChangeAvalabilityFilter } = useContext(FilterContext);

  //info de properties para filtros dinamicos
  const { properties } = useContext(PropertyContext);

  //obtenemos los posibles filtros del contexto, e asignamos a nuestros select
  const { availableFilter } = useContext(FilterContext).filter;
  let rooms = availableFilter?.rooms;
  let bathrooms = availableFilter?.bath;
  let parking = availableFilter?.parking;
  let types = availableFilter?.type;

  const handleChange = (event: any) => {
    handleChangeFilter(event);
  };

  const handleCloseAvalabilityFilter = () => {
    if (properties.properties !== null) {
      const result: any[] = properties.properties.filter((property: any) => {
        if (filterProperties(property, filter)) return property;
      });
      handleChangeAvalabilityFilter(result);
    }
  };

  return (
    <div>
      <FormControl className={classes.formControlTypes}>
        <InputLabel id='Rooms'>Types</InputLabel>
        <Select
          multiple
          name='type'
          value={filter.type}
          onChange={handleChange}
          onClose={handleCloseAvalabilityFilter}
          input={<Input />}
          MenuProps={MenuPropsTypes}
        >
          {types?.map(type => (
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
          onClose={handleCloseAvalabilityFilter}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {rooms?.map(room => (
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
          onClose={handleCloseAvalabilityFilter}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {bathrooms?.map(bath => (
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
          onClose={handleCloseAvalabilityFilter}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {parking?.map(park => (
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
