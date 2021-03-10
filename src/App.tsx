import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ConditionalRoute from './components/ConditionalRoute';
import Dashboard from './pages/Dashboard';
import Loader from './pages/Loader';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Settings from './pages/Settings';
import { handleAuthChange } from './store/actions/auth';
import { RootReducerT } from './store/reducers';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootReducerT) => state.authState);
  const {user, loading} = auth;

  useEffect(() => {
    dispatch(handleAuthChange())
  }, [dispatch])

  return (
  <>
    {loading ? <Loader /> : (
    <Router>
      <div className={`container ${user ? '' : 'centered'}`}>
        <Switch>
          <ConditionalRoute 
            exact
            component={Dashboard}  
            condition={!!user} 
            path="/" 
          /> 
          <ConditionalRoute 
            exact
            component={Settings}  
            condition={!!user} 
            path="/settings" 
          /> 
          <ConditionalRoute 
            path="/login"
            condition={!user} 
            component={Login} 
            redirectTo="/"
          />
          <ConditionalRoute 
            path="/register"
            condition={!user} 
            component={Register} 
            redirectTo="/"
          />
          <ConditionalRoute 
            condition={!!user}
            component={NotFound} 
          />
        </Switch>
      </div>
    </Router>
  )}
  </>
)}

export default App;
