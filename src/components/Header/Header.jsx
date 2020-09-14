import React from 'react';
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png' alt='Logo' />
        </header>
    );
};

export default Header;