import { ADD_VALUE } from '../../const';

export interface storeInterface {
  value: number;
}

export const initialState: storeInterface = {
  value: 0,
};

let counterStore: (state: storeInterface | undefined, action: any) => any;

counterStore = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return { ...state, value: state.value + action.value };
    default:
      return state;
  }
};

export { counterStore };
