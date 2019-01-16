'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***** Main Application Module *******/
var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome(props) {
        _classCallCheck(this, Welcome);

        var _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this, props));

        _this.addTask = _this.addTask.bind(_this);
        _this.deleteTask = _this.deleteTask.bind(_this);
        _this.state = {
            name: 'Christian',
            tasks: props.tasks
        };
        return _this;
    }

    /* This method adds task */


    _createClass(Welcome, [{
        key: 'addTask',
        value: function addTask(task) {
            console.log('added task!');
        }

        /* Handle deleting the task */

    }, {
        key: 'deleteTask',
        value: function deleteTask() {
            console.log('deleted');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    name: this.props.name
                }),
                React.createElement(Clock, null),
                React.createElement(AddTask, {
                    name: this.props.name,
                    addTask: this.addTask
                }),
                React.createElement(TaskList, {
                    tasks: this.state.tasks,
                    deleteTask: this.deleteTask
                }),
                React.createElement(Footer, null)
            );
        }
    }]);

    return Welcome;
}(React.Component);

/****** Default Props for name ******/


Welcome.defaultProps = {
    name: 'Christian'

    /****** Header Component SFC Here ******/
};var Header = function Header(props) {
    return React.createElement(
        'div',
        { className: 'center-align welcome-header' },
        React.createElement(
            'h1',
            null,
            'Welcome ',
            props.name
        )
    );
};
// Render Header
ReactDOM.render(React.createElement(Header, { name: 'Christian' }), document.getElementById('head'));

/****** Clock Component class Here ******/

var Clock = function (_React$Component2) {
    _inherits(Clock, _React$Component2);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this2.state = {
            time: new Date().toLocaleString().split(', ')[1]
        };
        return _this2;
    }
    // When mounted, start interval 1 second ticker to update time


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.intervalID = setInterval(function () {
                return _this3.tick();
            }, 1000);
        }
        // Clear the timer when module is unmounted

    }, {
        key: 'componentWillUnmout',
        value: function componentWillUnmout() {
            clearInterval(this.intervalID);
        }
        // Function to re render the clock on the screen

    }, {
        key: 'tick',
        value: function tick() {
            // Set the state every second to update the time on screen
            this.setState({
                time: new Date().toLocaleString().split(', ')[1]
            });
        }
        // Render the time as state to the screen

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'App-clock center-align' },
                React.createElement(
                    'p',
                    {
                        className: 'clock-container col s12' },
                    this.state.time
                )
            );
        }
    }]);

    return Clock;
}(React.Component);
// Render Clock


ReactDOM.render(React.createElement(Clock, null), document.getElementById('clock'));

/****** Indivisual task list item Here ******/
var Task = function Task(props) {
    return React.createElement(
        'li',
        null,
        props.task,
        React.createElement(
            'button',
            null,
            'Remove'
        )
    );
};

/****** AddTask Component, form inside to enter a task ******/

var AddTask = function (_React$Component3) {
    _inherits(AddTask, _React$Component3);

    function AddTask(props) {
        _classCallCheck(this, AddTask);

        var _this4 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

        _this4.addTask = _this4.addTask.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }
    // Method to handle adding the task


    _createClass(AddTask, [{
        key: 'addTask',
        value: function addTask(e) {
            e.preventDefault();
            var task = e.target.elements.tasks.value.trim();
            if (!task) {
                this.setState({
                    error: 'Please enter a task'
                });
            }
            console.log(e.target.elements.tasks.value);
        }
        // Fire when mounted

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('mounted');
        }

        // Render the form and button

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'task-form' },
                React.createElement(
                    'div',
                    { className: 'form-header align-left' },
                    React.createElement(
                        'p',
                        null,
                        'Anything to add?'
                    ),
                    this.state.error && React.createElement(
                        'p',
                        null,
                        this.state.error
                    )
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addTask, className: 'col s12' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col s10' },
                            React.createElement(
                                'div',
                                { className: 'input-field' },
                                React.createElement('input', {
                                    type: 'text',
                                    placeholder: 'Tasks',
                                    name: 'tasks',
                                    className: 'tasks-input'
                                }),
                                React.createElement(
                                    'label',
                                    { htmlFor: 'tasks' },
                                    'Add a Task'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col s12' },
                            React.createElement(
                                'button',
                                {
                                    className: 'waves-effect waves-light btn',
                                    type: 'submit'
                                },
                                'Add Task'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddTask;
}(React.Component);
// Render AddTask


ReactDOM.render(React.createElement(AddTask, null), document.getElementById('tasks'));

/****** Task List Component Here SFC ******/
var TaskList = function TaskList(props) {
    return React.createElement(
        'div',
        { className: 'col s12' },
        React.createElement(
            'button',
            { onClick: props.deleteTask },
            'Delete Tasks'
        ),
        React.createElement(
            'ul',
            { id: 'tasksList' },
            React.createElement(
                'li',
                null,
                task
            )
        )
    );
};
// Render the Task List
ReactDOM.render(React.createElement(TaskList, null), document.getElementById('tasks-list'));

/****** Footer Component Here SFC ******/
var Footer = function Footer() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Footer Here'
        )
    );
};
// Render the Footer Component
ReactDOM.render(React.createElement(Footer, null), document.getElementById('foot'));
