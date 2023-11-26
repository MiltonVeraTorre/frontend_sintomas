import { UserEventInt, UserGraphData } from '@/types/AppTypes';
import React from 'react'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AreaGraph from './AreaGraph';

interface Props{
    datasets: UserGraphData[]
}

export default function GraphsCarousel({datasets}: Props) {
  return (
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showStatus={false}
    showArrows={true}
    showThumbs={true}
    showIndicators={true}
    interval={3000}
  >
    {datasets.map((key) => (
        <div className='h-72'>
        <p className='text-center text-blue-500 text-xl font-bold'>{key.nombre}</p>
        {/* // Porcada tipo de grafica del usuario */}
        <AreaGraph 
            key={key.nombre}
            data={key.registros}
        />
        </div>
    ))}

  </Carousel>
  )
}
