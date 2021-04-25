import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = props.state.messageData.map(messages => <Message mess={messages.messag} id={messages.id} />);

    let sendMess = () => {
        let text =newMessage.current.value;
        alert(text);
    }
    let newMessage = React.createRef();
    return (
        <div className={style.wrapperDi}>
            <div className={style.chats}> Чаты
                  { dialogsElements}
                  
            </div>

            <div className={style.messages}> Сообщения
                { messagesElement}         
                 
            </div>
            <div className={style.message_area}>
                <input type="text" ref={newMessage}/>
                <button onClick={sendMess}>Send</button>
            </div>

        </div>

    )
}


export default Dialogs;
