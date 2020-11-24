import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display : 'none'
        }
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            //marginLeft: drawerWidth,
        }

    }


}))


const NavBar = (props) => {
    const classes = useStyles()
    return (

        <AppBar position='fixed' color='primary' className={classes.appBar}>
            <Toolbar >
                <IconButton 
                color='inherit' 
                aria-label='menu' 
                className={classes.menuButton}
                onClick={() => props.toogleBar()}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    Mi Portfolio

                    </Typography>
                <Button variant='text' color='inherit'>Mi Perfil</Button>
            </Toolbar>
        </AppBar>

    )

}

export default NavBar