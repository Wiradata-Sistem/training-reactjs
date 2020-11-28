import { useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store';
import StyleNav from './style.js';

const App = (props) => {
	const history = useHistory();
	const user = useSelector(state => state.UserReducer.User);
	const dispatch = useDispatch();
	const handleLogout = useCallback(() => {
		console.log('in logout');
		dispatch(actions.UserAction.Logout());
	}, [dispatch]);

	useEffect(() => {
		if (user.token === '') {
			history.push('/login');
		}
 	}, [user.token, history]);

	return (
		<StyleNav className='navbar navbar-light'>
			<ul className='nav navbar-nav'>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/apa-kabar'>Apa Kabar</Link></li>
				<li><Link to='#' onClick={handleLogout}>Logout</Link></li>
			</ul>
		 </StyleNav>
	);
};

export default App;
