import { useState, useEffect } from "react"
import Rated from "./Rated"
import { rated } from "../../../pages/api/rated"
import { ratingData } from "../../../pages/api/ratingData"
import Slider from "react-slick"
import Table from "../Datatable/Table"
import styles from "../Ratings/ratings.module.css"
import Link from "next/link"


function RatedContainer() {
    const [mostRated, setMostRated] = useState([]);

    useEffect(() => {
        const getRated = () => {
            setMostRated(ratingData.slice(0, 11));
        }

        getRated();
    }, [])


    // slider
    const settings = {
        dots: false,
        autoplay: true,
        speed:1000,
        autoplaySpeed:5000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        initialSlide: 0,
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
                    arrows: true,
                }
            }
        ]
    }

    return (
        <main className="mt-16">
            <section className="lg:max-w-[80%] lg:mx-auto lg:p-0 p-4 flex justify-center items-center my-12 flex-col">
                <h3 className="text-center font-extrabold text-3xl lg:text-5xl text-deep my-2 uppercase">About The Ratings</h3>
                <p className="text-sm text-center my-2"> The PANASA Ratings Officer updates the ratings file using the latest results of approved tournaments. Ratings are given to those who have played in any PANASA-approved tournament and have reached minimum of 30 games in PANASA-rated tournaments. </p>

                <div className="w-full my-6 bg-ash p-4 rounded-md">
                    <h5 className="text-deep font-semibold ">Rankings</h5>
                    <p>PANASA rewards excellence with a 3-tier ranking badge. The ranking Badge are;</p>
                    <ol>
                        <li className="text-darkblue my-2">1. CC – Continental Champion</li>
                        <li className="text-darkblue my-2">2. CGM – Continental Grandmaster</li>
                        <li className="text-darkblue my-2">3. CX – Continental Expert</li>
                    </ol>
                    <Link href={"#"}><a className="hover:!underline hover:text-darkpink">For more info click here...</a></Link>
                </div>

                <span className="my-6 border-t-4 border-solid border-t-deep bg-[#f3f3f3] rounded-md p-3"><em className="text-[red] mx-2"> Note: </em> Players with more than two years of inactivity will retain their previous rating but will be considered provisional until they return by playing a PANASA-rated tournament. </span>


            </section>

            <section className="lg:max-w-[80%] lg:mx-auto flex justify-center items-center flex-col">
               <div className="w-full lg:p-0 p-6">
                    <h5 className="font-medium text-lg text-sitegreen">PANASA Top 10</h5>
                    <h3 className="text-deep text-2xl lg:text-4xl font-bold">Highest Rated Players</h3>
                </div> 
            </section>


            <section className={` lg:max-w-[80%] lg:mx-auto flex lg:justify-center lg:items-center flex-col lg:p-0 p-6`}>
                <div className="w-[95%] lg:max-w-full my-12">
                    <Slider {...settings}>
                        {
                            mostRated.map((item, i) => (
                                <div key={i}>
                                    <Rated {...item}/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>



            <section className={`${styles.rated_bg} bg-cover bg-norepeat bg-fixed p-6 lg:py-20`}>
                <div className="my-8 lg:max-w-[80%] lg:mx-auto flex justify-center items-center flex-col lg:p-0 p-6">

                    <div className="w-full">
                            <h5 className="font-medium text-lg text-white">PANASA Ratings</h5>
                            <h3 className="text-darkblue text-2xl lg:text-4xl font-bold">Player Ratings</h3>
                    </div> 

                </div>

                 <div className={`my-8 lg:max-w-[80%] lg:mx-auto flex justify-center items-center flex-col`}>
                    <Table/>
                </div>
            </section>
        </main>
    )
}

export default RatedContainer