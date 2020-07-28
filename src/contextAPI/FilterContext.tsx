import React from 'react';
import { filterInterface } from '../const/types';

interface contextInterface {
  filter: filterInterface;
  handleChangeFilter?: any;
  handleChangeAvalabilityFilter?: any;
}

const FilterContext = React.createContext<contextInterface>({
  filter: {
    rooms: [],
    bath: [],
    parking: [],
    type: [],
  },
});

export { FilterContext };
