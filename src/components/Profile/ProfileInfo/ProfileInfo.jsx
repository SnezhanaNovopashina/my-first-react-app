import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={style.theme}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300' alt='theme' />
            </div>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <img src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&w=1000&q=80' alt='avatar' />
                </div>
                <div className={style.info}>
                    <div className={style.firstname}>
                        Kotik C.
                    </div>
                    <div className={style.facts}>
                        <div>Date of Birth: <i>7 Jan</i></div>
                        <div>City: <i>Moscow</i></div>
                        <div>University: <i>MSU'20</i></div>
                        <div>Site: <i>kotik.com</i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;