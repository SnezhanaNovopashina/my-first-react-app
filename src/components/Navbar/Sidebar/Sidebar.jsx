import React from 'react';
import style from './Sidebar.module.css';
import FriendsItem from './FriendsItem/FriendsItem';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {

    let friendsElements = props.state.friends.map(friend => <FriendsItem id={friend.id} name={friend.name} avatar={friend.avatar} />);

    return (
        <div className={style.sidebar}>
            <NavLink to='#s' activeClassName={style.active}>
                <h1>Friends</h1>
            </NavLink>
            <div className={style.friends}>
                {friendsElements}
            </div>
        </div>
    )
};

export default Sidebar;