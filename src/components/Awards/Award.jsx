import Image from 'next/image'



function Award(props) {


    return (
        <div className="flex justify-center items-center flex-col bg-deep rounded-md mx-3 lg:mx-2 p-4">
            <div className="w-[10rem] h-[10rem] lg:w-[8rem] lg:h-[8rem] relative">
                <Image className="!border-4 !border-solid !border-siteblue rounded-full" src={props.awardee} alt={'scrabble board'} layout="fill" objectFit="cover" width={100} height={100}/>
            </div>

            <div className="my-1 flex justify-center items-center flex-col">
                <h4 className="text-lg text-white font-bold">{props.name}</h4>
                <span className="my-1 text-ash text-lg font-light">{props.year}</span>
            </div>
        </div>
    )
}

export default Award