import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick';
import Award from './Award'
import { Awardees } from '../../../pages/api/award_collection';


function Awards() {

    


    const settings = {
        dots: false,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 5000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll:1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <main className="bg-ash mb-10">
            <section className="relative grid grid-cols-1 lg:grid-cols-2 lg:max-w-[85%] lg:mx-auto lg:py-20 lg:px-1">
                <div className="lg:my-14">
                    <div className="w-full h-[22rem] lg:w-[50rem] lg:h-[35rem] relative">
                        <Image src={require('../../assets/images/awards-2.png')} alt={'scrabble board'} layout="fill" objectFit="cover" width={100} height={100}/>
                    </div>
                </div>


                <div className="lg:my-24 bg-white z-10 lg:absolute -top-4 lg:top-40 lg:-right-10 lg:bottom-0 lg:w-[60%] p-6 rounded-sm shadow-xl shadow-purple">
                    <div className="mb-1">
                        <span className="tracking-widest text-lg text-darkblue uppercase">Past Winners</span>
                        <h3 className="text-3xl font-extrabold text-deep">African Scrabble Championship (ASC)</h3>
                    </div>

                    <div className="w-full my-6">
                        <Slider {...settings}>
                           {
                             Awardees.map((item, i) => (
                                    <Award key={i} {...item}/>
                                ))
                           }
                        </Slider>
                    </div>

                    <div className="my-12 sec_btn">
                        <Link href={'/ratings'}>See Player Ratings</Link>
                    </div>


                </div>


            </section>
        </main>
    )
}

export default Awards