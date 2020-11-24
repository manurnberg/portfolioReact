import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram';

const drawerWidth = 240

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    title: {
        flexGrow: 1,
        color: '#616161'
    },
    appBar: {
        // [theme.breakpoints.up('sm')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     //marginLeft: drawerWidth,
        // },
        background: 'none',

    },

    mpButton: {
        fontSize: 'large',
        color: '#616161'
    }


}))


const NavBar = (props) => {
    const classes = useStyles()
    return (

        <AppBar position='fixed' color='primary' className={classes.appBar} elevation={0}>
            <Toolbar >
                <IconButton
                    color='inherit'
                    aria-label='menu'
                    className={classes.menuButton}
                    onClick={() => props.toogleBar()}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h4' className={classes.title}>
                    Mi Portfolio

                    </Typography>
                <IconButton>
                    <GitHubIcon />
                </IconButton>
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
                <IconButton>
                    <InstagramIcon />
                </IconButton>
                <Button className={classes.mpButton} variant='text' >Mi Perfil</Button>
            </Toolbar>
        </AppBar>

    )

}

export default NavBar