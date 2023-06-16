import Link from 'next/link'
import Image from 'next/image'
import styles from './NewsItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function NewsItem(props) {
   
   
    return (
        <div className={`${styles.first_child} ${styles.item} bg-cover bg-center bg-no-repeat relative z-10 rounded-lg my-4 lg:my-0 shadow-lg mx-5 overflow-hidden p-4 flex justify-center items-center flex-wrap lg:block cursor-pointer hover:scale-105 transition-transform ease-in duration-150`}>
            <div className="flex lg:justify-between justify-around items-center lg:flex-row flex-col">
                <div className="bg-secondary rounded-md p-2 w-full lg:w-[40%] flex justify-center items-center flex-wrap">
                    <h5 className="font-medium text-white lg:text-lg text-xl">{props.timeOfPost}</h5>
                </div>
                <div className="text-center">
                   <h5 className="font-bold text-deep lg:m-0 my-3">{props.title}</h5> 
                </div>
            </div>

            <div className="flex justify-start lg:justify-between items-center flex-row my-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: 16, color: '#0c1c8c', backgroundColor: '#e4e6e7' }} className="p-2 rounded-md"/>
                <h5 className="mx-2">{props.location}</h5>
            </div>




        </div>
    )
}

export default NewsItem