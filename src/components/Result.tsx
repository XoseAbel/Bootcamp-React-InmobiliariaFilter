import React from 'react';
import { useSelector } from 'react-redux';
import { storeInterface } from '../store/reducer/counter.reducer';

const Result = () => {
  // hook para añadir el store de redux al estado del componente(para conseguir la funcionalidad adecuada)
  const value = useSelector((state: storeInterface) => state.value);

  return <h3>Se ha pulsado el contador {value} veces</h3>;
};

export { Result };
