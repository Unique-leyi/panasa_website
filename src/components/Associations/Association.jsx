import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Member from './Member'
import { Members } from '../../../pages/api/asc_collection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from 'react-paginate';
import Navigate from '../Ui/Navigate';


function Association() {

    const [openDetail, setOpenDetail] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [members, setMembers] = useState();



    const handleOpenDetail = (index) => {
        setOpenDetail(true);
        setSlideNumber(index);
        setMembers(Members);
    }

    //Close the Modal
    const handleCloseDetail = () => {
        setOpenDetail(false);
    }


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(Members.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(Members.length / itemsPerPage));

    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Members.length;
        setItemOffset(newOffset);
  };


    


    return (
        <main className={`p-0`}>

            <section className="lg:max-w-[80%] lg:mx-auto lg:p-0 p-4 flex justify-center items-center mt-12 flex-col">
                <h3 className="text-center font-extrabold text-3xl lg:text-5xl text-deep my-2 uppercase">PANASA Member Associations</h3>
                <p className="text-sm text-center my-2"> PANASA, through our extensive network of Associations, represents a global community of thousands of dedicated Scrabble players. Click on the national flag for more information on your country{"'"}s national Association. You will find useful contact information for member countries. For all enquiries about new Associations joining PANASA or if you want to know if there are any local players in your country and it is not listed below, then you can contact us here, or, on social media, via Facebook or Twitter. For any corrections to this page, please email us.</p>
            </section>

             {openDetail && 
                    <div className="flex justify-center items-center flex-col fixed z-[60] py-20 px-6 lg:p-10 left-0 top-0 bottom-0 right-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.8)]">

                         <FontAwesomeIcon icon={faClose}  style={{ fontSize: 30, color: 'white', fontWeight: 'bolder' }} className="carousel_btn close_btn" onClick={handleCloseDetail}/>

                        <div className="lg:w-[60%] my-10 lg:mt-20 lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-0 bg-white rounded-md shadow-md shadow-[rgba(0,0,0,0.5)] lg:overflow-x-hidden overflow-auto">
                            <div className="flex justify-around lg:justify-center items-center lg:flex-col flex-row bg-darkblue p-5 lg:py-20 lg:px-20">
                                <div className="">
                                    <div className="w-16 h-16 lg:w-40 lg:h-40 relative overflow-hidden rounded-full outline outline-4  outline-white border-[6px] border-solid border-deep">
                                        <Image src={members[slideNumber].symbol} alt={`PAN gallery`} className="modal-content" width={100} height={100} objectFit="cover" layout="fill"/>
                                    </div>
                                </div>

                                <div className="my-6">
                                    <h4 className="font-semibold uppercase text-2xl text-white">{members[slideNumber].initials}</h4>
                                </div>

                            </div>

                            <div className="col-span-2">
                                {/* Bio */}

                                
                                <div className="w-full flex justify-center items-center flex-col">

                                    <div className="py-5 px-6 border-b-[1px] border-solid border-[rgba(0,0,0,0.3)]">
                                        <div className="w-full flex justify-center lg:justify-end items-center lg:items-end flex-wrap">
                                            <h4 className="font-extrabold text-2xl lg:text-3xl uppercase">{members[slideNumber].member}</h4>
                                        </div>

                                        {
                                            members[slideNumber].details.map((item, i) => (

                                                <div className="my-1" key={i}>
                                                    <p className="text-sm text-center lg:text-right">Welcome To {item.association} Association Information and Contact Page.</p>
                                                </div>
                                            ))
                                        }

                                        
                                    </div>

                               {
                                    members[slideNumber].details.map((item, i) => (
                                        <div key={i}>
                                        <div className="w-full flex justify-between items-center lg:flex-row flex-col lg:gap-x-4 gap-y-8 my-5 px-6">

                                    
                                            {item.chairman && 

                                                <div className="flex items-start w-full">
                                                    <div className="flex justify-center items-center border-2 border-darkpink border-solid rounded-md p-2">
                                                        <i class="ri-user-star-fill text-xl font-bold text-darkpink"></i>
                                                    </div>

                                                    <div className="mx-4">
                                                        <h4 className="font-bold text-[1rem]">Chairman/President:</h4>
                                                        <h3 className="font-medium text-sm">{item.chairman}</h3>
                                                    </div>

                                                </div>
                                            }

                                            {item.secretary && 
                                                <div className="flex items-start w-full">
                                                    <div className="flex justify-center items-center border-2 border-darkpink border-solid rounded-md p-2">
                                                        <i class="ri-user-star-fill text-xl font-bold text-darkpink"></i>
                                                    </div>

                                                    <div className="mx-4">
                                                        <h4 className="font-bold text-[1rem]">Secretary:</h4>
                                                        <h3 className="font-medium text-sm">{item.secretary}</h3>
                                                    </div>

                                                </div>

                                            }

                                        {item.contact_person && 
                                        
                                            <div className="flex items-start w-full">

                                                <div className="flex justify-center items-center border-2 border-darkpink border-solid rounded-md p-2">
                                                    <i class="ri-phone-fill text-xl font-bold text-darkpink"></i>
                                                </div>

                                                <div className="mx-4">
                                                    <h4 className="font-bold text-[1rem]">Contact(s):</h4>
                                                    <h3 className="font-medium text-sm">{item.contact_person}</h3>
                                                </div>

                                            </div>

                                        }

                                </div>


                                 <div className="w-full flex justify-between items-center gap-x-4 bg-ash py-8 px-2">
                                        <div className="mx-4">
                                            <h4 className="font-bold text-[1rem]">Top PANASA Ranked Player:</h4>
                                            <h3 className="font-medium text-sm">{item.top_player}</h3>
                                        </div>

                                        <div className="mx-4">
                                            <h4 className="font-bold text-[1rem]">No. of PANASA Rated Players:</h4>
                                            <h3 className="font-medium text-sm">{item.top_rated}</h3>
                                        </div>
                                </div>

                                </div>

                                    ))
                                }

                                </div>
                                
                                {/* Socials */}

                                    {
                                        members[slideNumber].details.map((item, i) => {
                                            return item.social_media.map((social) => (
                                                <div key={i}>
                                                    <div className="bg-deep py-4 px-5">
                                                        <h5 className="text-sm font-normal mb-4 lg:mb-2 text-ash mx-2">Our Social Media Platforms:</h5>
                    
                                                        <div className="flex justify-start items-start lg:flex-nowrap flex-wrap lg:gap-x-4 gap-y-3">
                                                            { social.fb_group && <Link href={social.fb_group}>
                                                                <div className="flex items-center flex-wrap cursor-pointer">
                                                                    <a href={social.fb_group} className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-white"><i className="ri-facebook-circle-fill text-sm"></i></a>
                                                                    <h5 className="text-sm text-white hover:text-darkblue">{social.fb_group}</h5>
                                                                </div>
                                                            </Link>
                                                            }
                                                            
                                                            {/* { social.fb_page && <Link href={"/"}>
                                                                <div className="flex items-center flex-wrap cursor-pointer">
                                                                    <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-white"><i className="ri-instagram-fill text-sm"></i></a>
                                                                    <h5 className="text-sm text-white hover:text-darkblue">{social.fb_page}</h5>
                                                                </div>
                                                            </Link>

                                                            }
                                                             */}

                                                            { item.website && <Link href={item.website}>
                                                                <div className="flex items-center flex-wrap cursor-pointer">
                                                                    <a href={item.website} className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-white"><i class="ri-global-fill"></i></a>
                                                                    <a href={item.website} className="text-sm text-white hover:text-darkblue">{item.website}</a>
                                                                </div>
                                                            </Link>

                                                            }
                    
                                                            
                                                            
                                                        </div>
                                                    </div>

                                                </div>
                                            ))
                                        })
                                    }

                            </div>

                                
                        </div>

                            

                    </div>
                 }

            <section className="bg-ash py-20 mt-20">
                <div className="lg:max-w-[80%] lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center">
                    {currentItems &&
                        currentItems.map((item, i) => (
                            <Member key={i} {...item} handleOpenDetail={() => handleOpenDetail(i)}/>
                        ))
                    }
                </div>

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
                    pageLinkClassName="bg-transparent hover:bg-deep hover:text-white border-2 border-solid border-deep transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-deep text-lg"
                    activeLinkClassName="active-part"
                />
            </section>
            
        </main>
    )
}

export default Association