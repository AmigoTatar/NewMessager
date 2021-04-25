import React from 'react';
import style from './Messages.module.css';
import avatar from '../../../imgProfile/avatarProfile/avatar.jpg';
import content from '../../../imgProfile/content/img1.jpg';

const MessagesPrf = (props) => {


	let addPost = () => {
		props.addPost();
		/*props.updateNewPostText(' ');*/
	}
	let newPostElement = React.createRef();

	let onPostChange = ()=>{
	let text = newPostElement.current.value;
	props.updateNewPostText(text);
	}

	return (
		<div className={style.content}>
			<div>Профиль</div>
			<div className={style.picture}>
				<img src={content} alt="" />
			</div>

			<div className={style.messages}>

				<div className={style.ava_desc}>
					<img src={avatar} alt="" /> <p>Напишите что нибудь</p>
				</div>

				<div className={style.wrapper_inp}>
					<textarea onChange={onPostChange}  ref={newPostElement} value={props.newPostText}/>
					<button onClick={addPost}>Отправить</button>
				</div>
			</div>

		</div>

	)
}

export default MessagesPrf;