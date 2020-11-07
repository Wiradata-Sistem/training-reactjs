import { Route, Redirect, useLocation } from 'react-router-dom';
import { FakeAuth } from '../../components';

const App = ({
  component: Component,
  ...rest
}) => {
  const location = useLocation();
  console.log(FakeAuth);
	return (
		<Route {...rest}>
    { 
      FakeAuth.isAuthenticated === true ? 
      <Component/> 
      : 
      <Redirect to={{ pathname: '/login', state: { from: location } }}/> }
		</Route>
	);
};
export default App;
