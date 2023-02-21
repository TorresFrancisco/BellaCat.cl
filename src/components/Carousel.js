import React from "react";
import Logo from '../assets/img/logoBellaCat.png';
import imgCats from '../assets/img/cats.png';
import missa from '../assets/img/missa.png'
import '../assets/css/carousel.css'


import { CCarouselItem,CCarousel, CImage  } from '@coreui/react'

const MiCarousel = () =>{
    return(
        <CCarousel controls indicators transition="slide" interval={1000} >
  <CCarouselItem>
    <CImage className=" w-100 p-5 img" src={imgCats} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className=" w-100 p-5 img" src={missa} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className=" w-100 p-5 img" src={Logo} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
  );
        
        
    
 
}
export default MiCarousel;