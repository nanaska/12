import React, {Component, useEffect, useState, useCallback} from "react";
import Slider from "react-slick";
import ItemCart from "./itemCart";
import ItemCartForBusket from "./itemCartForBusket";
import Image from "next/image";

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function  SimpleSlider() {
    const [content, setContent] = useState()
    const awdf = async (type, filters) => {
        if (filters) {

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "producttype": type,

                    "filtertype": [filters]
                })
            }

            fetch('api/findexactproduct', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }

        if (!filters) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "producttype": type,
                    "filtertype": [1,2,3]

                })
            }
            fetch('api/findexactproduct', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setContent(data)
                });
        }


    }
    useEffect(() => {

        awdf(22)
    }, [])
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`md:w-[50px] w-[30px] h-[30px] md:h-[50px] absolute right-[-20px] z-50 top-[82px]`}

                onClick={onClick}
            ><div className="flex items-center justify-center">
                <Image src={`/arrow.svg`} width={50} height={50}/>
            </div></div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`md:w-[50px] w-[30px] h-[30px] md:h-[50px] rotate-180  absolute left-[-20px] z-50 top-[80px]`}

                onClick={onClick}
            ><div className="flex items-center justify-center">
                <Image src={`/arrow.svg`} width={50} height={50}/>
            </div></div>
        );
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        focusOnSelect: false,
        slidesToScroll: 2,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };



    const EmblaCarousel = () => {
        const [emblaRef , emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
        const scrollPrev = useCallback(() => {
            if (emblaApi) emblaApi.scrollPrev()
        }, [emblaApi])

        const scrollNext = useCallback(() => {
            if (emblaApi) emblaApi.scrollNext()
        }, [emblaApi])
        return (
            <div className="embla relative" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        {content !== undefined && <div className="mx-0 flex items-center justify-center">
                            <ItemCartForBusket id={content[0].id} description={content[0].description} img={content[0].img}
                                               price={content[0].price} title={content[0].title} weight={content[0].weight}/>
                        </div>}
                    </div>
                    <div className="embla__slide">
                        {content !== undefined && <div className="mx-0 flex items-center justify-center">
                            <ItemCartForBusket id={content[1].id} description={content[1].description} img={content[1].img}
                                               price={content[1].price} title={content[1].title} weight={content[1].weight}/>
                        </div>}
                    </div>
                    <div className="embla__slide">
                        {content !== undefined && <div className="mx-0 flex items-center justify-center">
                            <ItemCartForBusket id={content[2].id} description={content[2].description} img={content[2].img}
                                               price={content[2].price} title={content[2].title} weight={content[2].weight}/>
                        </div>}
                    </div>
                    <div className="embla__slide">
                        {content !== undefined && <div className="mx-0 flex items-center justify-center">
                            <ItemCartForBusket id={content[3].id} description={content[3].description} img={content[3].img}
                                               price={content[3].price} title={content[3].title} weight={content[3].weight}/>
                        </div>}
                    </div>
                    <div className="embla__slide">
                        {content !== undefined && <div className="mx-0 flex items-center justify-center">
                            <ItemCartForBusket id={content[4].id} description={content[4].description} img={content[4].img}
                                               price={content[4].price} title={content[4].title} weight={content[4].weight}/>
                        </div>}
                    </div>
                    <div className="embla__slide">
                        {content !== undefined && <div className="mx-0 flex items-center justify-center">
                            <ItemCartForBusket id={content[5].id} description={content[5].description} img={content[5].img}
                                               price={content[5].price} title={content[5].title} weight={content[5].weight}/>
                        </div>}
                    </div>

                </div>

            </div>
        )
    }
        return (
            <div className="m-2 flex flex-col">



                <EmblaCarousel />



            </div>
        );

}