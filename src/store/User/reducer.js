const initialState = {User: {token: '', name: ''}};
const UserReducer = (state = initialState, action) => {
	switch (action.type) {
    case 'LOGIN':
		  return {
        ...state, 
        User: { 
          token: action.payload.token, 
          name: action.payload.name 
        }
      };
    case 'LOGOUT':
      return initialState;
		default:
		  return state;
	}
};

export default UserReducer;
