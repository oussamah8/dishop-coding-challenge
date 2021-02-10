import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    freeTrial: {
        backgroundColor: "#000"
    },
    appBar: {
        backgroundImage: "linear-gradient(#FFFFFF09, #1132BADC);"
    }
}));


function Header(props) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} >
                            DEMO Streaming
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Button className={classes.freeTrial} color="inherit" variant="contained">Start your free trial</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="secondBar">
                <Grid container xs={10} className="mx-auto">
                    <div className="title">
                        {props.title}
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default Header