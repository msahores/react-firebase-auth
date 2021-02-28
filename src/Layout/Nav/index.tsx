import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/auth';
import { RootReducerT } from '../../store/reducers';

const Nav: FC = () => {
  const user = useSelector((state: RootReducerT) => state.authState.user);
  const dispatch = useDispatch()

  return (
      <div className="nav">
        <p>Hello <b>{user?.displayName}</b></p>
        <Link to='/'>Dashboard</Link>
        <Link to='/settings'>Settings</Link>
        <div  
          onClick={() => dispatch(signOut())} 
          className="sign-out btn"
        >
          Sign Out
        </div>
    </div>
  )
}

export default Nav;
  
