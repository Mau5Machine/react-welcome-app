import React from 'react';
// import AddTask from './AddTask';
import Clock from './Clock';
// import TaskList from './TaskList';
import Header from './Header';
import Reminder from './Reminder';
import Footer from './Footer';


/***** Main Application Module *******/
export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.state = {
            name: 'Christian',
            tasks: props.tasks,
            reminders: ['Respond to Summons', 'Complete This App', 'Setup Dev Server on Pi'],
            message: undefined
        }
    }

    /* This method adds task */
    addTask(task) {
        console.log('added task!');
    }

    /* Handle deleting the task */
    deleteTask() {
        console.log('deleted');
    }

    render() {
        return (
            <div>
                {/* Header Component */}
                <Header
                    name={this.props.name}
                />
                {/* Clock Component */}
                <Clock />
                {/* Important Reminder Component */}
                <Reminder
                    reminders={this.state.reminders}
                    message={this.state.message}
                />
                {/* Add Tasks Component */}
                {/* <AddTask
                    name={this.props.name}
                    addTask={this.addTask}
                /> */}
                {/* Display Task Component */}
                {/* <TaskList
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                /> */}
                {/* Footer Component */}
                <Footer />
            </div>
        )
    }
}

/****** Default Props for name ******/
Welcome.defaultProps = {
    name: 'Christian'
}