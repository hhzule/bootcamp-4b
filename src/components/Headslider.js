import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion';
import style from './header.module.css';

 function Headslider (){

    const settings = {
      
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
      autoplay: true,
    
};
 console.log(settings)
    return (
      <div>
       
        <Slider className={style.container}  {...settings}>
         
        <div className={style.slider}>
           <div>
            <h1 className={style.anitext}>   <motion.div className={style.anitext}
            transition={{ duration: .7 }}
            animate={{ y: 0, scale: 1.1 }}
            initial= {{ y : 100}}>
              
              Customized solutions
            </motion.div>
          
            </h1>
            <h1 className={style.anitext}>   <motion.div 
            transition={{ duration: 1.2}}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              to meet the needs of
            </motion.div>
          
            </h1>
            <h1 className={style.anitext}>   <motion.div 
            transition={{ duration: 1.5 }}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              the changing market
            </motion.div>
          
            </h1>
            <h3 className={style.anisubtext}>   <motion.div className={style.anisubtext2}
            transition={{ duration: 1.8}}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              Revenue Cycle Management<br/>
              </motion.div>
           </h3>
           </div>
           {/* <div>
            <h1 className={style.anitext}>   <motion.div 
            transition={{ duration: .7 }}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              Customized solutions
            </motion.div>
          
            </h1>
            <h1 className={style.anitext}>   <motion.div 
            transition={{ duration: 1.2}}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              to meet the needs of
            </motion.div>
          
            </h1>
            <h1 className={style.anitext}>   <motion.div 
            transition={{ duration: 1.5 }}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              the changing market
            </motion.div>
          
            </h1>
            <h3 className={style.anisubtext}>   <motion.div className={style.anisubtext2}
            transition={{ duration: 1.8}}
            animate={{ y: 0 }}
            initial= {{ y : 100}}>
              
              Revenue Cycle Management<br/>
              </motion.div>
           </h3>
           </div> */}
          </div>
         
         
        </Slider>
      </div>
    );
  }


export default Headslider;