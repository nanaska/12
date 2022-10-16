import Image from "next/image"
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroImage from "../public/HeroImage.png"

export default function Hero(){
    return(<div className="mt-0 mb-0 md:mt-0">



        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}

            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true, color: "#FFD2B0" }}

            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
        >
            <SwiperSlide>
                <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={3840} height={1280}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={3840} height={1280}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={3840} height={1280}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt="Акция 10% за заказ с собой" src={HeroImage} width={3840} height={1280}/>
            </SwiperSlide>
            <br/>
        </Swiper>

    </div>)
}