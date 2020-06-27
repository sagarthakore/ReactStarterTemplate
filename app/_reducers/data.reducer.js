import { userConstants } from '../_constants/user.constants';

const initialState = {
  
}

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "CASE":
      return {
        ...state,
      };
    default:
      return state
  }
}