import { 
  UserType, 
  AuthDispatchTypes, 
  AUTH_FAIL, 
  AUTH_LOADING, 
  AUTH_SIGNOUT_SUCCESS, 
  AUTH_CHANGE_SUCCESS, 
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_SUCCESS
} from '../actions/types/auth';

interface AuthStateI {
  loading: boolean,
  user?: UserType | null  
}

const initialState: AuthStateI = {
  loading: false,
  user: null,
};

const reducer = (
  state: AuthStateI = initialState,
  action: AuthDispatchTypes,
): AuthStateI => {
  switch (action.type) {
    case AUTH_FAIL:
      return {
        loading: false,
      };
    case AUTH_LOADING:
      return {
        loading: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case AUTH_SIGNOUT_SUCCESS:
      return {
        loading: false,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
