import React from 'react';
import style from './Posts.module.css';
import avatar from '../../../../imgProfile/avatarProfile/avatar.jpg';


const Posts = (props) => {
    return (


        <div className={style.posts}>

            <div className={style.post}>  <img src={avatar} alt="" />
                {props.message}
            </div>
            <div><span>Like</span></div>{props.likesCount}
        </div>



    )
}

export default Posts;