import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faCamera, faArrowRight, faMedal } from "@fortawesome/free-solid-svg-icons";

function GalleryItem(props) {
   
   
    return (
        <div className="relative my-6 lg:my-0 w-72 mx-10">
            <div className="transition duration-300 ease-in-out cursor-pointer my-6 lg:my-0 w-72 mx-5 h-72 object-cover gallery_bg relative border-4 border-solid border-secondary rounded-md overflow-hidden">
                <Image src={props.image} layout="fill" objectFit='cover'  alt='Gallery'/>
            </div>
                <div className="absolute cursor-pointer flex justify-start items-start flex-col bottom-[0.1px] left-0 w-full bg-[#f8f6f6] z-[5] p-3 -mb-10 material rounded-r-md rounded-b-md">
                   <div  className="flex justify-center lg:justify-between items-center flex-row">
                    <FontAwesomeIcon icon={faMedal} style={{ fontSize: 20, color: "#12183b", fontWeight: "lighter", display: "block" }} className="mx-2"/>
                    <h5 className="font-bold text-[1rem] my-2 text-[#000] rounded-md">{props.tournament}</h5>
                   </div>

                   <div className="flex my-1 news_btn bg-secondary hover:bg-btncolor justify-start items-center w-36 rounded-lg py-2 px-3">
                        <Link href={`/gallery`} className="text-white">See More</Link>
                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 15 }} className="mx-2 text-white"/>
                    </div>
                </div>
            </div>
    )
}

export default GalleryItem