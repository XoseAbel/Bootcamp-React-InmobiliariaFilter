import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { PropertyArea } from './components/PropertyArea';
import { FilterArea } from './components/FilterArea';
import { filterInterface, propertiesInterface } from './const/types';
import { FilterContext } from './contextAPI/FilterContext';
import { PropertyContext } from './contextAPI/PropertyContext';

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
    availableFilter: {
      rooms: [],
      bath: [],
      parking: [],
      type: [],
    },
  });
  //metodo para modificar Context añadiendo filtrado
  function handleChangeFilter(event: any) {
    setFilter(pre => ({
      ...pre,
      [event.target.name]: event.target.value as string[],
    }));
  }

  //estado inmuebles para render en property y para filtros dinamicos
  const [properties, setProperties] = useState<propertiesInterface>({
    properties: null,
    loading: false,
  });

  //metodo para modificar Context modificando opciones filtrado
  function handleChangeAvalabilityFilter(arr: any) {
    function getAvailabilityFilter(
      arr: any[],
      amount: string,
      secondAmout?: string
    ) {
      if (secondAmout) {
        const resultFilter = arr.map(
          (property: any) => property[amount][secondAmout]
        );
        return Array.from(new Set(resultFilter)).sort();
      }
      const resultFilter = arr.map((property: any) => property[amount] + '');
      return Array.from(new Set(resultFilter)).sort();
    }

    const newAvailableFilter = {
      rooms: getAvailabilityFilter(arr, 'room_amount'),
      bath: getAvailabilityFilter(arr, 'bathroom_amount'),
      parking: getAvailabilityFilter(arr, 'parking_lot_amount'),
      type: getAvailabilityFilter(arr, 'type', 'name'),
    };
    if (
      filter.availableFilter?.rooms?.toString() !==
        newAvailableFilter.rooms.toString() &&
      filter.availableFilter?.bath?.toString() !==
        newAvailableFilter.bath.toString() &&
      filter.availableFilter?.parking?.toString() !==
        newAvailableFilter.parking.toString() &&
      filter.availableFilter?.type?.toString() !==
        newAvailableFilter.type.toString()
    ) {
      setFilter({ ...filter, availableFilter: newAvailableFilter });
    }
  }

  return (
    <div className={classes.main}>
      <FilterContext.Provider
        value={{ filter, handleChangeFilter, handleChangeAvalabilityFilter }}
      >
        <PropertyContext.Provider value={{ properties, setProperties }}>
          <FilterArea />
          <PropertyArea />
        </PropertyContext.Provider>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
