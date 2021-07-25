import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/MessagesPrfReducer";

const Dialogs = (props) => {

    let state = props.store.getState().messagePage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = state.messageData.map(messages => <Message mess={messages.messag} id={messages.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e)=>{
      let body =  e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={style.wrapperDi}>
            <div className={style.chats}> Чаты
                  { dialogsElements}
                  
            </div>

            <div className={style.messages}> Сообщения
                <div>{messagesElement}  </div>
            </div>


                        <div className={style.message_area}>
                   <div> <textarea value={newMessageBody} onChange={onNewMessageChange} > </textarea></div>
               <div> <button onClick={onSendMessageClick}>Send</button></div>
            </div>

        </div>

    )
}


export default Dialogs;
