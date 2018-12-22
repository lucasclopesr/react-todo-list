import React, { Component } from 'react';
import logo from './logo.svg';
import './Todo.css';
import './bootstrap.min.css';
import Header from './components/Header'
import TaskTable from './components/TaskTable'

class Todo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <TaskTable/>
      </div>
    );
  }
}

export default Todo;
