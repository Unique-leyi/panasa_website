import Image from "next/image"
import Link from "next/link"


const Partner = ({image, path, content, title}) => {

    const handleOpenBlank = (e, url) => {
        e.preventDefault();
        window.open(url, "_blank")
    }

    return (
        <div className="shadow-md shadow-deep p-5 rounded-lg grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
            <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col justify-start items-start">
                    <Image src={image} alt={title.toLowerCase()} width={300} height={300} objectFit="contain"/>
                </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-8">
                <h3 className="uppercase text-deep font-bold text-xl xl:text-2xl">{title}</h3>
                <p className="text-sm font-medium">{content}</p>
                <Link href={path} target="_blank" passHref>
                    <a onClick={(e) => handleOpenBlank(e, path)} className="bg-deep cursor-pointer text-white text-sm py-3 px-5 rounded-md font-semibold hover:bg-sitepink">Visit Website</a>
                </Link>
            </div>
        </div>
    )
}

export default Partner