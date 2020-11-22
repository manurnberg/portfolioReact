import React from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'



const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    root: {
        flexGrow : 1
        },
    menuButton: {
        marginRight : theme.spacing(2)
    },
    title: {
        flexGrow : 1
    }
    

}))


const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position='fixed' color='primary'>
                <Toolbar>
                    <IconButton color='inherit' aria-label='menu' className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6'>
                        Mi Portfolio

                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}>
            </div>
        </div>

    )

}

export default NavBar