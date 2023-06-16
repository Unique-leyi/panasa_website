import Link from 'next/link'
import styles from './News.module.css'
import Slider from 'react-slick'
import NewsItem from './NewsItem'
import { eventsData } from '../../../pages/api/events'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";



function News() {
    
    const settings = {
        effect:"coverflow",
        grabCursor: true,
        centeredSlides:true,
        slidesPerView: 4,
        autoplay: {
            delay: 1000,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },

        breakpoints: {
            // when window width is >= 350px
            350: {
                width: 350,
                slidesPerView: 1,
                },

            // when window width is >= 640px
            640: {
                width: 640,
                slidesPerView: 1,
                },

            // when window width is >= 768px
            768: {
            width: 768,
            slidesPerView: 2,
            },
        },
        pagination: false,
        modules:[EffectCoverflow, Pagination],
        className: "mySwiper"
    }

    

   
    return (
        <section className={`bg-ash bg-no-repeat bg-cover bg-center flex p-8  justify-center items-center flex-col`}>
            <div className="w-full lg:max-w-[90%] lg:p-6 mx-4 md:mx-auto flex justify-center items-center flex-col">
                <div className="w-full my-8 news_cta mx-4 flex  lg:justify-between justify-start lg:items-center items-start lg:flex-row flex-col lg:flex-nowrap flex-wrap">
                    <h3 className='text-secondary text-3xl font-bold lg:mb-0 mb-6'>Past and Upcoming Events</h3>
                    <Link href={`/news`}>Browse Events</Link>
                </div>

                {/* News Slider Carousel */}
                    <div className="w-full my-10">
                        <Swiper {...settings}>
                            {
                                eventsData.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <NewsItem {...item}/>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    </div>

            </div>


        </section>
    )
}

export default News