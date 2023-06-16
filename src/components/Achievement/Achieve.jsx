import { useState } from 'react';
import AchieveItem from './AchieveItem';
import Slider from 'react-slick';
// import the icons you need
import { faUserFriends, faTrophy, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

const ACHIEVEDATA = [

    
    {
        start: 0,
        end: 12,
        content: 'Members Association',
        delay: 0,
        suffix: "+",
        icon: faCheckSquare
    },

    {
        start: 0,
        end: 1000,
        content: 'No. of Ranked Tournaments',
        delay: 0,
        suffix: "+",
        icon: faTrophy
    },


    {
        start: 0,
        end: 14600,
        content: 'Professional Players',
        delay: 0,
        suffix: "+",
        icon: faUserFriends
    },

    {
        start: 0,
        end: 1,
        content: 'World Champion',
        delay: 0,
        icon: faUserFriends
    }

]


function Achieve() {
    const [counterOn, setCounterOn] = useState(true);
    const settings = {
        dots: false,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 5000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll:1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
   
    return (
        <section className={`w-full flex md:justify-center items-center flex-col p-6 bg-transparent`}>

            <div className="w-full lg:max-w-[90%] lg:mx-auto flex justify-center lg:justify-around items-center lg:flex-row flex-col">

              

            {/* News Slider Carousel */}
                    <div className="w-full">
                        <Slider {...settings}>
                           {
                             ACHIEVEDATA.map((item, i) => (
                                    <AchieveItem  key={i} icon={item.icon} start={item.start} end={item.end} delay={item.delay} content={item.content} On={counterOn} suffix={item.suffix}/>
                                ))
                           }
                        </Slider>
                    </div>

            </div>
            

        </section>
    )
}

export default Achieve