import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`).then(r =>
      dispatch({
        type: 'TODO_SEARCHED',
        payload: r.data
      })
    );
  };
};

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(r => dispatch(clear()))
      .then(r => dispatch(search()));
  };
};

export const markAsDone = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(r =>
        dispatch({
          type: 'TODO_MARKED_AS_DONE',
          payload: r.data
        })
      )
      .then(r => dispatch(search()));
  };
};

export const markAsPending = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(r => dispatch(search()));
  };
};

export const remove = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`).then(r => dispatch(search()));
  };
};

export const clear = () => {
  return {
    type: 'TODO_CLEARED'
  };
};
