import React from 'react'
import { makeStyles, Avatar } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        minWidth: '60%',
        maxWidth: '60%',
        minHeight: 400,
        opacity : 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        //border: '1px solid'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.10)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    content: {

        justifyContent: 'center',
        alignItems: 'center',
       // border: '1px solid'

    }
})

const ProfileCard = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Avatar alt="Remy Sharp"/>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Sobre mi...
        </Typography> */}
        <br />
        <br />
                <Typography  >
                    Muchas veces me puse a pensar, si realmente valía el esfuerzo cuando uno no ve resultados a corto plazo, parece algo tan inherente del ser humano
                    el venir a un mundo donde la paciencia suele ser una carga, más que una habilidad que hay que desarrollar... 
                    que cuesta tener disciplina y que las circunstancias de la vida suelen ser impredecibles.
                    Mas creo, que cada prueba es inevitable en el momento en que se presenta y el cambio es tan importante que nadie vuelve a ser como antes.
                    Nunca dejemos de soñar y de cambiar a eso que tanto anhelamos ser, y disfrutemos en el camino de quien somos hoy, porque mañana seremos otra versión de nosotros... 
                    
        </Typography>
        <br />
                <Typography className={classes.pos} color="textSecondary">
                    Matias Nürnberg (Cacorucho)
        </Typography>
                {/* <Typography variant="body2" component="p">
                    well meaning and kindly.
          <br />
                    {'"a benevolent smile"'}
                </Typography> */}
            </CardContent>
            {/* <br />
            <CardActions>
                <Button size="small">Leer más...</Button>
            </CardActions> */}
        </Card>
    )
}

export default ProfileCard
