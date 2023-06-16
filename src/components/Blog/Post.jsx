import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPenSquare, faComment, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";



function Post(props) {
    return (
        <div className="p-2 flex justify-center items-center flex-col relative bg-lightash shadow-sm shadow-lightsecondary rounded-md cursor-pointer">
            <div className="w-full h-[22rem] lg:h-96 relative rounded-md p-2 mb-16">
                <Image src={props.image} alt="post image" className="rounded-md post-img" objectFit="cover" width={100} height={100} layout="fill"/>
                <div className="absolute top-0 my-1 left-2 p-3 bg-deep border-2 border-solid border-white flex justify-center items-center flex-col flex-wrap">
                    <h6 className="font-semibold text-[1rem] text-white">{props.month}</h6>
                    <h4 className="font-bold text-darkblue text-lg">{props.day}</h4>
                </div> 
            </div>
            <div className="flex-1 p-4 my-6 bg-white rounded-sm shadow-2xl shadow-boldash absolute bottom-1 left-0 right-0 w-full lg:w-[90%] lg:mx-auto flex justify-start items-start flex-col flex-wrap material">
                <div className="my-3 p-3">
                    <span className="text-sitegreen text-sm mb-1">PANASA</span>
                    <h4 className="font-bold text-[#000] text-xl hover:text-darkblue">
                       <Link href={"/"}>{props.title}</Link>
                    </h4>
                </div>

               
            </div>
        </div>
    )
}

export default Post