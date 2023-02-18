import { actionTypes } from './action';

interface ReducerState {
  term?: string;
}

interface ReducerActions extends ReducerState {
  type: string;
}

export const initialState: ReducerState = {};

const reducer = (state: ReducerState, action: ReducerActions) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
