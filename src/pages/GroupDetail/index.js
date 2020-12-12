import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'antd';
import { Link, useParams } from 'react-router-dom';
 
import { actions } from '../../store';
 
function App() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const group = useSelector(state => state.GroupReducer.Group);
  
  useEffect(() => {
    dispatch(actions.GroupAction.Read(id))
  }, [dispatch, id]);

 return (
   <div>
     <h2>Group Detail</h2>
     <Row>
       <Col span={4}><label>ID</label></Col>
       <Col span={20}>: {group.id}</Col>
     </Row>
     <Row>
       <Col span={4}><label>Name</label></Col>
       <Col span={20}>: {group.name}</Col>
     </Row>
 
     <Button><Link to="/groups">Back to list of groups</Link></Button>
   </div>
 );
}
export default App;