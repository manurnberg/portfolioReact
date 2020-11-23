import React from 'react'
import { makeStyles } from "@material-ui/core";
import NavBar from './NavBar';

const useStyles = makeStyles (theme => ({
    root: {
        display : 'flex'
    },
    offset: theme.mixins.toolbar,
    content: {
        flexGrow : 1,
       // backgroundColor : theme.palette.backgroundColor.default,
        padding: theme.spacing(3)
        
    },
})) 

const AppContainer = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <NavBar />
            <div className={classes.content}>
                <div className={classes.toolbar}>

                </div>
            </div>
            
        </div>
    )
}

export default AppContainer
