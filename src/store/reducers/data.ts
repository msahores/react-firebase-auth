import {
  CommentType,
  TodoType,
  DataDispatchTypes,
  DATA_FAIL,
  COMMENTS_SUCCESS,
  TODOS_SUCCESS,
  DATA_LOADING
} from '../actions/types/data';

interface DataStateI {
  loading: boolean;
  comments?: CommentType[] | null;
  todos?: TodoType[] | null;
}

const initialState: DataStateI = {
  loading: false,
  comments: null,
  todos: null,
};

const reducer = (
  state: DataStateI = initialState,
  action: DataDispatchTypes,
): DataStateI => {
  switch (action.type) {
    case DATA_FAIL:
      return {
        loading: false,
      };
    case DATA_LOADING:
      return {
        loading: true,
      };
    case COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    case TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      };
    default:
      return state;
  }
};

export default reducer