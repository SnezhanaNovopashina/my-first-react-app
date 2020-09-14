import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';


const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.nav__content}>
                <div>
                    <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={style.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                </div>
            </div>
            <Sidebar state={props.state} />
        </nav>
    );
};

export default Navbar;