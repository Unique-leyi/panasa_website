import styles from "./aysc.module.css";
import Slider from "react-slick";
import { ayscPrizes } from "../../../pages/api/ayscprizes";
import AYSCPrize from "./AYSCPrize";

function AYSCPrizes(){
    const settings = {
        dots: false,
        autoplay: true,
        speed:1000,
        autoplaySpeed:2000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll:1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                    initialSlide: 2,
                }
            },

            {
                breakpoint: 300,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <section className={`${styles.aysc_bg} bg-fixed bg-cover bg-center bg-no-repeat bg-ash py-12 lg:py-16 relative z-[10] p-6`}>
            <div className="flex justify-center items-center flex-col">
                <h5 className="text-3xl lg:text-5xl text-white font-bold">Prizes</h5>
            </div>

            <div className="container lg:max-w-[80%] lg:mx-auto">

                <div className="w-full mt-10 bg-ash p-6 rounded-md border-8 border-sitepink">
                    <h4 className="text-deep my-3 text-2xl font-bold">Under 15 Prizes:</h4>
                    <Slider {...settings}>
                        {
                            ayscPrizes.map((item, i) => {
                                if(item.category == "under 15"){
                                    return (
                                        <AYSCPrize key={i} {...item}/>
                                    )
                                }
                            })
                        }
                    </Slider>
                </div>


                <div className="w-full mt-10 bg-ash p-6 rounded-md border-8 border-sitepink">
                    <h4 className="text-deep my-3 text-2xl font-bold">Under 19 Prizes:</h4>
                    <Slider {...settings}>
                        {
                            ayscPrizes.map((item, i) => {
                                if(item.category == "under 19"){
                                    return (
                                        <AYSCPrize key={i} {...item}/>
                                    )
                                }
                            })
                        }
                    </Slider>
                </div>                
            </div>

        </section>
    )
}

export default AYSCPrizes

