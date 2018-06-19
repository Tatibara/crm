import React from 'react';

const Task = props => (
  <div>
    Task: {props.taskName}
    <button
      onClick={e => {
        e.preventDefault();
        props.hanleDeleteTask(props.taskName);
      }}
    >
      Delete Task
    </button>
  </div>
);

export default Task;
