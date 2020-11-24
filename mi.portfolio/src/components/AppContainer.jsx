import React from 'react'
import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from './NavBar';
import MenuHidden from './MenuHidden';
import Home from './Home'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    offset: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        // backgroundColor : theme.palette.backgroundColor.default,
        padding: theme.spacing(3)

    },
}))

const AppContainer = () => {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const toogleBar = () => {
        setOpen(!open)
    }
    
    return (
        <div className={classes.root}>
            <NavBar toogleBar={toogleBar}/>
            <Hidden xsDown>
                <MenuHidden 
                variant='permanent'
                open={true} />
            </Hidden>
            <Hidden smUp>
                <MenuHidden 
                variant='temporary'
                open={open} 
                onClose={toogleBar}/>
            </Hidden>

            <div className={classes.content}>
                <div className={classes.offset}></div>
                <Home />
            </div>

        </div>
    )
}

export default AppContainer
