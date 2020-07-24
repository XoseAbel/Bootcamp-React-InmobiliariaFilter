import React from 'react';
import { Counter } from './components/Counter';
import { Result } from './components/Result';
import { makeStyles, createStyles } from '@material-ui/core/styles';
//REDUX
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState, counterStore } from './store/reducer/counter.reducer';
import { Provider } from 'react-redux';

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

export const store = createStore(
  counterStore,
  initialState,
  composeWithDevTools()
  // other store enhancers if any
);

//Ejecutamos nuestra App
function App() {
  //Generamos las propiedades CSS que implementamos en nuestra App
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.main}>
        <Result />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
