import React from 'react';
import IconButton from '../Template/IconButton';
import './TodoList.scss';

const TodoList = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? 'mark-as-done' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.done(todo)}
          />

          <IconButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.pending(todo)}
          />

          <IconButton
            style="danger"
            icon="trash"
            hide={!todo.done}
            onClick={() => props.remove(todo)}
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

export default TodoList;
