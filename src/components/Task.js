import React from 'react';

const Task = (props) => {
    return (
        <div>
        Task: {props.taskName}
        <a href="#" onClick={(e)=>{
            e.preventDefault;
            props.hanleDeleteTask(props.taskName);
        }}>Delete Task</a>
        </div>
    );
};

export default Task;