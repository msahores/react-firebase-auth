import axios from 'axios';
import { Dispatch } from 'redux';
import { DataDispatchTypes, DATA_LOADING, COMMENTS_SUCCESS,TODOS_SUCCESS, DATA_FAIL} from './types/data';

const fetchUrl = 'https://jsonplaceholder.typicode.com';

export const getComments = () => async (
  dispatch: Dispatch<DataDispatchTypes>,
) => {
  try {
    dispatch({
      type: DATA_LOADING,
    });
    const res = await axios.get(`${fetchUrl}/comments`);
    dispatch({
      type: COMMENTS_SUCCESS,
      comments: res.data,
    });
  } catch (e) {
    dispatch({
      type: DATA_FAIL,
    });
  }
};

export const getTodos = () => async (
  dispatch: Dispatch<DataDispatchTypes>,
) => {
  try {
    dispatch({
      type: DATA_LOADING,
    });
    const res = await axios.get(`${fetchUrl}/todos`);
    dispatch({
      type: TODOS_SUCCESS,
      todos: res.data,
    });
    return res;
  } catch (error) {
    dispatch({
      type: DATA_FAIL,
    });
    return (error)
  }
};
