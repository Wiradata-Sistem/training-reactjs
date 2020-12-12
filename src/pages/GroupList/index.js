import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Form, Input, Button, Divider, Popconfirm } from 'antd';
import { Link, useHistory } from 'react-router-dom';

import { actions } from '../../store';
import { Auth } from '../../utils';

function App(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const groups = useSelector(state => state.GroupReducer.Groups);
  const groupsPagination = useSelector(state => state.GroupReducer.Pagination);
  const increment = useSelector(state => state.GroupReducer.increment);
  const prevIncrement = useSelector(state => state.GroupReducer.prevIncrement);

  const [dataSource, setDataSource] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    if (increment !== prevIncrement) {
      dispatch(actions.GroupAction.List(groupsPagination));
      dispatch(actions.GroupAction.Increment)
      history.push('/groups');
    }
  }, [history, prevIncrement, increment, dispatch, groupsPagination]);
 
  useEffect(() => {
    const tempData = [];
    groups.forEach(element => {
      element.key = element.id;
      tempData.push(element);
    });
    setDataSource(tempData);
  }, [groups]);

  useEffect(() => {
    dispatch(actions.GroupAction.List());
  }, [dispatch]);

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			sorter: true,
			render: (text, record) => (<div>{text}</div>)
		},
		{
			title: "Nama",
			dataIndex: "name",
			key: "name",
			sorter: true,
			render: (text, record) => (<div>{text}</div>)
		},
		{
			title: "",
			key: "action",
			render: (text, record) => {
				return (
					<div>
						{ButtonDetail(record.id)}
            <Divider type='vertical'/>
            {ButtonEdit(record.id)}
            <Divider type='vertical'/>
            {ButtonDelete(record.id)}
					</div>
				);
			},
		},
	];
  
  const filterData = useCallback(() => {
    groupsPagination.keyword = keyword;
		dispatch(actions.GroupAction.List(groupsPagination));
  }, [groupsPagination, dispatch, keyword]);

  useEffect(() => {
		const p = {};
		p.pageSize = groupsPagination.limit;
		p.current = groupsPagination.page;
		p.total = groupsPagination.count;
		setPagination(p);
	}, [groupsPagination]);

  const handleTableChange = (pagination, filters, sorter) => {
		groupsPagination.page = pagination.current;
		if (filters && (filters.keyword || filters.keyword === "")) {
			groupsPagination.keyword = filters.keyword;
		}
		if (sorter) {
			groupsPagination.order = sorter.field;
			groupsPagination.sort = sorter.order === "ascend" ? "asc" : "desc";
		}
		dispatch(actions.GroupAction.List(groupsPagination));
  };

  const ButtonCreate = () => {
    if (Auth.IsAuth('groups', 'groups:create')) {
      return (<Link to='/groups/create'>Create New Group</Link>);
    }
  };

  const ButtonDetail = (id) => {
    if (Auth.IsAuth('groups', 'groups:view')) {
      return (
        <Link to={`/groups/${id}`}>View</Link>
      );
    }
  };
 
  const ButtonEdit = (id) => {
    if (Auth.IsAuth('groups', 'groups:update')) {
      return (
        <Link to={`/groups/update/${id}`}>Edit</Link>
      );
    }
  };

  const ButtonDelete = (id) => {
    if (Auth.IsAuth('groups', 'groups:delete')) {
      return (
        <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={() => dispatch(actions.GroupAction.Delete(id))}
        okText="Yes"
        cancelText="No"
      >
        <Link to='#'>Delete</Link>
      </Popconfirm>
        
      );
    }
  };
 

	return (
		<div>
			<h2>Groups</h2>

     {ButtonCreate()}

      <Form layout="inline" className="search-filter-form">
        <Form.Item>
          <Input className="keywords-input" placeholder="kata kunci" defaultValue={ keyword } onChange={ useCallback(e => setKeyword(e.target.value), []) } />
        </Form.Item>
        <Form.Item className="button-push-right">
          <Button onClick={ filterData }>Filter</Button>
        </Form.Item>
      </Form>

			<Table
				columns={ columns }
        dataSource={ dataSource }
        pagination={ pagination }
				onChange={ handleTableChange }
			/>
		</div>
	);
}
export default App;
