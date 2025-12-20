import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from "./MainCarouselData";




const MainCarousel = () => {
    const items = carouselData.map((item) => <img className='cursor-pointer'
     role= 'presentation' src={item.image} alt=""></img>);

    return(
    <AliceCarousel
        items={items}
    />
)
}

export default MainCarousel