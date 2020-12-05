import { useEffect, useCallback, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import { actions } from '../../store';
import { Images } from '../../constant';
import { ImgBg, DivLogoContainer, DivForm } from './style';

const App = () => {
  const history = useHistory();
  const user = useSelector(state => state.UserReducer.User);
  const dispatch = useDispatch();
	const { state } = useLocation();
	const { from } = state || { from: { pathname: '/' } };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = useCallback((event) => {
    event.preventDefault();
    dispatch(actions.UserAction.Login({username, password}));
  }, [dispatch, password, username]);

  useEffect(() => {
    if (user.token !== '') {
      history.push(from); 
    }
  }, 
  [user.token, from, history]);

  const onChangeUsername = useCallback((event) => {
    setUsername(event.target.value);
   }, []);
   
   const onChangePassword = useCallback((event) => {
    setPassword(event.target.value);
   }, []);
   
  
  return (
  <Row>
    <Col span={12}>
      <ImgBg src={ Images.loginBg.default } alt='erp' />
      <DivLogoContainer>
        <img src={ Images.logo.default } alt='logo'/>
      </DivLogoContainer>
    </Col>

    <Col span={12}>
      <DivForm>
        <Form name='basic'>
          <h3>Aplikasi ERP Lion Head Corp</h3>
          <div className='input-form'>
            <label>Username</label>
            <Form.Item
              name='username'
              rules={ [{
                required: true,
                message: 'Silahkan isi username!',
              }] }
            >
              <Input value={username} onChange={onChangeUsername} className='base-input' />
            </Form.Item>
          </div>

          <div className='input-form'>
            <label>Password</label>
            <Form.Item
              name='password'
              rules={ [{
                required: true,
                message: 'Silahkan isi password!',
              },] }
                    >
              <Input.Password value={password} onChange={onChangePassword} />
            </Form.Item>
          </div>

          <div className='footer-form'>
            <Form.Item>
              <Button type='primary' htmlType='submit' onClick={ login }>Login</Button>
            </Form.Item>

            <Form.Item>
              <Link to=''>Lupa Password ?</Link>
            </Form.Item>
          </div>
        </Form>
      </DivForm>
    </Col>
  </Row>
  );
}

export default App;