import React, { Component } from 'react';
import './TaskForm.scss';

export default class TaskForm extends Component {
  state = {
    title: '',
    desc: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addTask } = this.props;
    const { tasks } = this.props;

    addTask({
      title: this.state.title,
      desc: this.state.desc,
      id: tasks,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <span>Task List in React</span>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Write a task"
            onChange={this.onChange}
            value={this.state.title}
          ></input>
          <textarea
            name="desc"
            placeholder="Write a description"
            onChange={this.onChange}
            value={this.state.desc}
          ></textarea>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
