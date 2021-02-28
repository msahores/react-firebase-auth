import React, { FC, MouseEvent } from 'react';
interface Props {
  message: string, 
  clearError: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void  
}

const ErrorNotice: FC<Props> = ({ message, clearError }) => (
  <div className="error-notice">
    <span>{message}</span>
    <button type="button" onClick={clearError}>X</button>
  </div>
);

export default ErrorNotice;
