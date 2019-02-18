import React from 'react';

import burgerLogo from '../../assets/img/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{height: props.height, marginBottom:props.marginBottom}}>
        <img src={burgerLogo} alt="myBurger"/>
    </div>
);

export default Logo;