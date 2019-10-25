import React from 'react';

import PageHeader from '../Template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default () => (
  <div>
    <PageHeader name="Tarefas" small="cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);
