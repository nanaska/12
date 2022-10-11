import ItemCartForBusket from "./itemCartForBusket";
import {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css";
export default function RelevantSlider(){



    const [relevant, setRelevant] = useState([])
    const relev = async () => {
        await fetch('api/takemuchrelevant')
            .then(response => response.json())
            .then(data => {
                setRelevant(data)
                console.log(relevant)
            });
    }
    useEffect(() => {
        relev()

    }, [])
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(<div className=" flex w-[90vw] items-center justify-center overflow-auto">

        {relevant.map((relevant, index) =>
            <>
            <ItemCartForBusket key={index} id={relevant.id} description={relevant.description} title={relevant.title}
                                   price={relevant.price} weight={relevant.weight} img={relevant.img}/>

            </>
        )}


    </div>)
}