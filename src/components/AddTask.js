import React from "react";

export default class AddTasks extends React.Component {
  // transform class properties plugin (state out of constructor)
  state = {
    error: undefined
  };

  // transform class properties plugin (convert event handlers to class properties (arrow functions) cto prevent binding of this in constructor)
  handleAddTask = e => {
    e.preventDefault();

    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.task.value = "";
    }
  };

  // still leave ES6 syntax for methods like render and life sycle methods like componentDidMount
  render() {
    return <h2>Add Task</h2>;
  }
}
