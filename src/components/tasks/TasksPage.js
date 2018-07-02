import React from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';

export default class CRMPage extends React.Component {
  state = {
    tasks: []
  };

  componentWillMount() {
    // get tasks from localStorage
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      if (tasks) {
        this.setState(() => ({
          tasks: JSON.parse(localStorage.getItem('tasks'))
        }));
      }
    } catch (e) {
      console.log('Error');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // update localStorage
    if (prevState.tasks.length !== this.state.tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  handleAddTask = task => {
    if (!task) {
      return 'Enter valid value to add item';
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      tasks: prevState.tasks.concat(task)
    }));
  };

  handleDeleteAllTasks = () => {
    this.setState(() => ({ tasks: [] }));
  };

  hanleDeleteTask = taskToDelete => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task !== taskToDelete)
    }));
  };

  render() {
    return (
      <div>
        <h1>Customer-Relationship-Management</h1>
        <AddTask handleAddTask={this.handleAddTask} />
        <Tasks
          tasks={this.state.tasks}
          handleDeleteAllTasks={this.handleDeleteAllTasks}
          hanleDeleteTask={this.hanleDeleteTask}
        />
      </div>
    );
  }
}
