
import { useState, useEffect } from "react";
import { eventsData } from "../../../pages/api/events";
import NewsItem from "../News/NewsItem";
import ReactPaginate from 'react-paginate';
import Navigate from '../Ui/Navigate';



function SideBar(props){


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(eventsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(eventsData.length / itemsPerPage));

    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % eventsData.length;
        setItemOffset(newOffset);
  };

    return (
        <article className="bg-ash rounded-md p-0  overflow-hidden">
            <div className="py-5 px-2  flex justify-center items-center flex-col bg-[rgb(37,51,82)]">
                <h3 className="text-siteblue font-extrabold text-2xl my-1">Upcoming Events</h3>
                <p className="text-sm text-white text-center">Check Out the Various Events Happening Across PANASA </p>
            </div>

            <div className="grid grid-col-1  gap-y-5 my-4">
                {currentItems &&
                    currentItems.map((item, i) => (
                        <NewsItem key={i} {...item}/>
                    ))
                }
            </div>

            <div className="mb-4 flex justify-center items-center flex-col flex-1">
                
                <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
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
                        pageLinkClassName="bg-transparent hover:bg-deep hover:text-white border-2 border-solid border-deep transition-all duration-150 py-1 px-2 mx-2 rounded-md text-center text-deep text-sm"
                        activeLinkClassName="active-part"
                    />

            </div>
             <hr className="border-t-[1px] border-solid border-[#24333e] lg:my-4 block"/>
            <div className='my-4'>
                <div className='bg-darkpink hover:bg-sitegreen gallery_carousel lg:w-[80%] lg:mx-auto text-white py-2 px-6 rounded-lg flex justify-center items-center cursor-pointer'>
                    <button onClick={props.handleEvent}>See Full Events</button>
                </div>
            </div>  

        </article>
    )
}

export default SideBar