import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './Tasks.scss';

class Tasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="Tasks">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
            checkUndone={this.props.checkUndone}
            editTask={this.props.editTask}
          />
        ))}
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
