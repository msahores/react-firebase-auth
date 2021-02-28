import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerT } from '../../store/reducers';
import { getComments } from '../../store/actions/data';
import { Comments } from '../../store/actions/types/data';
import Nav from '../../Layout/Nav';

const Dashboard: FC = () => {
  const dispatch = useDispatch()
  const comments: Comments = useSelector((state: RootReducerT) => state.dataState.comments)
  const commentsToShow = 5;

  useEffect(()=>{
    dispatch(getComments())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderLastComments = (amount = comments!.length) => {
    return (
      comments?.filter((_, index: number) => index > comments.length - amount - 1)
      .map(comment => (
        <div className="item" key={comment.id}>
          <p className="comment-name">{comment.name}</p>
          <p className="comment-body" key={comment.id}>{comment.body}</p>
          <p>By: <span className="comment-email">{comment.email}</span></p>
        </div>
        )
      )
    )
  }

  return (
    <div className="page styled-container mt-3">
      <Nav />
      <h1>Dashboard</h1>
      <h3>Last {commentsToShow} Comments</h3>
      {comments ? renderLastComments(commentsToShow) : <h2>Loading comments...</h2>}
    </div>
  )
}

export default Dashboard;
  