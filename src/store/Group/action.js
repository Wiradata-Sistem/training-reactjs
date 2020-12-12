import { notification } from 'antd';
import { Api } from '../../utils';

const List = (pagination) => {
  const params = [];
	if (pagination && pagination.page && pagination.page >= 1) {
		params.push(`page=${pagination.page}`);
	}
	if (pagination && pagination.limit && pagination.limit >= 1) {
		params.push(`limit=${pagination.limit}`);
	}
	if (pagination && pagination.order && pagination.order.length >= 1) {
		params.push(`order=${pagination.order}`);
	}
	if (pagination && pagination.sort && (pagination.sort.toLowerCase() === 'asc' || pagination.sort.toLowerCase() === 'desc')) {
		params.push(`sort=${pagination.sort.toLowerCase()}`);
	}
	if (pagination && pagination.keyword && pagination.keyword.length >= 1) {
		params.push(`keyword=${pagination.keyword}`);
  }

  let url = '/groups';
  if (params.length > 0) {
    url +='?'+params.join('&');
  }
  
	return async function (dispatch, getState) {
    const token = getState().UserReducer.User.token;
		const result = await Api('GET', url, token);
		if (result.err) {
			notification.error({ message: result.response, top: 150 });
			return dispatch({type: 'ERROR'});
		} else {
			return dispatch({
				type: 'GROUP_LIST',
				payload: {
					groups: result.response.data.groups,
					pagination: result.response.data.pagination,
				},
			});
		}
	}
};

const Create = (data) => {
	return async function (dispatch, getState) {
		const token = getState().UserReducer.User.token;
		const result = await Api('POST', '/groups', token, data);

		if (result.err) {
			notification.error({ message: result.response, top: 150 });
			return dispatch({type: 'ERROR'});
		} else {
			return dispatch({
				type: 'GROUP_CREATE'
			});
		}
	}
};

const Increment = {
	type: 'GROUP_INCREMENT'
};

const Read = (id) => {
  return async function (dispatch, getState) {
    const token = getState().UserReducer.User.token;
    const result = await Api('GET', `/groups/${id}`, token);
  
    if (result.err) {
      notification.error({ message: result.response, top: 150 });
      return dispatch({type: 'ERROR'});
    } else {
      console.log('action', result.response.data);
      return dispatch({
        type: 'GROUP_READ',
        payload: result.response.data
      });
    }
  }
 };

 const Edit = (id, data) => {
  return async function (dispatch, getState) {
    const token = getState().UserReducer.User.token;
    const result = await Api('PUT', '/groups/'+id, token, data);
  
    if (result.err) {
      notification.error({ message: result.response, top: 150 });
      return dispatch({type: 'ERROR'});
    } else {
      return dispatch({
        type: 'GROUP_EDIT',
        payload: result.response.data
      });
    }
  }
 };
 
 const Delete = (id) => {
  return async function (dispatch, getState) {
    const token = getState().UserReducer.User.token;
    const result = await Api('DELETE', '/groups/'+id, token);
  
    if (result.err) {
      notification.error({ message: result.response, top: 150 });
      return dispatch({type: 'ERROR'});
    } else {
      return dispatch({
        type: 'GROUP_DELETE'
      });
    }
  }
 };
 

export { List, Create, Increment, Read, Edit, Delete };
