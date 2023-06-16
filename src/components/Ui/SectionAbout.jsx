import Image from 'next/image'
import Link from 'next/link'


function SectionAbout() {


    return (
        <section className={`lg:max-w-[90%] lg:mx-auto my-20 lg:p-0 p-4`}>

            <div className="flex lg:justify-around justify-center items-center lg:flex-row flex-col">


                 <div className="flex-1 flex justify-center items-center flex-col flex-wrap">

                    <div className="w-[10rem] h-[10rem] lg:w-64 lg:h-64 relative !-mb-8">
                        <Image className="!border-4 !border-solid !border-sitepurple rounded-full" src={require('../../assets/images/scrabble_2.png')} alt={'scrabble board'} layout="fill" objectFit="cover" width={100} height={100}/>
                    </div>


                    <div className="flex justify-around items-center gap-1">
                        <div className="w-[10rem] h-[10rem] lg:w-60 lg:h-60 relative ">
                            <Image className="!border-4 !border-solid !border-sitepurple rounded-full" src={require('../../assets/images/scrabble_1.png')} alt={'scrabble board'} layout="fill" objectFit="cover" width={100} height={100}/>
                        </div>


                        <div className="w-[10rem] h-[10rem] lg:w-60 lg:h-60 relative">
                            <Image className="!border-4 !border-solid !border-sitepurple rounded-full" src={require('../../assets/images/scrabble_3.png')} alt={'scrabble board'} layout="fill" objectFit="cover" width={100} height={100}/>
                        </div>

                    </div>

                    
                </div>

                 <div className="my-16 lg:mx-8 flex-1">
                    <h3 className="text-sitepink font-bold text-xl">History of PANASA</h3>
                    <h5 className="my-2 text-3xl lg:text-4xl font-[800] text-deep">How It All Began</h5>
                    <div className="page-btn">
                        <p className="my-2 text-[1rem] text-darkash">PANASA is an international sporting association, a non-governmental, having its own juridical status.</p>

                        <p className="my-4 text-[1rem] text-darkash"> PANASA, founded in 1994, consists of all African National Scrabble Associations which are also participating countries of the World Scrabble Championships (WSC) and recognized by WSB as the official bodies controlling Scrabble in their respective countries.</p>
                            
                        <p>Those in attendance during the formative meeting were:</p>

                        <ul>

                            <li>1. Mr. Francis Wachira (Kenya)</li>
                            <li>2. Mr. Ricahrd Andabwa (Kenya)</li>
                            <li>3. Ms. Cecilia Ruto (Kenya)</li>
                            <li>4. Dr. Michael Gongolo (Kenya)</li>
                            <li>5. Lt. Col Gold Eburu (Nigeria)</li>
                            <li>6. Mr. Larry Ojoko	(Nigeria)</li>
                            <li>7. Mr. Larry Benjamin (South Africa)</li>

                        </ul>

                        <p className="my-2 text-[1rem] text-darkash">
                            The main objective of the association then was to develop Scrabble play in Africa and organize a biennial Scrabble Championship amongst member countries. The 14th edition of the ASC held in Lusaka, Zambia from the 21st – 24th October 2022. 
                        </p>


                        <p className="text-[1rem] text-darkash">
                            The idea of a Pan-African Scrabble Championship was the brainchild of the Kenya Amateur Scrabble Association (now Scrabble Kenya), with full support from the Scrabble Association of Nigeria now (Nigeria Scrabble Federation) and other Scrabble bodies in Africa. There were only three countries in attendance at the first PANASA. 
                        </p>
                        


                        <div className="my-8 sec_btn">
                            <Link href={'/team'}>Meet the Team</Link>
                        </div>
                       
                    </div>
                </div> 

            </div>
        </section>
    )
}

export default SectionAbout