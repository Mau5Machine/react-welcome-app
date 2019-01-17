import React from 'react';

const Reminder = (props) => {
    const listItems = props.reminders.map((reminder) =>
        <li
            key={reminder}
            className="collection-item avatar"
        >
            <i className="material-icons circle green">insert_chart</i>
            <span className="title">{reminder}</span>
        </li>
    );
    return (
        <div className="row">
            <div className="col s12 m6 offset-m3 white">
                <h1 className="center-align">Reminders</h1>
                <ul className="reminderList collection">
                    {listItems}
                </ul>
            </div>
        </div>
    )
}

export default Reminder;