import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideMenu.css';

const SideMenu = (props) => {

    return (
        <div className={classes.SideMenu}>
            <Logo height="10%" marginBottom="32px"/>
            <nav>
                <NavItems />
            </nav>
        </div>
    );
};

export default SideMenu;