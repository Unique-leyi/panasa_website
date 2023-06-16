import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from './Hero.module.css'


function Hero() {

    

    return (
        <section className={`${styles.hero_section} h-[38rem] bg-center bg-cover`}>
            <div className="mx-4 lg:max-w-[80%] lg:mx-auto py-8 lg:py-16 flex justify-center lg:justify-start lg:items-start items-center flex-col lg:flex-row">
                <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.75,
                    }} className="w-full lg:w-6/12">
                    <h3 className="my-8 lg:my-6  text-white text-5xl lg:text-6xl font-bold">The Official Website of <span className="text-sitegreen font-extrabold">Pan African Scrabble Association</span></h3>
                    <p className="text-sm text-white my-2">Pan African Scrabble Association (PANASA) is an international sporting association, a non-governmental, having its own juridical status.
                    </p>
                    <div className="flex justify-start lg:items-center my-16 lg:flex-row flex-col">
                        <div className={`cta_btn rounded-md text-white `}>
                            <Link href={`/about`}>Learn More</Link>
                        </div>

                        <div className={`sub_btn rounded-md text-white lg:mx-8 lg:my-0 my-10`}>
                            <Link href={`/news`}>Upcoming Events</Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.75,
                    }}>
                        
                    
                </motion.div>
            </div>
        </section>
    )
}

export default Hero