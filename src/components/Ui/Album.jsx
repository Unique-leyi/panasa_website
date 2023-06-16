
import Image from 'next/image';

function Album(props) {
    const active = `!bg-darkpurple`;
    const checkFilter = props.filter  === props.category ? active : " ";
   
    return (
        <div className={`${checkFilter} flex justify-center items-center flex-col lg:block  rounded-md shadow-lg shadow-lightblue bg-white p-4 cursor-pointer`} onClick={props.handleFilter} >
            <div className={`w-36 h-24 relative`}>
                <Image src={props.latest} alt={`PAN Logo`} width={100} height={100} layout="fill" objectFit="cover" className="rounded"/>
            </div>
            <div className="mt-4">
                <h4 className="text-deep font-semibold text-[1rem]">{props.category}</h4>
                <h5 className="text-[rgba(0,0,0,0.8)] font-light text-sm hover:text-white">{props.totalImages} images</h5>
            </div>
        </div>
    )
}

export default Album