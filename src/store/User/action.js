const Login = {
	type: 'LOGIN',
	payload: {
		'token': 'kjfndsjcndcjdncdc-kcdfdf',
		'name': 'Budi'
	}
};

const Logout = () => {
	return ({
		type: 'LOGOUT'
	});
};

export { Login, Logout };
