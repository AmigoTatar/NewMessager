import React from 'react';
import style from './Profile.module.css';
import avatar from '../../imgProfile/avatarProfile/avatar.jpg';
import content from '../../imgProfile/content/img1.jpg';
import MyPosts from './MyPosts/MyPosts';
import MessagesPrf from './MessagesPrf/MessagesPrf';
import {addPost} from "../../redux/state";


const Profile = (props) => {


	return (
		<div className={style.content}>
			<MessagesPrf dispatch={props.dispatch}
						 newPostText={props.profilePage.newPostText}
						 
			/>
			<MyPosts posts={props.profilePage.posts}
					 addPost={props.addPost}/>
		</div>
	)
}

export default Profile;