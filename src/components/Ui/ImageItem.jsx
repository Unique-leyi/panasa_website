import Image from "next/image"

function ImageItem(props) {

// bg-[#0c240c]
    return (
        <div className="gallery_item flex-1 py-6 px-4 mx-3 shadow-sm shadow-lightsecondary my-4 overflow-hidden flex justify-start items-center rounded-md flex-col bg-white cursor-pointer hover:bg-darkblue transition-all duration-300 ease-in-out relative hover:scale-105">

            <div className="my-1 absolute top-0 right-0 z-10">
                <span className="caption block">GSF</span>
                <span className="caption block">2022</span>
            </div>

            <div className="w-[20rem] h-72 lg:w-72 lg:h-72 rounded-md overflow-hidden relative">
                <Image src={props.image} alt="Gallery item" width={100} height={100} layout="fill" objectFit="cover"/>
            </div>

            <div className="in-view absolute bottom-0 left-0 right-0 hidden justify-center items-center my-2">
                <button className="w-1/2 bg-sitered text-white p-2 rounded-md border-none outline-none text-[1rem] font-medium" onClick={props.handleViewFull}>View in Full</button>
            </div>
        </div>
    )
}

export default ImageItem