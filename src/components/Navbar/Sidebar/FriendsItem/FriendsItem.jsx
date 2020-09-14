import React from 'react';
import style from './FriendsItem.module.css';
import { NavLink } from 'react-router-dom';


const FriendsItem = (props) => {
    return (
        <div className={style.item}>
            <NavLink to='#s'>
                <div className={style.avatar}>
                    <img src={props.avatar} alt='avatar' />
                </div>
                <div>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default FriendsItem;