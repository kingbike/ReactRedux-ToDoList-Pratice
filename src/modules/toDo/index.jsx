import React, { memo, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onAdd, onDelete } from './actionCreator';
import TodoList from './components/TodoList' ; 
import AddToDoText from './components/AddToDoText' ; 

const mapStateToProps = (state) => ({
  toDo: state.toDo,
});

const mapDispatchToProps = {
  onAdd,
  onDelete
};

class View extends PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { onAdd, onDelete, toDo } = this.props;
    console.log( 'toDo', toDo );
    console.log( 'toDo', toDo.dataList );
    return (
        <div>
            <div style={{ marginTop: '15px' }} >
            <AddToDoText onAdd = { onAdd } /> 
        </div>
        <div>
            <TodoList 
              todoList={ [...toDo.dataList] }   //這邊直接使用 toDo.dataList 是不行的 = =
              onDelete = { onDelete } 
              /> 
        </div>
      </div>
    );
  }
}

View.propTypes = {
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    toDo: PropTypes.object 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(View));
