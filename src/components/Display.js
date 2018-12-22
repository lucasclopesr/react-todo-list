import React, { Component } from 'react';

function Display(props){
    const tasks = props.tasks;
    const taskList = tasks.map((task, idx) => 
        <div key={idx}>
            <li className="col-4">
                {task} 
                <button  value={idx} onClick={props.removeTask}>x</button> 
            </li>
        </div>
    );

    return (
        <ul>
            {taskList}
        </ul>            
    );
}

export default Display;