import React from 'react';
import Grid from '../Template/Grid';
import IconButton from '../Template/IconButton';

const TodoForm = (props) => {
  return (
    <div role="form" className="todo-form">
      <Grid cols="12 9 10">
        <input
          id="description"
          type="text"
          className="form-control"
          value={props.description}
          onChange={props.changed}
          placeholder="Adicione uma tarefa"
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={props.add} />
        <IconButton style="info" icon="search" onClick={props.search} />
        <IconButton style="default" icon="window-close" onClick={props.clear} />
      </Grid>
    </div>
  );
};

export default TodoForm;
