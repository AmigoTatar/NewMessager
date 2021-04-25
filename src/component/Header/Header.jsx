import React from 'react';
import style from './Header.module.css';
import logo from '../../imgProfile/logo/logo2.png';
import searchh from '../../imgProfile/search/search2.png';


const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} />
      <div className={style.siteName}>React-Messanger</div>
      <div className={style.scratch}>
        <input className={style.area} type="area" type="search" placeholder="Поиск" type="" />
        <button className={style.scr}><img src={searchh} alt="" /></button>
      </div>
      <div className={style.logs}>
        <button className={style.login}>Войти</button>
        <button className={style.reg}>Регистрация</button>
      </div>
    </div>
  )
}
export default Header;