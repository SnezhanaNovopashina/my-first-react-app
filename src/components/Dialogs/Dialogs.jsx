import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} /> );
    let messagesElements = props.state.messages.map( message => <Message text={message.text} author={message.author} /> );

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                { dialogsElements }
            </div>
            <div className={style.chat}>
                { messagesElements }
                <form className={style.form}>
                    <textarea className={style.textarea} ref={newMessageElement} onChange={ onMessageChange } value={props.state.newMessageText} id='message' name='message' cols='80' rows='2' maxLength='1000' placeholder='New message' />
                    <button className={style.button} onClick={ sendMessage } type='button'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;