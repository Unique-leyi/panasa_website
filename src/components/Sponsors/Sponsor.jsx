import Link from 'next/link'
import Image from 'next/image'

function Sponsor(props) {
   
   
    return (
        <div className="bg-[transparent] rounded-lg my-4 lg:my-0  mx-5 overflow-hidden p-4 flex justify-center items-center flex-wrap lg:block">
            <div className="bg-sitered flex lg:justify-between justify-around items-center lg:flex-row flex-col">
                <div className="rounded-full p-2 w-full flex justify-center items-center flex-wrap">
                    <div className="w-36 h-36 lg:w-40 lg:h-40 relative">
                        <Image src={props.sponsor} alt={"Sponsor"} className="!border-4 !border-solid !border-darkpurple !rounded-full" width={400} height={400} objectFit="contain"/>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Sponsor