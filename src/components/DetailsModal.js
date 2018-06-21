import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const DetailsModal = props => (
  <Modal isOpen={props.isOpen} contentLabel="Tasks Details" onRequestClose={props.closeTaskDetailsModal}>
    <h3>Tasks Details</h3>
    <p>Details: {props.taskName}</p>
    <button onClick={props.closeTaskDetailsModal}>Close</button>
  </Modal>
);

export default DetailsModal;
