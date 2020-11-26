import { makeStyles } from '@material-ui/core';
import React from 'react'
import Carousel from 'react-elastic-carousel';
import ProfileCard from './ProfileCard'


const useStyles = makeStyles(theme => ({

    cardcarousel : {

        width : '100px',
        height: '400px',
        marginTop : '150px',
        //border : '1px solid',
        justifyContent: 'center',
        alignItems: 'center',


    },
    profilecard : {
       
    },
    skillscard: {
        

    },
    knowledgecard: {
       

    },

        
}))



const CardCarousel = () => {

    const classes = useStyles()

    return (
        <Carousel className={classes.cardcarousel}>
           
            <ProfileCard className={classes.profilecard}/>
            <ProfileCard className={classes.knowledgecard}/>
            <ProfileCard className={classes.skillscard}/>
            <ProfileCard />
            <ProfileCard />
        </Carousel >
    )

}

export default CardCarousel
