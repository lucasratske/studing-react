import React, { Component } from 'react';
import Grid from '../Template/Grid';
import IconButton from '../Template/IconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from './TodoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.search();
  }

  render() {
    const { add, search, description, clear } = this.props;
    return (
      <div role="form" className="todo-form">
        <Grid cols="12 9 10">
          <input
            id="description"
            type="text"
            className="form-control"
            value={this.props.description}
            onChange={this.props.changeDescription}
            placeholder="Adicione uma tarefa"
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <IconButton style="info" icon="search" onClick={() => search()} />
          <IconButton
            style="default"
            icon="window-close"
            onClick={() => clear()}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
