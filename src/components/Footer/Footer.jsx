import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css"
import Image from 'next/image'
import { useState } from "react";


    const NAV_LINKS = [
        {
            path: '/',
            display: 'Home'
        },

        {
            path: '#',
            display: 'About',
            submenu: true,
            children: [
                {
                    path: '/about',
                    display: 'About',  
                },


                {
                    path: '/associations',
                    display: 'Associations',   
                },


                {
                    path: '/team',
                    display: 'Team',   
                },
            ]
        },

        {
            path: '/ratings',
            display: 'Ratings'
        },

        {
            path: '#news',
            display: 'News',
            submenu: true,
            children: [
                {
                    path: '/news',
                    display: 'News',  
                },


                {
                    path: '/tournaments/',
                    display: "President's Cup",   
                },


                {
                    path: '/tournaments/aysc',
                    display: 'African Youth Scrabble Cup',   
                }


            ]
        },
        
        {
            path: '/resources',
            display: 'Resources'
        },

        {
            path: '/gallery',
            display: 'Gallery'
        },

        {
            path: '/contact',
            display: 'Contact Us'
        }
    ];

    const date = new Date();
    const year = date.getFullYear();


function Footer() {

    const [show, setShow] = useState(false);

    return (
        


          <footer className={`${styles.footer_bg} bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col p-6 z-20 relative`}>
            <section className="w-full lg:w-[80%]  lg:flex justify-center lg:justify-around items-center lg:items-start flex-col lg:flex-row my-8">
                 <div className="w-full">
                    <div className="lg:flex items-center flex-col lg:flex-row mb-8">
                        <div className={`w-20 h-20 lg:w-40 lg:h-28 relative lg:my-0 mb-4`}>
                            <Link href={`/`}><a><Image src={require('../../assets/images/panasa-logo.png')} alt={`Panasa Logo`} width={100} height={100} layout="fill" objectFit="cover"/></a></Link>
                        </div>

                        <div className="lg:mx-3">
                            <h5 className="text-white text-lg font-bold uppercase">PAN African Scrabble Association</h5>
                        </div>

                    </div>


                    <div className='my-2'>
                        <p className='text-white text-[0.8rem]'>SCRABBLE® is a registered trademark. All intellectual property rights in and to the game are owned in the US by Hasbro Inc, in Canada by Hasbro Canada Inc and throughout the rest of the world by JW Spear & Sons Ltd of Maidenhead, SL6 4UB, England, a subsidiary of Mattel Inc.<br/> Mattel and Spear are not affiliated with Hasbro or Hasbro Canada.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className='my-8'>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: 16,backgroundColor: '#e4e6e7' }} className="p-2 rounded-md text-deep"/>
                            <h5 className='text-white mx-4 text-sm font-medium'>+234 903 373 3492</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 16,backgroundColor: '#e4e6e7' }} className="p-2 rounded-md text-deep"/>
                            <h5 className='text-white mx-4 text-sm font-medium'>info@panafricanscrabble.com</h5>
                        </div>

                        <div className='flex items-center flex-row my-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: 16,backgroundColor: '#e4e6e7' }} className="p-2 rounded-md text-deep"/>
                            <h5 className='text-white mx-4 text-sm font-medium'>Room 4, 3rd Floor, Nelson Ibilola, House 82, Allen Avenue, Ikeja, Lagos, Nigeria.</h5>
                        </div>

                    </div>
                    {/* /Contact Info */}



                </div>

                <div className="w-full my-16 lg:my-2 ">
                    <h5 className=" my-4 lg:my-0 font-bold text-white text-2xl lg:text-center">Quick Links</h5>
                    <div className='flex justify-start lg:my-2  lg:justify-center lg:items-center flex-col quick'>
                        {
                            NAV_LINKS.map((item, i) => (
                                <div key={i}>
                                    <div className="group z-40">
                                        <div className="flex justify-start items-center my-3 lg:m-0 " onMouseOver={() => setShow(!show)}>
                                            <Link href={item.path}>
                                                {item.display}
                                            </Link>

                                            {item.children && <i className={`${show ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} lg:ml-2 transition-all duration-300 ease-in-out cursor-pointer  text-[#dfdfdf] hover:text-siteblue`}></i>} 
                                        </div>

                                        {item.submenu && 
                                            <div className="fsub__menu hidden group-hover:md:block hover:md:block">
                                                {item.children.map((sublink, i) => 
                                                    <div className="lg:w-full lg:mx-0 mx-10 flex justify-center items-center" key={i}>
                                                        <Link href={sublink.path}>
                                                            {sublink.display}
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                    }

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full">
                     <h5 className='font-bold text-white text-2xl '>Get Latest Updates</h5>
                     <p className="text-white my-1"> Sign Up to Our Newsletter</p>
                     <div className="bg-white flex justify-between items-center w-full rounded-full focus-within:border-solid focus-within:border-siteblue  focus-within:border-2 p-1 my-12 overflow-hidden">
                        <input name="newsletter" type="text" className="border-none outline-none text-[#000] w-full block px-4 text-[1rem]" placeholder="Enter Your Email"/>
                        <button className="bg-darkblue rounded-full grid grid-cols-2 items-center p-2 w-[70%]">
                            <span className="text-white text-lg ml-6">Send</span>
                            <i className="ri-send-plane-fill font-bold text-3xl text-[rgb(17, 24, 39)]"></i>
                        </button>
                     </div>

                </div>


            </section>

            
            
            <hr className="border-t-[1px] border-solid border-[#24333e] lg:my-4 w-10/12 block"/>
            <section className="lg:my-1 grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between items-center lg:p-0 p-4">
                <div className="lg:my-2">
                    <p className="text-white text-center text-sm lg:text-lg font-normal">&copy; Copyright {year} | Pan African Scrabble Association (PANASA)</p>
                </div>


                <div className="w-full lg:ml-16">
                     
                     <div className='flex justify-center items-center my-6'>
                        <a href="#" className="bg-white hover:bg-primary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-deep"><i className="ri-facebook-circle-fill text-lg"></i></a>
                        <a href="#" className="bg-white hover:bg-primary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-deep"><i className="ri-telegram-fill text-lg"></i></a>
                        <a href="#" className="bg-white hover:bg-primary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-deep"><i className="ri-instagram-fill text-lg"></i></a>
                        <a href="#" className="bg-white hover:bg-primary transition-all duration-150 py-1 px-2 mx-2 rounded-full text-center text-deep"><i className="ri-twitter-fill text-lg"></i></a>
                    </div>

                </div>
            </section>
            
        </footer>
            


    )
}



export default Footer