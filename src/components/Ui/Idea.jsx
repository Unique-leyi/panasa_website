import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import {  faChevronLeft, faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import COLLECTIONS from "../../../pages/api/collections";
import MajorText from './MajorText';
import Album from './Album';

function Idea() {
   
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

    // previous slide

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length -1) : setSlideNumber(slideNumber - 1);
    }

    // next slide
    
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    }

    // Shuffling between differrent images
    const [filter, setFilter] = useState("PAN 1");
    const [data, setData] = useState();

    // Filtering the data

    useEffect(() => {

        if(filter == "PAN 1"){
            const SelectedData = COLLECTIONS.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }

        if(filter == "PAN 2"){
            const SelectedData = COLLECTIONS.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }

        if(filter == "PAN 3"){
            const SelectedData = COLLECTIONS.filter(item => item.category === filter);
            setData(SelectedData);
            setGalleryImages(SelectedData[0].setofImages);
        }


    }, [filter]);

    

    return (
        <section className={`w-full flex justify-center items-center flex-col p-3 lg:p-6 bg-[#e6eeff]`}>

            <MajorText miniText={`Our Catalogue of Past Events`} majorText={`Gallery`}/>

                <div className="my-10 bg-white shadow-sm lg:shadow-lg shadow-darkblue w-full lg:max-w-[90%] lg:mx-auto rounded-md overflow-hidden">

                {openModal && 
                    <div className="flex justify-center items-center flex-col fixed z-10 p-3 lg:p-10 left-0 top-0 bottom-0 right-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.8)]">
                        <FontAwesomeIcon icon={faChevronLeft}  style={{ fontSize: 20, color: 'white' }} className="carousel_btn prev_btn" onClick={prevSlide}/>
                        <FontAwesomeIcon icon={faChevronRight}  style={{ fontSize: 20, color: 'white' }} className="carousel_btn next_btn" onClick={nextSlide}/>
                        <FontAwesomeIcon icon={faClose}  style={{ fontSize: 30, color: 'white', fontWeight: 'bolder' }} className="carousel_btn close" onClick={handleCloseModal}/>

                        

                        {
                                
                            <div className="w-full h-64 lg:w-1/2 lg:h-1/2 relative">
                                <Image src={galleryImages[slideNumber].image} alt={`PAN gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
                            </div>
                        }

                            

                    </div>
                }

                
                
                
                <div className="flex justify-between items-center lg:flex-row flex-col">
                    <div className="lg:w-3/4 lg:py-6 py-3 lg:px-20 px-4">
                        <div className="my-4">
                            {
                                    data?.map((item, i) => (
                                        <h4 className="text-secondary text-3xl font-bold" key={i}> {item.category}</h4> 
                                    ))
                            }
                        </div>

                        
                
                        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-1 items-center gap-3 shadow-inner rounded-md shadow-sitepurple p-2 my-6">

                            {
                                data?.map((item) => {
                                    return item.setofImages.map((item, i) => (
                                    <Image src={item.image} alt={`PAN Logo`} className="rounded-sm transition-all duration hover:opacity-70 cursor-pointer modal-content" onClick={() => handleOpenModal(i)} key={i}/>  
                                    ))
                                    
                                })
                            }
                            
                            
                        </div>

                        <div className='my-8'>
                            <div className='bg-darkpink hover:bg-sitegreen gallery_carousel lg:w-[60%] lg:mx-auto text-white py-4 px-10 rounded-lg flex justify-center items-center cursor-pointer'>
                                <Link href={`/gallery`}>CheckOut More Photos</Link>
                            </div>
                        </div>

                    </div>
                

                        

                    <div className="lg:w-1/4 grid grid-cols-2 grid-rows-2 lg:flex justify-center items-center flex-col gap-6 bg-lightash p-6">

                        {
                            COLLECTIONS.map((item, i) => (
                                <Album key={i} filter={filter} latest={item.setofImages[item.setofImages.length - 1].image} category={item.category} totalImages={item.setofImages.length} handleFilter={() => setFilter(item.category)}/>
                                
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Idea