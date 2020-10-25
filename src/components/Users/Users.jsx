import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-icon-1.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={style.pages}>
                    {pages.map(page => {
                        return <div onClick={(event) => { this.onPageChanged(page); }}
                        className={`${style.page} ${this.props.currentPage === page && style.selectedPage}`}>{page}</div>
                    })}
                </div>
                {
                    this.props.users.map(user => <div className={style.wrapper} key={user.id}>
                        <div className={style.leftContainer}>
                            <div className={style.avatar}>
                                <NavLink to='#s'>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar' />
                                </NavLink>
                            </div>
                            <div className={style.followButton}>
                                {user.followed ?
                                    <button onClick={() => { this.props.unfollow(user.id) }} type='button' className={style.unfollow}>Unfollow</button> :
                                    <button onClick={() => { this.props.follow(user.id) }} type='button' className={style.follow}>Follow</button>}
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
}

export default Users;