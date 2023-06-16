
import { useState, useEffect } from "react";
import Search from "../Datatable/Search";
import { eventsData } from "../../../pages/api/events";
import NewsItem from "../News/NewsItem";
import Navigate from "../Ui/Navigate";
import ReactPaginate from "react-paginate";
import Spinner from "../Spinner/Spinner";

function Events() {
    //Search and Sorting through the Events
    const [search, setSearch] = useState("");
    const [loader, setLoader] = useState(false);

     //Paginate between News
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    

    useEffect(() => {

        let computedEvents = eventsData;

        //Filter the table data based on user search.
        if(search){

            setLoader(true);
            
            computedEvents = computedEvents.filter(
            eventItem => 
                eventItem.title.toLowerCase().includes(search.toLowerCase()) ||
                eventItem.location.toLowerCase().includes(search.toLowerCase())
                )
        }

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(computedEvents.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(computedEvents.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, search])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % eventsData.length;
        setItemOffset(newOffset);
  };

  const searchStyle = {
        container: "justify-center items-center w-[90%]",
        inputContainer: "w-full",
        inputBox: "w-full rounded-full",
        placeholder: "Search for Events",
    };

 

    return (
        <div className="my-2">

            <div className="w-full lg:max-w-[85%] lg:mx-auto lg:p-6 px-4 flex justify-center items-center flex-col">

                <Search 
                    handleSearch={
                        (value) => {
                            setSearch(value);
                            setCurrentItems(1);
                        }

                    }
        
                    searchStyle={searchStyle}
                    
                    />
            {currentItems.length > 0 ? 
                
            
             <div className="grid grid-cols-1 lg:grid-cols-3  justify-center lg:justify-start items-center lg:items-start gap-y-10 gap-x-6 my-4">

                    {
                        currentItems.map((item, i) => (
                            <NewsItem {...item} key={i}/>
                        ))

                    }
                </div>   
            :

            <div className="flex justify-center items-center">
                <p className="text-white text-center">No Event(s) Found!</p>
            </div>

            }
                

                <div className=" lg:max-w-[70%] lg:mx-auto flex justify-center items-center flex-col mt-20">

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


        </div>
    )
}

export default Events