import React from "react";
import Task from "./Task";

export default class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h2>List of Tasks:</h2>
        <ul>
          <li>
            <Task />
          </li>
        </ul>
      </div>
    );
  }
}
