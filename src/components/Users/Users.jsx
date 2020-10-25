import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user-icon-1.png';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={style.pages}>
                {pages.map(page => {
                    return <div onClick={(event) => { props.onPageChanged(page); }}
                        className={`${style.page} ${props.currentPage === page && style.selectedPage}`}>{page}</div>
                })}
            </div>
            {
                props.users.map(user => <div className={style.wrapper} key={user.id}>
                    <div className={style.leftContainer}>
                        <div className={style.avatar}>
                            <NavLink to='#s'>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar' />
                            </NavLink>
                        </div>
                        <div className={style.followButton}>
                            {user.followed ?
                                <button onClick={() => { props.unfollow(user.id) }} type='button' className={style.unfollow}>Unfollow</button> :
                                <button onClick={() => { props.follow(user.id) }} type='button' className={style.follow}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.rightContainer}>
                        <div className={style.name}>
                            <NavLink to='#s'>
                                {user.name}
                            </NavLink>
                        </div>
                        <div className={style.location}>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </div>
                        <div className={style.status}>
                            {user.status}
                        </div>
                    </div>
                </div>)
            }
            {/* <div className={style.moreUsers}>
                    <button type='button'>Show more</button>
                </div> */}
        </div>
    )
}

export default Users;