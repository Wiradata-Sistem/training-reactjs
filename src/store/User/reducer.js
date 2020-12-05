const initialState = {User: {token: '', name: '', access: []}};
const UserReducer = (state = initialState, action) => {
	switch (action.type) {
    case 'LOGIN':
		  return {
        ...state, 
        User: { 
          token: action.payload.token, 
          name: action.payload.name,
          access:action.payload.access 
        }
      };
    case 'LOGOUT':
      return initialState;
		default:
		  return state;
	}
};

export default UserReducer;
