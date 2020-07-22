import React from "react";
import style from './nav.module.css';
import img1 from './logo.png'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Nav (){
return(
<>
<div className={style.main}>
<AppBar position="static" elevation={0} className={style.main}>
  <Toolbar>
  <img className ={style.logo}src={img1} alt='logo'/>
    
    <Typography variant="h6" style={{color: 'rgb(113,113,113)'}} >
      Zapare Technologies
    </Typography>
     <div className={style.rightnav}>
    <Typography variant="h6" style={{color: 'rgb(113,113,113)'}} >
      Home
    </Typography>
     
    <Typography variant="h6" style={{color: 'rgb(113,113,113)'}} >
      About Us
    </Typography>
     
    <Typography variant="h6"  style={{color: 'rgb(113,113,113)'}}>
      Services
    </Typography>
    <Typography variant="h6"  style={{color: 'rgb(113,113,113)'}}>
      Contact Us
    </Typography>
    </div>
  </Toolbar>
</AppBar>
    
</div>

</>
);
}
export default Nav;