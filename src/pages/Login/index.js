import { useState, useCallback } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { FakeAuth } from '../../components';

const App = () => {
	const { state } = useLocation();
	const { from } = state || { from: { pathname: '/' } };
  
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  
  const login = useCallback(() => {
		FakeAuth.authenticate(() => { setRedirectToReferrer(true); });
  }, []);
  
	if (redirectToReferrer) { 
    return <Redirect to={from} />; 
  }
  
  return (
    <div>
      <h1>Login</h1>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Login</button>
    </div>);
}

export default App;