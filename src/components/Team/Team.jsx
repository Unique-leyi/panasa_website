import Image from 'next/image'

function Team(props) {

// bg-[#071607]
// bg-[#0c240c]
    return (
        <div className="my-6 bg-darkpurple rounded-b-lg px-6">
            <div className="-translate-y-12  flex justify-center items-center flex-col bg-white shadow-xl shadow-[rgba(0,0,0,0.6)] rounded-md overflow-hidden cursor-pointer hover:opacity-80 hover:scale-[1.02] transition-transform duration-300 ease-in">
                <div className="w-full bg-[#400080] flex justify-center items-center flex-col py-6 ">
                    <div className="w-32 h-32 relative overflow-hidden rounded-full border-4 border-solid border-white">
                        <Image src={props.image} alt={`PANASA ${props.occupation}`} width={100} height={100} objectFit={"cover"} layout={"fill"}/>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col my-6">
                    <h3 className="font-bold text-[#400080] text-xl mt-2">{props.name}</h3>
                    <h5 className="font-semibold text-[#39393a] text-sm">{props.occupation}</h5>
                    <p className="font-light text-sm  text-center my-2 px-4">{props.details.slice(0,60)}</p>
                </div>
            </div>


            <div className='flex justify-center items-center mb-8'>
                <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-facebook-circle-fill text-lg"></i></a>
                <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-instagram-fill text-lg"></i></a>
                <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-twitter-fill text-lg"></i></a>
            </div>


        </div>
    )
}

export default Team