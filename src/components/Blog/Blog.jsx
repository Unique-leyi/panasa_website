import { useState, useEffect } from "react";
import { NewsData } from "../../../pages/api/newsdata"
import Post from "./Post"
import Navigate from "../Ui/Navigate";
import ReactPaginate from "react-paginate";
import SideBar from "../Sidebar/SideBar";
import Events from "./Events";
import Link from "next/link";




function Blog() {

    //Alternate Between Blog and News
    const [showEvent, setShowEvent] =  useState(false);


    //Paginate between News
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(NewsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(NewsData.length / itemsPerPage));

    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % NewsData.length;
        setItemOffset(newOffset);
  };

    return (
        <>
        { showEvent ?
            <section className={`bg-[rgba(17,24,39,0.95)] py-10`}>
                <div className='flex justify-start items-start cursor-pointer lg:w-[70%] lg:mx-auto'>
                    <button className="bg-darkpink hover:bg-sitegreen text-white py-2 px-6 rounded-lg border-none outline-none" onClick={() => setShowEvent(false)}>Back</button>
                </div>
                <Events/> 

            </section> 
            
            : 
            
            <section className={`bg-[rgba(17,24,39,0.95)] py-16`}>
                <div className="w-full lg:max-w-[90%] lg:mx-auto lg:p-6 px-4 grid grid-cols-1 lg:grid-cols-3  justify-center lg:justify-start items-center lg:items-start gap-y-5 gap-x-16">

                    <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
                        {
                            currentItems.map((item, i) => (
                                <div className="w-full flex-1 flex-col my-8" key={i}>
                                    <Post {...item}/>
                                </div>
                            ))
                        }

                        <div className="lg:max-w-[70%] lg:mx-auto flex justify-center items-center flex-col">

                            <ReactPaginate
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                renderOnZeroPageCount={null}
                                breakLabel="..."
                                previousLabel={<Navigate side={"left"}/>}
                                nextLabel={<Navigate side={"right"}/>}
                                previousClassName="flex justify-center items-center "
                                previousLinkClassName="flex justify-center items-center"
                                nextClassName="flex justify-center items-center !text-white"
                                nextLinkClassName="flex justify-center items-center !text-white"
                                containerClassName="flex justify-center items-center"
                                pageClassName="flex justify-center items-center"
                                pageLinkClassName="bg-transparent hover:bg-deep hover:text-ash border-2 border-solid border-white transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-white text-lg"
                                activeLinkClassName="active-part"
                            />

                        </div>


                    </div>

                    <div className="col-span-1">
                        <SideBar handleEvent={() => setShowEvent(true)}/>
                    </div>
                </div>

                
            </section>
            
            }
        </>
    )
}

export default Blog