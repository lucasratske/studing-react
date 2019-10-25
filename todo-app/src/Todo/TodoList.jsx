import React from 'react';
import IconButton from '../Template/IconButton';
import './TodoList.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, remove } from './TodoActions';

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    const { markAsDone, markAsPending, remove } = props;
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'mark-as-done' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => markAsDone(todo)}
          />

          <IconButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => markAsPending(todo)}
          />

          <IconButton
            style="danger"
            icon="trash"
            hide={!todo.done}
            onClick={() => remove(todo)}
          />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="actions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
