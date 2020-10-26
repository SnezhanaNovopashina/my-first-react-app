import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import style from './Preloader.module.css';


const Preloader = (props) => {
    return (
    <div className={style.preloader}>
        <img src={preloader} />
    </div>
    )
}

export default Preloader;