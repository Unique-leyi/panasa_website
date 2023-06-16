import Image from 'next/image'
import Link from 'next/link';
import { useRef } from "react"
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faAward } from "@fortawesome/free-solid-svg-icons";
import styles from "./about.module.css"


function About() {

  const n = useRef(0);
  const styles = useSpring({
    loop: () => 3 > n.current++,
    from: { x: 0 },
    to: { x: 100 },
  })


    return (
        <section className={`w-full lg:max-w-[80%] lg:mx-auto my-16`}>

            <animated.div className="flex lg:justify-around justify-center items-center md:flex-row flex-col space-x-8">

                <div className="my-16  mx-8 lg:mx-0">
                    <h3 className="text-sitegreen font-semibold text-xl">About PANASA</h3>
                    <h5 className="my-2 text-3xl lg:text-5xl font-[800] text-darkblue">A World Champion Came From Here</h5>
                    <div className="page-btn">
                        <p className="my-8">Pan African Scrabble Association (PANASA) is an international sporting association, a non-governmental, having its own juridical status. PANASA, founded in 1994, consists of all African National Scrabble Associations which are also participating countries of the World English Language Scrabble Players Association Championships (WESPAC) and recognized by World Scrabble Body (WESPA) as the official bodies controlling Scrabble in their respective countries.</p>
                        
                        <Link href={`/about`}>Learn More</Link>
                    </div>
                </div> 

                  <div className="p-0 lg:p-10 lg:mx-0 relative">
                    <div className={`w-96 h-96 relative shadow-[rgba(0,0,0,0.5)] shadow-md rounded-md overflow-hidden  ${styles.award_img} z-10 `}>
                        <Image className="rounded-md" src={require('../../assets/images/scrabble_1.png')} alt={'scrabble board'} layout="fill" objectFit="cover" width={100} height={100}/>
                    </div>


                    <div className={`w-56 h-56 absolute top-60 lg:top-60 bottom-0 right-0 shadow-[rgba(0,0,0,0.5)] shadow-xl flex justify-center items-center flex-col bg-sitepurple overflow-hidden rounded-full border-4 border-solid border-white z-20`}>
                         <FontAwesomeIcon icon={faAward} style={{ fontSize: 80, display: 'block' }} className="text-white"/>
                         <span className="text-xl my-4 font-extrabold text-deep">The Best </span>
                    </div>

                    
                </div>

            </animated.div>
        </section>
    )
}

export default About