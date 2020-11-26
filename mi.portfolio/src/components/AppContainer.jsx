import React from 'react'
import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from './NavBar';
import CardCarousel from './CardCarousel'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background1.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // margin: 'auto',
        //height: '28vh',
        // width: 'calc(20vw * 0.54 - 2%)',
        // borderRadius: 8,
        display: 'flex',
        // marginLeft: '10px',
        // marginTop: '10px',

    },
     offset: theme.mixins.toolbar,
    // content: {
    //     flexGrow: 1,
    //     // backgroundColor : theme.palette.backgroundColor.default,
    //     padding: theme.spacing(3)

    // },
}))

const AppContainer = () => {

    const classes = useStyles()
    
   

    return (
        <div className={classes.root}>
            
            <NavBar />
            <div className={classes.offset}></div>
            <CardCarousel />

            {/* <Home /> */}
            
            
            
        </div>
    )
}

export default AppContainer
