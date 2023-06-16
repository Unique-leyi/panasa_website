
import Image from 'next/image';



function CarouselItem(props) {

    return (
        <div className="w-96 h-96 relative border-[0.4rem] border-solid border-sitegreen rounded-md overflow-hidden">
                
                <Image src={props.image} width={100} height={100} layout="fill" objectFit='cover'  alt='Gallery'/>
            </div>
    )
}

export default CarouselItem