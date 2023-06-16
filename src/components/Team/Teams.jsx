import Image from 'next/image'
import MajorText from '../Ui/MajorText'
import { teamData } from '../../../pages/api/teamData.js'
import Team from  './Team'





function Teams() {
// bg-[#061b06e1]

    return (
        <main className={`mt-12`}>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-between items-center lg:w-[80%] lg:mx-auto my-10 lg:p-0 p-6">

                <div className="py-6">
                    <div className="py-2">
                        <span className="font-semibold uppercase tracking-widest text-lg text-darkpurple">Our Principal</span>
                        <h3 className="text-3xl lg:text-5xl font-extrabold text-deep">Message From The President</h3>
                    </div>

                    <div className="my-3">
                        <p className="text-[1rem] font-normal italic">{'"'}With the worst of the Covid years behind us, 2022 saw the resumption of in-person tournaments on the continent of Africa. The year 2022 also saw the change of guard at the PANASA. I was elected President, taking over from Mohammed Kamara who had the difficult task of running the Association during the pandemic. PANASA remains grateful to Moh for his years of Service.</p>

                        <p className="text-[1rem] font-normal my-3 italic">As we look ahead to 2023, Africa should be excited for what is to come. With ECASA, WASC, WESPA Championship and the First African Youth Scrabble Championship all planned.{'"'}</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-full h-96 relative border-4 border-solid border-sitepurple rounded-md">
                            <Image src={require("../../assets/images/sheikh.jpg")} alt={"PANASA President"} width={100} height={100} objectFit={"cover"} layout={"fill"}/>
                        </div>

                        {/* <div className="w-72 h-96 relative">
                            <Image src={require("../../assets/images/sheikh.jpg")} alt={"PANASA President"} width={100} height={100} objectFit={"cover"} layout={"fill"}/>
                        </div> */}
                    </div>
                </div>

            </section>



            <section className="bg-siteblue rounded-t-md mt-10 py-16 lg:px-0 px-3">
                <div className="flex justify-center items-center flex-col lg:w-[80%] lg:mx-auto py-16">
                   <span className="font-semibold uppercase tracking-widest text-xl text-white">Our Officials</span>
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-deep">Meet The Team</h3> 
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 justify-between items-center lg:w-[85%] lg:mx-auto bg-white shadow-sm lg:shadow-lg shadow-deep rounded-md overflow-hidden py-28 px-12">
                    {
                        teamData.map((item,i) => (
                            <Team key={i} {...item}/>
                        ))
                    }
                </div>


            </section>
        </main>
    )
}

export default Teams