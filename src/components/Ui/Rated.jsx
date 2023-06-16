import Image from "next/image"


function Rated(props) {


    return (
        <div className="flex justify-center items-center flex-col shadow-sm shadow-deep rounded-md mx-3 overflow-hidden mb-4">
            <div className="bg-darkblue w-full flex justify-center items-center flex-col p-2  ">
                <div className="w-32 h-32 relative my-4 rounded-full border-4 border-solid border-white overflow-hidden">
                    <Image src={props.userImg} width={100} height={100} objectFit="cover"  layout="fill" alt="Rated image"/>
                </div>
            </div>

            <div className="py-6 bg-ash w-full flex justify-center items-center flex-col px-2">
                <h5 className="text-deep font-extrabold text-lg">{props.name}</h5>
                <span className="text-sitepink text-sm font-semibold">{props.rating}</span>
                <h3 className="text-darkblue text-[1rem] font-bold">{props.country}</h3>
            </div>
        </div>
    )
}

export default Rated