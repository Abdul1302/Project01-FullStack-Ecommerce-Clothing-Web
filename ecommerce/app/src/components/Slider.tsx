'use client'
import React from 'react'
import Sliders from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productcard from '@/components/Productcard'
import { Products } from '@/utils/mock';
import p12 from 'public/pro_12.png'
import p14 from 'public/pro_14.png'
import p1 from 'public/pro_13.png'
import p6 from 'public/pro_6.png'
import p8 from 'public/pro_8.png'
import p10 from 'public/pro_10.png'
import p3 from 'public/pro_3.png'
import p4 from 'public/pro_4.png'
import p5 from 'public/pro_5.png'


const Slider = () => {
    //Carosel Settings
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    smslidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className=' ' >
            {/* Headings */}
            <div  >
                <p className="flex justify-center text-sm font-semibold text-blue-600 mt-20 ">PRODUCTS</p>
                <h1 className="flex justify-center scroll-m-20 text-4xl font-bold tracking-tight mt-4  ">
                    Check What We Have
                </h1>
            </div>
            {/* Carosel */}
            <div className=' px-14 lg:ml-12'>
                <Sliders {...settings} className='mb-[100px] mt-[40px] ml-[40px] '>
                    <div  >
                        <Productcard id={1} name='Sweater' title="Brushed Raglan Sweatshirt" price={195} img={p12} category='Female' />
                    </div >
                    <div >
                        <Productcard id={8} name='Jackets' title="Brushed Bomber" price={225} img={p14} category='Female' />

                    </div>
                    <div>
                        <Productcard id={3} name='Sweater' title="Flex Sweatshirt" price={175} img={p1} category='Female' />

                    </div>
                    <div>
                        <Productcard id={7} name='Sweater' title="Imperial Alpace Hoodie" price={525} img={p6} category='Female' />
                    </div>
                    <div>
                        <Productcard id={9} name='T-Shirt' title="muscle Tank" price={75} img={p8} category='Female' />
                    </div>
                    <div>
                        <Productcard id={11} name='Sweater' title="Raglan Sweatshirt" price={195} img={p10} category='Male' />
                    </div>
                    <div>
                        <Productcard id={4} name='Pants' title="Flex Sweatpants" price={175} img={p3} category='Female' />
                    </div>
                    <div>
                        <Productcard id={6} name='Pants' title="Lite Sweatpants" price={150} img={p4} category='Female' />
                    </div>
                    <div>
                        <Productcard id={5} name='Pants' title="Pink fleece Sweatpants" price={195} img={p5} category='Female' />
                    </div>

                </Sliders>
            </div>
        </div>


    )
}

export default Slider