import React, { useEffect, useContext } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { PropertyCard } from './components/PropertyCard';
import Skeleton from '@material-ui/lab/Skeleton';
import { getProperty } from '../../api/getProperty';
import { FilterContext } from '../../contextAPI/FilterContext';
import { filterProperties } from '../FilterArea/components/filterProperties';
import { PropertyContext } from '../../contextAPI/PropertyContext';

const useStyles = makeStyles(() =>
  createStyles({
    area: {
      display: 'flex',
      flexDirection: 'column',
    },
    mainTitle: {
      textAlign: 'center',
    },
    skeleton: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const PropertyArea = () => {
  //css style
  const classes = useStyles();

  //context filter
  const { filter } = useContext(FilterContext);
  const { handleChangeAvalabilityFilter } = useContext(FilterContext);

  //estado inmuebles desestructurado desde App
  const { properties } = useContext(PropertyContext);

  //set del estado inmuebles desestructurado desde App
  const { setProperties } = useContext(PropertyContext);

  //llamada a la API al iniciar componentes
  useEffect(() => {
    if (properties.properties === null) {
      const resultApi = async () => {
        const data = await getProperty();
        setProperties({ properties: data.properties, loading: true });

        //calculamos filtros en la primera llamda a la API
        handleChangeAvalabilityFilter(data.properties);
      };
      resultApi();
    }
  }, [properties.properties, filter]);

  return (
    <div className={classes.area}>
      <h2 className={classes.mainTitle}>Our Actual Properties</h2>
      {properties.loading ? (
        properties.properties !== null &&
        properties.properties.map(
          (property: any) =>
            filterProperties(property, filter) && (
              <PropertyCard
                key={property.id}
                title={property.publication_title}
                description={property.description}
                photo={property.photos}
                type={property.type.name}
                room={property.room_amount}
                bath={property.bathroom_amount}
                parking={property.parking_lot_amount}
              />
            )
        )
      ) : (
        <div className={classes.skeleton}>
          <span>
            <Skeleton width='60%' />
            <Skeleton />
          </span>
          <Skeleton width={210} height={300} />
        </div>
      )}
    </div>
  );
};

export { PropertyArea };
