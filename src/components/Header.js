import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import img1 from './animation.gif';
import Headslider from './Headslider';
import style from './header1.module.css';
import Nav from './Nav'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Grid container spacing={1}>
        <AppBar  position="static">
      
       
      <Grid item xs={12} sm={12} >
        <Nav />
        </Grid>
        </AppBar>
        </Grid> 
       

       <div className={style.banner}>
       <div className={style.gif}>
        <img src={img1} className={style.gif} alt="gif"/>  
        </div>
        <div className={style.bannerslider}>
        <Headslider />
        </div>
       </div>
    </div>
  );
}