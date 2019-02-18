import React, { Fragment } from 'react';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideMenu from '../Navigation/SideMenu/SideMenu';

const Layout = ( props ) => {
    return (
        <Fragment>
            <Toolbar />
            <SideMenu />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;