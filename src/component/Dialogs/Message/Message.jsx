import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={style.item_meessage}> { props.mess}</div>
    )
}
export default Message;