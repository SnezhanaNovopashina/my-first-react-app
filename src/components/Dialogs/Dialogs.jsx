import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogsItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} /> );
    let messagesElements = state.messages.map( message => <Message text={message.text} author={message.author} /> );
    let newMessageText = state.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (evt) => {
        let text = evt.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                { dialogsElements }
            </div>
            <div className={style.chat}>
                <div className={style.message_area}>
                    { messagesElements }
                </div>
                <form className={style.form}>
                    <textarea className={style.textarea} onChange={ onMessageChange } value={newMessageText} 
                    id='message' name='message' cols='80' rows='2' maxLength='1000' placeholder='New message' />
                    <button className={style.button} onClick={ onSendMessage } type='button'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;