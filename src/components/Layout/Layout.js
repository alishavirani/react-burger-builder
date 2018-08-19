import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, Side drawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout;