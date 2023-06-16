import styles from './heromini.module.css'
import Image from 'next/image'
function HeroMini(props) {

    const pin = props.bgImg;
    

    return (
        <section className={`${styles[pin]} w-full h-[12rem] lg:h-[18rem] flex justify-center items-center overflow-hidden`}>
                <div className="w-full lg:w-[60%]">
                    <Image src={props.image} alt="Panasa Hero"/>
                </div>
        </section>
    )
}

export default HeroMini