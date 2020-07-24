import React from 'react';
import Button from '@material-ui/core/Button';
import { store } from '../App';
import { addValue } from '../store/actions/counter.action';

const Counter = () => {
  const handleClick = () => {
    store.dispatch(addValue());
  };

  return (
    <Button variant='contained' color='primary' onClick={handleClick}>
      Contador
    </Button>
  );
};

export { Counter };
