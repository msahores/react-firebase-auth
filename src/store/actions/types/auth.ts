export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_CHANGE_SUCCESS = 'AUTH_CHANGE_SUCCESS';
export const AUTH_SIGNOUT_SUCCESS = 'AUTH_SIGNOUT_SUCCESS';

export type UserType = firebase.default.User | null 

export interface AuthLoading {
  type: typeof AUTH_LOADING;
}

export interface AuthFail {
  type: typeof AUTH_FAIL;
  payload: any
}

export interface AuthLoginSuccess {
  type: typeof AUTH_LOGIN_SUCCESS;
}

export interface AuthRegisterSuccess {
  type: typeof AUTH_REGISTER_SUCCESS;
}

export interface AuthChangeSuccess {
  type: typeof AUTH_CHANGE_SUCCESS;
  user: UserType | null
}
export interface AuthSignOutSuccess {
  type: typeof AUTH_SIGNOUT_SUCCESS;
  auth: null,
  user: null
}

export type AuthDispatchTypes =
  | AuthLoading
  | AuthFail
  | AuthChangeSuccess
  | AuthLoginSuccess
  | AuthRegisterSuccess
  | AuthSignOutSuccess