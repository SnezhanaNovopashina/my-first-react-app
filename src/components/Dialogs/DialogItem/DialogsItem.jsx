import React from 'react';
import style from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.wrapper}>
            <NavLink to={path} activeClassName={style.active}>
                <div className={style.dialogs_item}>
                    <div className={style.avatar}>
                        <img src={props.avatar} alt='avatar' />
                    </div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogsItem;