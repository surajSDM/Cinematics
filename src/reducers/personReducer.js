import {PERSON_FOUND, ERROR } from '../actions/popularAction'
let defaultState = { loading: true, data: [] };
export default personReducer = (state = defaultState, action) => {
      switch (action.type) {
            case PERSON_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            case ERROR:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}