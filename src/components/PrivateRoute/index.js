import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = ({
  component: Component,
  ...rest
}) => {
  const user = useSelector(state => state.UserReducer.User);
  const location = useLocation();
  return (
		<Route {...rest}>
    { 
      user.token !== '' ? 
      <Component/> 
      : 
      <Redirect to={{ pathname: '/login', state: { from: location } }}/> }
		</Route>
	);
};
export default App;
