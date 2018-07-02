import React from 'react';
import DetailsModal from './DetailsModal';

export default class Task extends React.Component {
  state = {
    isModalOpen: false
  };

  openTaskDetailsModal = () => {
    this.setState(() => ({ isModalOpen: true }));
  };

  closeTaskDetailsModal = () => {
    this.setState(() => ({
      isModalOpen: false
    }));
  };

  render() {
    return (
      <div>
        Task: {this.props.taskName}
        <button
          onClick={e => {
            e.preventDefault();
            this.props.hanleDeleteTask(this.props.taskName);
          }}
        >
          Delete Task
        </button>
        <button onClick={this.openTaskDetailsModal}>Details</button>
        <DetailsModal
          isOpen={this.state.isModalOpen}
          closeTaskDetailsModal={this.closeTaskDetailsModal}
          taskName={this.props.taskName}
        />
      </div>
    );
  }
}
