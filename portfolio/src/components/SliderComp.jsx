import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderComp() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        style={
                            {
                                backgroundImage: `url(${require("../img/img-1.jpg")})`,
                                height: '85vh',
                                width: '100%',
                                backgroundSize: 'cover'
                            }
                        }
                    >
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        style={
                            {
                                backgroundImage: `url(${require("../img/img-2.jpg")})`,
                                height: '85vh',
                                width: '100%',
                                backgroundSize: 'cover'
                            }
                        }
                    >
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        style={
                            {
                                backgroundImage: `url(${require("../img/img-3.jpg")})`,
                                height: '85vh',
                                width: '100%',
                                backgroundSize: 'cover'
                            }
                        }
                    >
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        style={
                            {
                                backgroundImage: `url(${require("../img/img-4.jpg")})`,
                                height: '85vh',
                                width: '100%',
                                backgroundSize: 'cover'
                            }
                        }
                    >
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div
                        style={
                            {
                                backgroundImage: `url(${require("../img/img-5.jpg")})`,
                                height: '85vh',
                                width: '100%',
                                backgroundSize: 'cover'
                            }
                        }
                    >
                    </div>
                </div>
            </Slider>
        </div>
    )
}
