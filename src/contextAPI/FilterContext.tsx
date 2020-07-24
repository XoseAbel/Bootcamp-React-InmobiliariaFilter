import React from 'react';
import { filterInterface } from '../const/types';

const FilterContext = React.createContext<filterInterface>({
  rooms: [],
  bath: [],
  parking: [],
  type: [],
  set: null,
});

export { FilterContext };
