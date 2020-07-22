import React from "react";
import style from './footer.module.css';
import img1 from './logo2.png'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Footer (){
return(
<>
<div className={style.main}>
<AppBar position="static" elevation={0} className={style.main}>
  <Toolbar>
      <div className={style.foot}>
      <div>
          <img className ={style.logo} src={img1} alt='logo'/>
   
   </div> <br/>
   <h1 styles={{fontSize: '40px',  fontWeight: 'bold', marginRight: '20px'}}>Care To Join Us</h1>
    <br/>
     <h3 styles={{fontSize: '30px'}} >
     Embark on an exciting carrer with us to learn and grow alongside the best in the industry

     
   </h3>
   <div className={style.anisubtext}>About Us</div>
   <br/>
   <div>
         <hr/>
   
   </div>
   <br/>
   <div>
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
   
   </div>
      </div>
      
   
  </Toolbar>
</AppBar>
    
</div>

</>
);
}
export default Footer;