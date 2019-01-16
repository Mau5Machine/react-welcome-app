'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Practice = function (_React$Component) {
    _inherits(Practice, _React$Component);

    function Practice(props) {
        _classCallCheck(this, Practice);

        var _this = _possibleConstructorReturn(this, (Practice.__proto__ || Object.getPrototypeOf(Practice)).call(this, props));

        _this.doSomething = _this.doSomething.bind(_this);
        _this.addList = _this.addList.bind(_this);
        _this.state = {
            name: 'Jack',
            tasks: []
        };
        return _this;
    }

    _createClass(Practice, [{
        key: 'addList',
        value: function addList(e) {
            e.preventDefault();
            var input = e.target.elements.add.value;
            this.setState({
                tasks: this.state.tasks.concat(input)
            });
            console.log(this.state.tasks);
            e.target.elements.add.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    name: 'Christian',
                    friend: this.state.name,
                    addList: this.addList
                }),
                React.createElement(Tasks, {
                    tasks: this.state.tasks
                }),
                React.createElement(Content, {
                    doSomething: this.doSomething
                })
            );
        }
    }, {
        key: 'doSomething',
        value: function doSomething() {
            this.setState(function () {
                return { name: 'John Smith' };
            });
            console.log('something');
        }
    }]);

    return Practice;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello ',
            props.name,
            ' Are you ',
            props.friend
        ),
        React.createElement(
            'form',
            { onSubmit: props.addList },
            React.createElement('input', { type: 'text', name: 'add' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Submit'
            )
        )
    );
};

var Tasks = function Tasks(props) {
    return React.createElement(
        'div',
        null,
        props.tasks.map(function (task) {
            React.createElement(Task, {
                key: task,
                taskText: task
            });
        })
    );
};

var Task = function Task(props) {
    return React.createElement(
        'div',
        null,
        'Task: ',
        props.taskText
    );
};
var Content = function Content(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Parctice!'
        ),
        React.createElement(
            'button',
            { onClick: props.doSomething },
            'Click Me'
        )
    );
};
ReactDOM.render(React.createElement(Practice, null), document.getElementById('head'));
