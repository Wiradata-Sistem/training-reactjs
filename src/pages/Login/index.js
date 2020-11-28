import { useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store';

// import { FakeAuth } from '../../components';

const App = () => {
  const history = useHistory();
  const user = useSelector(state => state.UserReducer.User);
  const dispatch = useDispatch();
	const { state } = useLocation();
	const { from } = state || { from: { pathname: '/' } };
  
  const login = useCallback(() => {
    dispatch(actions.UserAction.Login);
  }, [dispatch]);

  useEffect(() => {
    if (user.token !== '') {
      history.push(from); 
    }
  }, 
  [user.token, from, history]);
  
  return (
    <div>
      <h1>Login</h1>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Login</button>
    </div>);
}

export default App;