import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import SideBarList from './SideBarList'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    offset: theme.mixins.toolbar,

}))

const MenuHidden = (props) => {
    const classes = useStyles()
    return (
        <Drawer className={classes.drawer}
            
            classes={{
                paper: classes.drawerPaper,
            }}
            variant={props.variant}
            anchor='left'
            open={props.open}
            onClose={props.onClose ? props.onClose : null}>
            
            <div className={classes.offset}></div>
            <Divider /> 
            <SideBarList />


        </Drawer>
    )
}

export default MenuHidden
