import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Display from './Display';

class TaskTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    handleInputChange(event){
        this.setState({
            value: event.target.value
        });
    }

    addTask(){
        //Updating arrays directly is not read by react
        //We should 'clone' the array with the new element
        //using spread syntax or directly cloning it and 
        //setting to the corresponding state property
        this.setState({
            tasks: [...this.state.tasks, this.state.value]
        });
    }

    removeTask(e){
        const updatedTasks = this.state.tasks.filter((task, idx) => idx != e.target.value);
        this.setState({
            tasks: updatedTasks
        });
    }

    render(){
        return(
            <div>
                <SearchBar value={this.state.value} handleInputChange={this.handleInputChange} addTask={this.addTask}/>
                <Display tasks={this.state.tasks} removeTask={this.removeTask}/>
            </div>
        );
    }
}

export default TaskTable;