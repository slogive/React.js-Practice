import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.scss';

class Task extends Component {
  verificateStatus = (e, value, attrb) => {
    value = parseInt(e.target.id);
    if (e.target.checked) {
      this.props.checkDone(value, true);
      console.log('Done');
    } else if (!e.target.checked) {
      this.props.checkUndone(value, false);
      console.log('Undone');
    }
  };

  render() {
    const { task } = this.props;
    return (
      <div className={`Task ${task.done ? 'Complete' : 'Incomplete'}`}>
        <span className="ID">{task.title + '#' + (task.id + 1)}</span>
        <span className="Title">{task.title}</span>
        <span className="Desc">{task.desc}</span>
        <div className="Actions">
          <input
            type="checkbox"
            id={task.id}
            data-done={task.done}
            onChange={this.verificateStatus}
            checked={task.done ? true : false}
          ></input>
          <button
            onClick={this.props.editTask.bind(
              this,
              task.title,
              task.desc,
              task.id
            )}
          >
            Edit
          </button>
          <button onClick={this.props.deleteTask.bind(this, task.id)}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
