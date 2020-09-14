import React from 'react';
import './Message.css';


const Message = (props) => {
    return (
        <div className={props.author}>{props.text}</div>
    )
}

export default Message;