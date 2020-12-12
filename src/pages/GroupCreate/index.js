import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';

import { actions } from '../../store';

function App() {
	const increment = useSelector(state => state.GroupReducer.increment);
	const prevIncrement = useSelector(state => state.GroupReducer.prevIncrement);
	const history = useHistory();
	const dispatch = useDispatch();
	const [name, setName] = useState('');
  
  const submitForm = useCallback(() => {
		dispatch(actions.GroupAction.Create({name}));
	}, [dispatch, name]);

	useEffect(() => {
		if (increment !== prevIncrement) {
			dispatch(actions.GroupAction.Increment)
			history.push('/groups');
		}
	}, [history, prevIncrement, increment, dispatch]);

	return (
		<div>
			<h2>Create New Group</h2>
			<Form>
				<Form.Item>
					<Input placeholder="name" defaultValue={ name } onChange={ useCallback(e => setName(e.target.value), []) } />
				</Form.Item>
				<Form.Item className="button-push-right">
					<Button onClick={ submitForm }>Save</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default App;
