import Image from 'next/image'
import Link from 'next/link';
import styles from './info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Form from './Form';


function Info() {


    return (
        <section className={` w-full lg:max-w-[80%] lg:mx-auto px-4 lg:p-0 my-16 flex justify-center lg:justify-between items-center flex-col lg:flex-row`}>

            {/* Info */}
            <div className={`${styles.info_bg} bg-cover bg-no-repeat bg-blend-multiply p-8 lg:p-14 h-full rounded-md lg:rounded-l-xl lg:rounded-b-xl relative z-10 overflow-hidden`}>
                <div className="my-2">
                    {/* <h5 className="text-btncolor text-xl my-2">Get In Touch With Us</h5> */}
                    <h3 className="text-white text-3xl lg:text-5xl font-bold"> Our Contact </h3>
                    <p className="text-white my-6">For More Informations, or Complaints, Send us a message</p>
                </div>

                 <div className="my-10">

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: 12, color: '#0c1c8c', backgroundColor: '#e4e6e7' }} className="p-2 rounded-md"/>
                            <h5 className='text-white mx-4 text-sm font-normal'>+234 903 373 3492</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 12, color: '#0c1c8c', backgroundColor: '#e4e6e7' }} className="p-2 rounded-md"/>
                            <h5 className='text-white mx-4 text-sm font-normal'>info@panafricanscrabbleassociation.com</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: 12, color: '#0c1c8c', backgroundColor: '#e4e6e7' }} className="p-2 rounded-md"/>
                            <h5 className='text-white mx-4 text-sm font-normal'>Room 4, 3rd Floor, Nelson Ibilola, House 82, Allen Avenue, Ikeja, Lagos, Nigeria.</h5>
                        </div>

                    </div>

                    <div className='flex justify-center lg:justify-start items-center lg:items-start my-10'>
                        <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-facebook-circle-fill text-xl"></i></a>
                        <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-telegram-fill text-xl"></i></a>
                        <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-instagram-fill text-xl"></i></a>
                        <a href="#" className="bg-darkpink hover:bg-siteblue hover:text-secondary transition-all duration-150 py-2 px-3 mx-2 rounded-sm text-white"><i className="ri-twitter-fill text-xl"></i></a>
                    </div>
            </div>

            {/* Info */}

            {/* Form */}
            <div className="bg-white w-full lg:w-1/2 p-8 lg:p-14 my-8 lg:-mt-24 lg:mb-4 h-full rounded-md lg:rounded-r-xl lg:rounded-b-xl border-t-4 border-solid border-darkpurple shadow-md shadow-siteblue">
                <div className="my-2">
                    <h5 className="text-[#000] text-xl my-2">Need more Information?</h5>
                    <h3 className="text-secondary text-3xl lg:text-5xl font-bold"> Leave Us a Message.</h3>
                </div>

                <div className="lg:-my-4 my-4">
                    <Form/>
                </div>
            </div>
            {/* /Form */}
            
        </section>
    )
}

export default Info