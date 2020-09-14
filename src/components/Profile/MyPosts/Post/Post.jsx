import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
    return (
        <div className={style.message}>
            <div className={style.userphoto}>
                <img src='https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/6d8/750_400_1/pomeranskij_shpic.jpg?1528235448125459' alt='user' />
            </div>
            <div className={style.text}>
                { props.messageText }
            </div>
            <div className={style.likes}>
                <span>&#10084; </span>{ props.likesCount }
            </div>
        </div>
    );
};


export default Post;