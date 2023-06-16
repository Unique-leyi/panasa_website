import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'


function Video(props) {


    return (
        <div className="flex justify-center items-center flex-col my-4 relative">
            <div className="w-64 h-64 lg:w-72 lg:h-72 relative overflow-hidden rounded-md cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out member-img">
                <Image src={props.image} alt="Member" width={100} height={100} objectFit={"cover"} layout="fill"/>
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(79,134,252,0.4)] hidden justify-center items-center flex-col member-more">
                    <Link href={'/'}>Share</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Video