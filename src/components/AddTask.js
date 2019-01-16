import React from 'react';

/****** AddTask Component, form inside to enter a task ******/
export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.state = {
            error: undefined
        }
    }
    // Method to handle adding the task
    addTask(e) {
        e.preventDefault();
        const task = e.target.elements.tasks.value.trim();
        if (!task) {
            this.setState({
                error: 'Please enter a task'
            })
        }
        console.log(e.target.elements.tasks.value);
    }
    // Fire when mounted
    componentDidMount() {
        console.log('mounted');
    }

    // Render the form and button
    render() {
        return (
            <div className="task-form">
                <div className="form-header align-left">
                    <p>Anything to add?</p>
                    {this.state.error && <p>{this.state.error}</p>}
                </div>

                <form onSubmit={this.addTask} className="col s12">

                    <div className="row">
                        <div className="col s10">
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="Tasks"
                                    name="tasks"
                                    className="tasks-input"
                                />
                                <label htmlFor="tasks">Add a Task</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button
                                className="waves-effect waves-light btn"
                                type="submit"
                            >
                                Add Task
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
