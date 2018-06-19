import React from 'react';
import Task from './Task';

const Tasks = props => (
  <div>
    <h2>List of Tasks:</h2>

    {!props.tasks && <p>To start add a task</p>}

    <button onClick={props.handleDeleteAllTasks}>Delete All</button>

    <ul>
      {props.tasks.map(task => (
        <li key={task}>
          <Task taskName={task} hanleDeleteTask={props.hanleDeleteTask} />
        </li>
      ))}
    </ul>
  </div>
);

export default Tasks;
