import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../Template/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const URL = 'http://localhost:3003/api/todos';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };
    this.add = this.add.bind(this);
    this.changed = this.changed.bind(this);
    this.remove = this.remove.bind(this);
    this.done = this.done.bind(this);
    this.pending = this.pending.bind(this);
    this.search = this.search.bind(this);
    this.clear = this.clear.bind(this);

    this.refresh();
  }

  changed(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  add() {
    const description = this.state.description;
    axios.post(URL, { description }).then((r) => this.refresh());
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`).then((r) => {
      this.setState({ ...this.state, description, list: r.data });
    });
  }

  remove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((r) => this.refresh(this.state.description));
  }

  done(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((r) => this.refresh(this.state.description));
  }

  pending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((r) => this.refresh(this.state.description));
  }

  search() {
    this.refresh(this.state.description);
  }

  clear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="cadastro" />
        <TodoForm
          description={this.state.description}
          add={this.add}
          changed={this.changed}
          search={this.search}
          clear={this.clear}
        />
        <TodoList
          list={this.state.list}
          remove={this.remove}
          done={this.done}
          pending={this.pending}
        />
      </div>
    );
  }
}

export default Todo;
