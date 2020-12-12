import { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
 
import { actions } from '../../store';
 
function App() {
  const increment = useSelector(state => state.GroupReducer.increment);
  const prevIncrement = useSelector(state => state.GroupReducer.prevIncrement);
  const group = useSelector(state => state.GroupReducer.Group);
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(actions.GroupAction.Read(id))
  }, [dispatch, id]);
 
  const submitForm = useCallback(() => {
    dispatch(actions.GroupAction.Edit(id, {name}));
  }, [dispatch, name, id]);
 
  useEffect(() => {
    if (increment !== prevIncrement) {
      dispatch(actions.GroupAction.Increment)
      history.push('/groups');
    }
  }, [history, prevIncrement, increment, dispatch]);

  useEffect(() => {
    setName(group.name);
  }, [group])
 
  return (
   <div>
     <h2>Update Group</h2>
     <Form>
       <Form.Item>
         <Input placeholder="name" value={ name } onChange={ useCallback(e => setName(e.target.value), []) } />
       </Form.Item>
       <Form.Item className="button-push-right">
         <Button onClick={ submitForm }>Update</Button>
       </Form.Item>
     </Form>
   </div>
 );
}
export default App;