import {
    TO_DO_ON_ADD,
    TO_DO_ON_DELETE
  } from './actionType';
  
export const onAdd = (rawParams) => ( dispatch, getState ) => {
    const dataList = getState().toDo.dataList;
    dataList.push(rawParams) ; 
    const mStart = {
        type: TO_DO_ON_ADD,
        dataList: dataList
      };

    dispatch(mStart);
}

export const onDelete = (rawParams) => ( dispatch, getState ) => {
    const dataList = getState().toDo.dataList;
  
    dataList.splice(rawParams, 1);

    const mStart = {
        type: TO_DO_ON_DELETE,
        dataList: dataList
      };

      dispatch(mStart);
}