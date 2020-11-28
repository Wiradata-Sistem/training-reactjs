import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar, PrivateRoute } from './components';
import { Home, ApaKabar, Login } from './pages';

const App = () => {
  return (
    <div>
			<NavBar/>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path={'/apa-kabar'} component={ApaKabar} />
        <PrivateRoute exact path='/' component={Home}/>  
      </Switch>
		</div>
  )
}
export default App;