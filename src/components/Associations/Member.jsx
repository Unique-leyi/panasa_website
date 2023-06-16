import Image from 'next/image'


function Member(props) {


    return (
        <div className="flex justify-center items-center flex-col my-4 relative">
            <div className="shadow-lg shadow-sitepurple w-64 h-64 lg:w-60 lg:h-60 relative overflow-hidden rounded-md cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out member-img">
                <Image src={props.symbol} alt="Member" width={100} height={100} objectFit={"cover"} layout="fill"/>
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] hidden justify-center items-center flex-col member-more">
                    <button onClick={props.handleOpenDetail}>More info</button>
                </div>
            </div>

            <div className="font-bold text-lg my-2">
                <h4>{props.member}</h4>
            </div>

            
        </div>
    )
}

export default Member