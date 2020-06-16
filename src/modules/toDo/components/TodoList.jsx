import React, { memo/*, useEffect, useState, useMemo*/ } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../todo.scss';
const TodoList = (props) => {
  const {
    todoList
  } = props;

  // const [dataGrid, setDataGrid] = useState( [] );
  // useEffect( () => {
  //   //setDataGrid( props.todoList );
  //   console.log('useEffect');
  // }, [props.todoList]);

  const handleChange = ( index ) => {
    props.onDelete( index) ;
  }

  const dataGrid = todoList.map(  (data, index) => {
    return (
        <Row key={ 'jerry' + { index }}>
          <Col sm={12}>
            <ul className="list-group">
              <li className="list-group-item" /*style={{ textAlign: 'left' }}*/> {data}
                <Button variant="danger" /*style={{ float: 'right' }}*/ onClick={ () => handleChange(index) }>Complete</Button>
              </li>
            </ul>
          </Col>
        </Row>
    )
  });

  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}><div style={{ textAlign: 'left' }}><h5>Todo List</h5></div></Col>
          <Col sm={4}><span style={{ float: 'right' }}>There is {dataGrid.length} todo.</span></Col>
        </Row>
        { dataGrid }
      </Container>
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onDelete: PropTypes.func,
};

export default memo(TodoList);
