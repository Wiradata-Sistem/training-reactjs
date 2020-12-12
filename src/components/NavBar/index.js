import { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'antd';
import {
	LogoutOutlined,
	HomeOutlined,
	TwitterOutlined,
	GroupOutlined,
	DatabaseOutlined,
	SendOutlined,
} from '@ant-design/icons';

import { actions } from '../../store';
import { Auth } from '../../utils';

const { SubMenu } = Menu;

const App = (props) => {
	const user = useSelector(state => state.UserReducer.User);
	const history = useHistory();
	const dispatch = useDispatch();
	const [isLogout, setIsLogout] = useState(false);
	const logout = useCallback(() => {
		dispatch(actions.UserAction.Logout());
		setIsLogout(true);
	}, [dispatch]);

	useEffect(() => {
		if (isLogout) { history.push('/login');}
	}, [isLogout, history]);


	return (
		<div style={{ width: '100%', display:"flex" }}>
			<Menu
				style={{ width: 256 }}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode='inline'
			>
				{
					user.token !== '' &&
					<Menu.Item key="1" icon={<HomeOutlined />}>
						<Link to='/'>Home</Link>
					</Menu.Item>
				}

				{
					user.token !== '' && Auth.IsAuth(null, 'apa-kabar') &&
					<Menu.Item key="2" icon={<TwitterOutlined />}>
						<Link to='/apa-kabar'>Apa Kabar</Link>
					</Menu.Item>
				}

				{
					user.token !== '' && Auth.IsAuth('groups', 'groups:index') &&
					<Menu.Item key="3" icon={<GroupOutlined />}>
						<Link to='/groups'>Group</Link>
					</Menu.Item>
				}
				
				<SubMenu key="sub1" icon={<DatabaseOutlined />} title="Master Data">
					<Menu.Item key="5">User</Menu.Item>
					<Menu.Item key="6">Menu</Menu.Item>
					<Menu.Item key="7">Company</Menu.Item>
					<Menu.Item key="8">Product</Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" icon={<SendOutlined />} title="Delivery Order">
					<Menu.Item key="9">Delivery Order</Menu.Item>
					<Menu.Item key="10">Surat Jalan</Menu.Item>
					<SubMenu key="sub3" title="Mutasi">
						<Menu.Item key="11">Mutasi In</Menu.Item>
						<Menu.Item key="12">Mutasi Out</Menu.Item>
					</SubMenu>
				</SubMenu>
				{
					user.token !== '' &&
					<Menu.Item key="13" icon={<LogoutOutlined />}>
						<Link to='' onClick={logout}>Logout</Link>
					</Menu.Item>
				}

			</Menu>
		</div>
	);
};

export default App;
