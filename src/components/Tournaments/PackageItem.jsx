import Image from "next/image"

function PackageItem(props) {
    return (
        <div className="my-2">
           <div className="relative w-full h-96 lg:h-80 rounded-lg border-2 shadow-xl shadow-[rgba(0,0,0,0.6)] overflow-hidden border-sitepink">
                <Image src={props.image} alt="aysc" objectFit={"cover"} layout={"fill"}/>
            </div>

            <div className="my-6 flex lg:items-start items-center flex-col">
                <span className="py-4 px-6 outline-none border-none rounded-lg text-lg font-bold text-white bg-darkpink hover:bg-darkpink cursor-pointer">{props.title}</span>
            </div>
        </div>
    )
}

export default PackageItem