const initialState = {
  Groups: [],
  Group: {id:0, name:''},
  Pagination: {
		"page": 1,
		"limit": 20,
		"order": "id",
		"sort": "asc",
		"count": 0,
		"keyword": ''
  },
  increment: 0,
	prevIncrement: 0,
};

const GroupReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GROUP_LIST':
			return {
				...state,
        Groups: action.payload.groups,
        Pagination: action.payload.pagination
      }
    case 'GROUP_CREATE':
      return {
        ...state,
        increment: (state.increment + 1)
      }
    case 'GROUP_READ':
      return {
        ...state,
        Group: action.payload
      }
    case 'GROUP_EDIT':
      return {
        ...state,
        Group: action.payload,
        increment: (state.increment + 1)
      }   
    case 'GROUP_DELETE':
      return {
        ...state,
        increment: (state.increment + 1)
      }      
    case 'LOGOUT':
      return initialState;
    case 'GROUP_INCREMENT':
      return {
        ...state,
        prevIncrement: state.increment
      }
		default:
			return state;
	}
};

export default GroupReducer;