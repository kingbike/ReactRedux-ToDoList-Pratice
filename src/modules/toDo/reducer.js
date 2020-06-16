import {
    TO_DO_ON_ADD,
    TO_DO_ON_DELETE
  } from './actionType';

  const initialState = {
    dataList: []
  };

function toDo(state = initialState, action) {
    const {
        dataList
    } = action;

    switch (action.type) {
        case TO_DO_ON_ADD:
            return {
                ...state,
                dataList
            };
        case TO_DO_ON_DELETE:
            return {
                ...state,
                dataList
            };
        default:
            return state;
    }
}

export default toDo;