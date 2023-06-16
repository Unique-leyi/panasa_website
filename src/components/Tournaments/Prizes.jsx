import styles from "./notes.module.css";
import Slider from "react-slick";
import { prizes } from "../../../pages/api/prizes";
import Prize from "./Prize";

function Prizes(){
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
        <section className={`${styles.notes_bg} bg-fixed bg-cover bg-center bg-no-repeat bg-ash py-12 lg:py-16 relative z-[10] p-6`}>
            <div className="flex justify-center items-center flex-col">
                <h5 className="text-3xl lg:text-5xl text-white font-bold">Prizes</h5>
            </div>

            <div className="container lg:max-w-[80%] lg:mx-auto">

                <div className="w-full mt-10 bg-ash p-6 rounded-md border-8 border-sitepink">
                    <h4 className="text-deep my-3 text-2xl font-bold">Tournament Prizes:</h4>
                    <Slider {...settings}>
                        {
                            prizes.map((item, i) => (
                                <Prize key={i} {...item}/>
                            ))
                        }
                    </Slider>
                </div>

                <div className="bg-white my-6 p-3 rounded-md">
                    <div className="border-b-2 border-[rgba(0,0,0,0.8)]">
                        <p><b>Best Placed Player (Only where at least 3 Players participate from the country) -$1000/Country.</b> This Prize is open to the following countries: Nigeria, Ghana, Cameroun, Gambia, Sierra Leone, Liberia, Kenya, Uganda, Tanzania, Botswana, Zambia & South Africa.</p> 	
                    </div>

                    <div className="border-b-2 border-[rgba(0,0,0,0.8)]">
                        <ul className="my-2">
                            <li className="text-sm font-semibold">Best Female (1) - $200</li>
                            <li className="text-sm font-semibold">Best Female (2) - $200</li>
                            <li className="text-sm font-semibold">Ratings Prize (WESPA Rating 1400 - 1301) - $200</li>
                            <li className="text-sm font-semibold">Ratings Prize (WESPA Rating 1300 – 1201) - $200</li>
                            <li className="text-sm font-semibold">Ratings Prize (WESPA rating 1200 and below) - $200</li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </section>
    )
}

export default Prizes