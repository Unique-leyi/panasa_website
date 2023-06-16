import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'


function Photo(props) {


    return (
        <div className="flex justify-center items-center flex-col my-4 relative overflow-hidden rounded-md">
            <div className="w-full h-64 lg:w-full lg:h-72 relative overflow-hidden rounded-md cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out member-img">
                <Image src={props.image} alt="Member" width={100} height={100} objectFit={"cover"} layout="fill"/>
                <div className="member-more absolute top-0 left-0 w-full h-full bg-[rgba(79,134,252,0.4)] hidden justify-center items-center flex-col member-more">
                    <button onClick={props.handleOpenModal}>View</button>
                </div>
            </div>

            <div className="bg-[rgba(17,24,39,0.94)] absolute bottom-0 right-0 left-0 w-full p-4">
                <span className="text-white font-normal">{props.year}</span>
                <h5 className="text-white text-lg font-semibold">{props.event}</h5>
            </div>
            
        </div>
    )
}

export default Photo