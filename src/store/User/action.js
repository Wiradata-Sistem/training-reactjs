import { notification } from 'antd';
import { Api } from '../../utils';

const Login = (data) => {
	return async function (dispatch, getState) {
		const result = await Api('POST', '/login', null, data);
	
		if (result.err) {
			notification.error({ message: result.response, top: 150 });
	 		return dispatch({type: 'ERROR'});
		} else {
			return dispatch({
				type: 'LOGIN',
				payload: {
						token: result.response.data.token,
						name: 'Jacky Hutagalung',
						access: [ 'apa-kabar', 'groups']
				},
			});
		}
	}
 };

const Logout = () => {
	return ({
		type: 'LOGOUT'
	});
};

export { Login, Logout };


