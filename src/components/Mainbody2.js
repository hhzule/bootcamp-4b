import React from "react";
import style from './main2.module.css';
import img1 from './animation3.gif';

function Mainbody2(){
return(
<>
<div className={style.main}>
<div className={style.imgdiv}>
        <div >
        <img src={img1} alt='we are' />
    </div>
    </div>
    <div className={style.bodytext}>
        <h1 className={style.hh}>We Are</h1>
   <p className={style.ptext}> A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery
   <div > <h2 className={style.anisubtext}>About Us</h2></div>
  
   </p>
    </div>
   
    
</div>

</>
);
}
export default Mainbody2;