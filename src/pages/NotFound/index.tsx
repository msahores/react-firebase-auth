import React, { FC } from 'react';
import Nav from '../../Layout/Nav';

const NotFound: FC = () => {
  return (
    <div className="page styled-container mt-3">
      <Nav />
      <h1>Page Not Found</h1>
    </div>
  )
}

export default NotFound;