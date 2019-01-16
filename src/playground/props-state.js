const app = document.getElementById('app');

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.state = {
            name: 'Christian',
            tasks: []
        }
    }

    componentDidMount() {
        console.log('hey im here!');
    }

    addTask(task) {
        if (!task) {
            return 'Nothing Here';
        } else if (this.state.tasks.indexOf(task) > -1) {
            return 'This already exists';
        }
        // else
        this.setState((prevState) => (({ tasks: prevState.tasks.concat(task) })));
        console.log(this.state.tasks);
    }

    render() {
        return (
            <div>
                <App
                    addTask={this.addTask}
                />
                <AddApp
                    addTask={this.addTask}
                />
            </div>
        )
    }
}

const App = (props) => {
    return (
        <div>
            <h1>Testing</h1>
        </div>
    )
}

class AddApp extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.state = {
            message: undefined
        }
    }
    addTask(e) {
        e.preventDefault();
        const task = e.target.elements.option.value.trim();
        const message = this.props.addTask(task);
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input type="text" name="task" />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}
ReactDOM.render(<Test />, app);