import React, { Component, Fragment } from 'react';
import TaskForm from '../TaskForm/TaskForm';


class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1> Work done everyday & time spent </h1>
        <TaskForm />
      </Fragment>
    );
  }
}

export default Home;