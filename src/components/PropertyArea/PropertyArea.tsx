import React, { useEffect, useState, useContext } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { PropertyCard } from './components/PropertyCard';
import Skeleton from '@material-ui/lab/Skeleton';
import { propertiesInterface } from '../../const/types';
import { getProperty } from '../../api/getProperty';
import { FilterContext } from '../../contextAPI/FilterContext';
import { filterProperties } from './components/filterProperties';

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
  //estado inmuebles
  const [properties, setProperties] = useState<propertiesInterface>({
    properties: null,
    loading: false,
  });
  //llamada a la API al iniciar componentes
  useEffect(() => {
    if (properties.properties === null) {
      const resultApi = async () => {
        const data = await getProperty();

        setProperties({ properties: data.properties, loading: true });
      };
      resultApi();
    }
  }, []);

  //context filter
  const filter = useContext(FilterContext);

  useEffect(() => {
    if (properties.properties !== null) {
      const result = properties.properties.filter((property: any) =>
        filterProperties(property, filter)
      );
      // setProperties({ ...properties, properties: result });
    }
  }, [filter]);

  return (
    <div className={classes.area}>
      <h2 className={classes.mainTitle}>Our Actual Properties</h2>
      {properties.loading ? (
        properties.properties !== null &&
        properties.properties.map(
          (property: any) =>
            filterProperties(property, filter) && (
              <PropertyCard
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
