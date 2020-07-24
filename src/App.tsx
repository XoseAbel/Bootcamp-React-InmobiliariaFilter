import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { PropertyArea } from './components/PropertyArea';
import { FilterArea } from './components/FilterArea';
import { filterInterface } from './const/types';
import { FilterContext } from './contextAPI/FilterContext';

//Definimos estilo de nuestra APP principal
const useStyles = makeStyles(() =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

//Ejecutamos nuestra App
function App() {
  //Generamos las propiedades CSS que implementamos en nuestra App
  const classes = useStyles();
  //filter state
  const [filter, setFilter] = React.useState<filterInterface>({
    rooms: [],
    bath: [],
    parking: [],
    type: [],
    set: handleChange,
  });
  //metodo para modificar Context
  function handleChange(event: any) {
    setFilter(pre => ({
      ...pre,
      [event.target.name]: event.target.value as string[],
    }));
  }

  return (
    <div className={classes.main}>
      <FilterContext.Provider value={filter}>
        <FilterArea />
        <PropertyArea />
      </FilterContext.Provider>
    </div>
  );
}

export default App;
