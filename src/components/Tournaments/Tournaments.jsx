import Image from "next/image";
import { tournamentInfos } from "../../../pages/api/tournamentInfo";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { cupData } from "../../../pages/api/cupdata";

function Tournaments(){
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
        <main className="p-4 lg:py-16">
            <section className="my-4 container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-16 ">
                <div className="py-2">
                    <div className="mb-8">
                        <h3 className="text-2xl lg:text-5xl text-deep font-extrabold">President{"'"}s Cup</h3>
                    </div>

                    <div className="my-2">
                        <p className="text-darkash text-sm">
                            The Pan African Scrabble Association (PANASA) is pleased to announce the first edition of the President’s Cup. This Elite event is open to players from across the world and will be biennial, the event will happen alongside the Africa Youth Scrabble Championship soon to be announced by PANASA.  A total Prize Pot of <b className="text-deep">$31,250</b> will be shared amongst the winners. Please find below details of this event
                        </p>
                    </div>

                    <div className="my-8 shadow-md shadow-darkpurple overflow-hidden rounded-md">
                        <div className="flex items-center lg:items-start flex-col py-4 px-3 bg-sitepink">
                            <h5 className="text-xl font-bold lg:text-left text-center">Championship Details</h5>
                        </div>

                        <div className="grid grid-cols-1 gap-10">

                            <div className="col-span-1">
                                
                                {
                                    tournamentInfos.map((info, i) => (
                                        <div key={i} className="flex justify-center lg:justify-between items-center lg:flex-row flex-col py-3 px-2 lg:gap-y-3 lg:gap-x-4 gap-6 border-b-[1px] border-[rgba(0,0,0,0.3)] mb-2">
                                            <h4 className="flex-1 text-deep font-bold text-lg lg:text-left text-center">{info.main}</h4>
                                            <p  className="flex-1 text-sm text-darkash lg:text-left text-center">{info.content}</p>
                                        </div>
                                    ))
                                }
                                
                            </div>



                        </div>


                    </div>

                </div>

                <div className="py-2">
                    <div className="relative w-full h-80 lg:h-[34rem] rounded-lg border-4 border-sitepink">
                        <Image src={require("../../assets/images/president_cup.jpeg")} alt="aysc" objectFit={"cover"} layout={"fill"}/>
                    </div>

                    {/* News Slider Carousel */}
                    <div className="my-10 bg-ash p-2 rounded-b-lg">

                        <h4 className="text-xl my-4 lg:text-2xl lg:m-5 font-bold text-deep">Snapshots Of Event Place:</h4>
                        <div className="w-full my-10">
                            <Swiper {...settings}>
                                {
                                    cupData.map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="relative w-full h-60 rounded-lg border-4 border-sitepink">
                                                <Image src={item.image} alt={`p_cup${i}`} objectFit={"cover"} layout={"fill"}/>
                                            </div>
                                        </SwiperSlide>

                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    ) 
}

export default Tournaments