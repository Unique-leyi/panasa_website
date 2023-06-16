import { useState, useEffect } from "react"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick';
import { galleryData } from "../../../pages/api/gallerydata";
import FilterBtn from "./FilterBtn";
import ImageItem from "./ImageItem"


function ImageBox() {

    // slider
    const settings = {
        dots: false,
        autoplay: true,
        speed:1000,
        autoplaySpeed:5000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
    }

    // Modal
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [galleryImages, setGalleryImages] = useState();

     // Opens the Modal
    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    //Close the Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    }


    // Shuffling between differrent images
    const [filter, setFilter] = useState("GSF 1");
    const [data, setData] = useState();

      // Filtering the data

    useEffect(() => {

        if(filter == "GSF 1"){
            const SelectedData = galleryData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }

        if(filter == "GSF 2"){
            const SelectedData = galleryData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }

        if(filter == "GSF 3"){
            const SelectedData = galleryData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }

        if(filter == "GSF 4"){
            const SelectedData = galleryData.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }


    }, [filter]);

    const active = `bg-secondary text-white lg:bg-secondary lg:text-white border-none outline-none py-2 px-6 rounded-md font-semibold text-sm cursor-pointer hover:bg-secondary hover:text-white font-montserrat mx-2`;

// bg-[#0c240c]
    return (
        <section className={`w-full lg:max-w-[80%] lg:mx-auto lg:py-20 lg:px-4`}>

            
                {openModal && 
                    <div className="flex justify-center items-center flex-col fixed z-20 p-6 left-0 top-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
                        <FontAwesomeIcon icon={faClose}  style={{ fontSize: 30, color: 'white', fontWeight: 'bolder' }} className="carousel_btn close" onClick={handleCloseModal}/>

                        

                        {
                                
                            <div className="w-full h-64 lg:w-1/2 lg:h-1/2 relative">
                                <Image src={galleryImages[slideNumber].image} alt={`GSF gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
                            </div>
                        }

                            

                    </div>
                }

           <div className="flex justify-start lg:justify-between items-start lg:items-center my-10 lg:flex-row flex-col">
                <div className="w-full lg:p-0 px-5">
                    <h5 className="font-semibold text-lg text-lightgreen">Some of Our Cherished Moments</h5>
                    <h3 className="text-secondary text-2xl lg:text-3xl font-bold">Our Gallery</h3>
                </div>



                <div className="filter-btn mx-12 w-56 lg:my-0 lg:mx-auto my-12 !block">
                    <Slider {...settings}>
                        {
                            galleryData.map((item, i) => (
                                <FilterBtn key={i} filter={filter} title={item.category} handleSetFilter={() => setFilter(item.category)}/>
                            ))
                        }
                    </Slider>
                </div>
           </div>


           <div className="flex flex-wrap transition-all duration-1000 ease-in-out bg-lightash rounded-md p-4">
                {
                    data?.map((item) => {
                        return item.setofImages.map((item, i) => (
                        <div className="w-full lg:w-1/3 flex-1" key={i}>
                                <ImageItem image={item.image} handleViewFull={() => handleOpenModal(i)} />
                        </div> 

                        ))
                        
                    })
                }
           </div>
        </section>
    )
}

export default ImageBox