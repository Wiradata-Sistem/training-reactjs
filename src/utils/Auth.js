import { useSelector } from 'react-redux';
const IsAuth = (parentModule, module) => {
  let isAuth = false;
	const user = useSelector(state => state.UserReducer.User);
	if (user && user.access.length > 0) {
		isAuth = user.access.includes('controllers');
		if (!isAuth && parentModule) {
			isAuth = user.access.includes(parentModule);
		}
		if (!isAuth) {
			isAuth = user.access.includes(module);
		}
  }
  return isAuth;
};

export { IsAuth };
