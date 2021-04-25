import React from 'react';
import style from './Navbar.module.css';
import home from '../../imgProfile/navbar/home.png';
import news from '../../imgProfile/navbar/news.png';
import comunity from '../../imgProfile/navbar/comunity.png';
import profile from '../../imgProfile/navbar/profile.png';
import friends from '../../imgProfile/navbar/friends.png';
import messangers from '../../imgProfile/navbar/messangers.png';
import music from '../../imgProfile/navbar/music.png';
import Photos from '../../imgProfile/navbar/Photos.png';
import settings from '../../imgProfile/navbar/settings.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={style.header__nav}>
			<ul className={style.header_menu}>
				<li><NavLink to="home" className={style.menu__item} activeClassName={style.active} ><img src={home} alt="" /> Главная</NavLink></li>
				<li><NavLink to="news" className={style.menu__item} activeClassName={style.active} ><img src={news} alt="" /> Новости</NavLink></li>
				<li><NavLink to="comunity" className={style.menu__item}activeClassName={style.active}  ><img src={comunity} alt="" /> Сообщество</NavLink></li>
				<li><NavLink to="profile" className={style.menu__item} activeClassName={style.active} ><img src={profile} alt="" /> Профиль</NavLink></li>
				<li><NavLink to="ftiends" className={style.menu__item} activeClassName={style.active} ><img src={friends} alt="" /> Друзья </NavLink></li>
				<li><NavLink to="message" className={style.menu__item}  activeClassName={style.active}><img src={messangers} alt="" /> Сообщения</NavLink></li>
				<li><NavLink to="music" className={style.menu__item} activeClassName={style.active} ><img src={music} alt="" /> Музыка</NavLink></li>
				<li><NavLink to="gallerey" className={style.menu__item} activeClassName={style.active} ><img src={Photos} alt="" /> Галерея</NavLink></li>
				<li><NavLink to="settings" className={style.menu__item}activeClassName={style.active} > <img src={settings} alt="" /> Настройки</NavLink></li>
			</ul>
		</nav>

	)
};
export default Navbar;