import React from "react";
import Logo from "../assets/img/logoBellaCat.png";
import imgCats from "../assets/img/cats.png";
import missa from "../assets/img/missa.png";
import "../assets/css/carrousel.css";

import { CCarouselItem, CCarousel, CImage } from "@coreui/react";

const MiCarousel = () => {
  return (
    <CCarousel className="carrousel" controls indicators transition="slide" interval={1000}>
      <CCarouselItem>
        <CImage className="d-block w-100" src={imgCats} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={missa} alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={Logo} alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};
export default MiCarousel;
