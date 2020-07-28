import React from 'react';
import { propertiesInterface } from '../const/types';

interface contextInterface {
  properties: propertiesInterface;
  setProperties?: any;
}

const PropertyContext = React.createContext<contextInterface>({
  properties: {
    properties: null,
    loading: false,
  },
});

export { PropertyContext };
