import { useState, useEffect } from 'react';
import Image from "next/image";
import Photo from './Photo';
import ReactPaginate from 'react-paginate';
import Navigate from '../Ui/Navigate';
import { IMG_CATALOGUE } from '../../../pages/api/catalogues';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import {  faChevronLeft, faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";



function Catalogue() {


    // Paginate
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(IMG_CATALOGUE.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(IMG_CATALOGUE.length / itemsPerPage));

    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % IMG_CATALOGUE.length;
        setItemOffset(newOffset);
  };


  // Modal
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [galleryImages, setGalleryImages] = useState();

     // Opens the Modal
    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setGalleryImages(currentItems);
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
  


    return (
        <main className={`p-0`}>

            <section className="mt-12 flex-col py-6 lg:py-10">
                <div className="lg:max-w-[90%] lg:mx-auto my-10 lg:my-20 lg:p-0 p-4">
                    <span className="text-darkblue text-lg tracking-widest uppercase">Images</span>
                    <h3 className="font-extrabold text-xl lg:text-4xl text-deep">Images Gallery</h3>
                </div>


                {openModal && 
                    <div className="flex justify-center items-center flex-col fixed z-10 p-3 lg:p-10 left-0 top-0 bottom-0 right-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.8)]">
                        <FontAwesomeIcon icon={faChevronLeft}  style={{ fontSize: 20, color: 'white' }} className="carousel_btn prev_btn" onClick={prevSlide}/>
                        <FontAwesomeIcon icon={faChevronRight}  style={{ fontSize: 20, color: 'white' }} className="carousel_btn next_btn" onClick={nextSlide}/>
                        <FontAwesomeIcon icon={faClose}  style={{ fontSize: 30, color: 'white', fontWeight: 'bolder' }} className="carousel_btn close" onClick={handleCloseModal}/>

                        

                        {
                             <>
                            <div className="w-full h-64 lg:w-1/2 lg:h-1/2 relative">
                                <Image src={galleryImages[slideNumber].image} alt={`PAN gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
                            </div>

                            <div className="flex justify-center items-center flex-col my-4">
                                <span className="text-white font-normal">{galleryImages[slideNumber].year}</span>
                                <h5 className="text-white text-lg font-semibold">{galleryImages[slideNumber].event}</h5>
                            </div>
                            </>
                        }

                            

                    </div>
                }

                <div className="lg:max-w-[90%] lg:mx-auto my-2 py-4 grid grid-cols-1 lg:grid-cols-4 justify-around items-center gap-8 lg:p-0 px-5">

                    {
                        currentItems.map((item, i) => (
                            <Photo key={i} {...item} handleOpenModal={() => handleOpenModal(i)}/>
                        ))
                    }

                </div>


                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    breakLabel="..."
                    previousLabel={<Navigate side={"left"}/>}
                    nextLabel={<Navigate side={"right"}/>}
                    previousClassName="flex justify-center items-center"
                    previousLinkClassName="flex justify-center items-center"
                    nextClassName="flex justify-center items-center"
                    nextLinkClassName="flex justify-center items-center"
                    containerClassName="flex justify-center items-center mt-10"
                    pageClassName="flex justify-center items-center"
                    pageLinkClassName="bg-transparent hover:bg-deep hover:text-white border-2 border-solid border-deep transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-deep text-lg"
                    activeLinkClassName="active-part"
                />
            </section>

            
            
        </main>
    )
}

export default Catalogue