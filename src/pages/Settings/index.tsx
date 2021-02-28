import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/actions/data';
import Nav from '../../Layout/Nav';
import { RootReducerT } from '../../store/reducers';

const Settings: FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootReducerT) => state.dataState);
  const { todos, loading } = data;

  useEffect(()=>{
    dispatch(getTodos());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderPendingTodos = () => {
    return (
      todos?.filter((todo) => !todo.completed)
      .map(todo => <p key={todo.id} className="item todos">{todo.title}</p>)
    )
  }

  return (
    <div className="page styled-container mt-3">
      <Nav />
      <h1>Settings</h1>
      <h3>Pending Todo's</h3>
      {loading ? <h2>Loading Todos List...</h2> : renderPendingTodos() }
    </div>
  )
}

export default Settings;
  