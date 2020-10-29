import React, { Component } from 'react';
import './App.scss';
import tasks from './sources/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (task) => {
    const newTask = task;
    console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const deleteTa = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: deleteTa,
    });
  };

  checkDone = (id, value) => {
    console.log(id, value);
    const checkFinished = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = true;
      }
      return task;
    });
    this.setState({
      tasks: checkFinished,
    });
  };

  editTask = (title, desc, id) => {
    console.log(title, desc, id);
  };

  checkUndone = (id, value) => {
    console.log(id, value);
    const checkFinished = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = false;
      }
      return task;
    });
    this.setState({
      tasks: checkFinished,
    });
  };

  render() {
    return (
      <div>
        <nav>
          <span>Task List in React</span>
        </nav>
        <TaskForm addTask={this.addTask} tasks={this.state.tasks.length} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
          checkUndone={this.checkUndone}
          editTask={this.editTask}
        />
      </div>
    );
  }
}

export default App;
