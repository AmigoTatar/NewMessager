import React from 'react';
import style from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <div className={ style.item_dialog + ' ' + style.active}> 
        <NavLink to={"/message/" + props.id} > {props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;