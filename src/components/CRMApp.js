import React from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

export default class CRMApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Customer-Relationship-Management</h1>
        <AddTask />
        <Tasks />
      </div>
    );
  }
}
