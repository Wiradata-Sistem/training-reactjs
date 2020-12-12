import { App } from '../constant';

const Api = async (method, url, token, data) => {
  method = method.toUpperCase();
  
  const options = {
    method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
  };
  
  if (method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  if (method === 'DELETE') {
    options.headers['Content-Type'] = '*';
  }
  
	try {
		let apiFetch = await fetch(App.API.URL + url, options);
	
    let statusCode = await apiFetch.status;
    
    let res;
    if (statusCode !== 204) {
      res = await apiFetch.json();
    }

		if (statusCode < 200 || statusCode > 299) {
      return { err: true, response: res.status_message };
    } 
	
		if (apiFetch.ok) {
			return { err: false, response: res};
		} else {
			return { err: true, response: 'Opsss! error call api' };
		}
	} catch (error) {
		return { err: true, response: error.message };
	}
 }
 
export default Api;