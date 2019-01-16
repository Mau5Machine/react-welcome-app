import React from 'react';

/****** Header Component SFC Here ******/
const Header = (props) => {
    return (
        <div className="center-align welcome-header">
            <h1>Welcome {props.name}</h1>
        </div>
    )
}

export default Header;