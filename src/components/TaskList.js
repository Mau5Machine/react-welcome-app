import React from 'react';

/****** Task List Component Here SFC ******/
const TaskList = (props) => {
    return (
        <div className="col s12">
            <button onClick={props.deleteTask}>Delete Tasks</button>
        </div>
    )
}

export default TaskList;