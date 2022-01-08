import React from 'react'
import { Carousel } from 'react-bootstrap';
import food from './img/food.jpg'
import welcome from './img/welcome.jpg';

const CarouselComp = ({ items }) => {
    return (
        <Carousel>
            {/* {items.map(el => ( */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ maxHeight: '460px' }}
                    src={food}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ maxHeight: '460px' }}
                    src={welcome}
                    alt="First slide"
                />
            </Carousel.Item>
            {/* ))} */}
        </Carousel>
    )
}

export default CarouselComp;
