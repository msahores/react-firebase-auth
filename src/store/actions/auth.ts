import { Dispatch } from 'redux';
import { 
  AuthDispatchTypes, 
  AUTH_LOADING, 
  AUTH_SIGNOUT_SUCCESS, 
  AUTH_CHANGE_SUCCESS, 
  AUTH_LOGIN_SUCCESS, 
  AUTH_REGISTER_SUCCESS,
  AUTH_FAIL, 
} from './types/auth';
import firebase from '../../firebase';

export const signOut = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  try {
    dispatch({
      type: AUTH_LOADING
    })
    firebase.auth().signOut();
    dispatch({
      type: AUTH_SIGNOUT_SUCCESS,
      user: null, 
      auth: null
    })
  }
  catch(error){
    dispatch({
      type: AUTH_FAIL,
      payload: error
    })
  }
}

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<AuthDispatchTypes>
) => { 
    dispatch({
      type: AUTH_LOADING
    })
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({
      type: AUTH_LOGIN_SUCCESS,
    })
  } catch (error){
    dispatch({
      type: AUTH_FAIL,
    })
    throw new Error(error)
  }
}

export const register = (email: string, password: string, userName: string = '') => async(
  dispatch: Dispatch<AuthDispatchTypes>
) => {
    dispatch({
      type: AUTH_LOADING
    })
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => res.user?.updateProfile({ displayName: userName}))
    dispatch({
      type: AUTH_REGISTER_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
    })
    throw new Error(error) 
  }
}

export const handleAuthChange = () => async (
  dispatch: Dispatch<AuthDispatchTypes>,
) => {
  try {
    dispatch({
      type: AUTH_LOADING
    })
    firebase.auth().onAuthStateChanged(res => {
      dispatch({
        type: AUTH_CHANGE_SUCCESS,
        user: res, 
      })
    });
    } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error
    })
  }
}