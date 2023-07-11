import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from './Hero.module.css'
import { useState, useEffect } from 'react';

function Hero() {

    const [countdown, setCountdown] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const targetDate = new Date('2023-08-24');
        const diff = targetDate.getTime() - now.getTime();
  
        if (diff <= 0) {
          // D-Day has arrived
          clearInterval(interval);
          setCountdown('D-Day of the Tournaments!');
        } else {
          // Calculate remaining days, hours, minutes, and seconds
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
          setCountdown(`${days}D:${hours}H:${minutes}M:${seconds}S`);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    

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

                        <div className="z-[900] h-40 fixed lg:m-0 -mt-32 lg:bottom-[0.5rem] right-[4px] lg:max-w-[40%] lg:mx-auto flex justify-center items-center flex-col bg-deep gap-1 rounded-md p-2 shadow-md shadow-[rgba(0,0,0,0.7)]">
                            <h2 className="text-sm lg:text-lg font-medium text-white">President's Cup and AYSC Tournaments </h2>
                            <h3 className="text-lg font-bold text-white">Begins AUG 24TH</h3>
                            <p className="bg-sitepink p-2 text-lg text-deep rounded-sm font-semibold">{countdown}</p>
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