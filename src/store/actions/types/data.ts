export const DATA_LOADING = 'DATA_LOADING';
export const DATA_FAIL = 'DATA_FAIL';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const TODOS_SUCCESS = 'TODOS_SUCCESS';

export type CommentType = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export type Comments = 
| CommentType[]
| null
| undefined

export type Todos = 
| TodoType[]
| null
| undefined

export type TodoType = {
  userId: number,
  id: number,
  title: string, 
  completed: boolean,
};
export interface DataLoading {
  type: typeof DATA_LOADING;
}

export interface DataFail {
  type: typeof DATA_FAIL;
}

export interface CommentsSuccess {
  type: typeof COMMENTS_SUCCESS;
  comments: CommentType[];
}

export interface TodosSuccess {
  type: typeof TODOS_SUCCESS;
  todos: TodoType[];
}

export type DataDispatchTypes =
  | DataLoading
  | DataFail
  | CommentsSuccess
  | TodosSuccess;
