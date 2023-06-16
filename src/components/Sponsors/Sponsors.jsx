import Link from 'next/link'
import styles from './Sponsor.module.css'
import Slider from 'react-slick'
import Sponsor from './Sponsor'
import MajorText from '../Ui/MajorText'

function Sponsors() {
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

    const SPONSOR = [
        {
            sponsor: require('../../assets/images/ojeyz.jpeg'),
        },

        {
            sponsor: require('../../assets/images/ayoci.jpeg'),
        },

        {
            sponsor: require('../../assets/images/atelier.jpeg'),
        },

        {
            sponsor: require('../../assets/images/socialiga.jpeg'),
        },

    ];
   
    return (
        <section className={`mt-40 lg:my-0 bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col`}>
            <div className="w-full flex justify-center items-center flex-col">
                 <MajorText miniText={`Backed and Supported By`} majorText={`Sponsors and Partners`}/>

                {/* News Slider Carousel */}
                    <div className="w-full mt-10 bg-ash p-6">
                        <Slider {...settings}>
                            {
                                SPONSOR.map((item, i) => (
                                    <Sponsor key={i} {...item}/>
                                ))
                            }
                        </Slider>
                    </div>

            </div>


        </section>
    )
}

export default Sponsors