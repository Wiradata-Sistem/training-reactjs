import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { NavBar, PrivateRoute } from './components';
import { 
  Home, ApaKabar, 
  Login, 
  GroupList, GroupCreate, GroupDetail, GroupEdit 
} from './pages';


const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const user = useSelector(state => state.UserReducer.User);
  return (
    <Layout>
      { user.token !== '' && <Header>Header</Header> }
      
      <Layout>
      { user.token !== '' && <Sider><NavBar/></Sider> }

      <Content>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path={'/apa-kabar'} component={ApaKabar} />
          <PrivateRoute path={'/groups/update/:id'} component={GroupEdit} />
          <PrivateRoute path={'/groups/create'} component={GroupCreate} />
          <PrivateRoute path={'/groups/:id'} component={GroupDetail} />
          <PrivateRoute path={'/groups'} component={GroupList} />
          <PrivateRoute exact path='/' component={Home}/>  
        </Switch>
      </Content>
      </Layout>

      { user.token !== '' && <Footer>Footer</Footer> }

    </Layout>
  )
}
export default App;