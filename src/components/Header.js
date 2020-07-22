import React from 'react';
import { motion } from 'framer-motion';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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