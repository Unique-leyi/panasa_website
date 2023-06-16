import Image from "next/image";
import { tournamentInfos } from "../../../pages/api/tournamentInfo";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { ayscData } from "../../../pages/api/ayscData";

function Aysc(){
    return (
        <main className="p-4 lg:py-16">
            <section className="my-4 container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-16 ">
                <div className="py-2">
                    <div className="mb-8">
                        <h3 className="text-2xl lg:text-5xl text-deep font-extrabold">Panasa/Winifred Awosika Africa Youth Cup (AYSC)</h3>
                    </div>

                    <div className="my-2">
                        <p className="text-darkash text-sm">
                            PANASA is pleased to announce the first edition of the PANASA/Winifred Awosika Foundation Africa Youth Scrabble Championship. This event is open to only youths on the continent of Africa.
                        </p>
                    </div>

                    <div className="my-8 shadow-md shadow-darkpurple overflow-hidden rounded-md">
                        <div className="flex items-center lg:items-start flex-col py-4 px-3 bg-sitepink">
                            <h5 className="text-xl font-bold lg:text-left text-center">Championship Details</h5>
                        </div>

                        <div className="grid grid-cols-1  gap-10">

                            <div className="col-span-1">
                                
                                {
                                    ayscData.map((info, i) => (
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
                        <Image src={require("../../assets/images/aysc_cup.jpeg")} alt="aysc" objectFit={"cover"} layout={"fill"}/>
                    </div>


                    <div className="my-4 relative w-full h-80 lg:h-[45rem] rounded-lg border-4 border-sitepink">
                        <Image src={require("../../assets/images/waf.jpeg")} alt="aysc" objectFit={"cover"} layout={"fill"}/>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Aysc