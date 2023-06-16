import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { NAV_LINKS } from '../../../pages/api/navlinks';


function Header() {
    
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const [show, setShow] = useState(false);

    const[unset, setUnSet] = useState(false);

    const [open, setOpen] = useState("");
 
    const handleOpen = (e, value) => {
        e.preventDefault();
        setOpen(open === value ? "" : value);
    };


    function checkSet(){
        if(location.pathname !== "/"){
            setUnSet(true);
        } 
    }

    useEffect(() => {
        window.addEventListener('load', checkSet );
        
        return () => window.removeEventListener('load', checkSet );
        //return () => window.removeEventListener('scroll', headerFunc);
    }, [])
    
    

    const removeClass = unset ? "header_fixed" : "fixed header_sticky";

    // When you down a bit passed the navigation, the background should be white.
    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add(`header_sticky`);
        } else {
            headerRef.current.classList.remove(`header_sticky`);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);

        // return () => window.removeEventListener('load', checkSet );
        
        return () => window.removeEventListener('scroll', headerFunc);
    }, []);

    //Toggle Menu responsively
    const toggleMenu = () => menuRef.current.classList.toggle(`active_menu`);
   
  

    return (
        <>
        
        <header className={`header_fixed top-0 left-0 w-full z-40 !my-0`} ref={headerRef}>
          <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                    delay: 0.2,
                    duration: 0.75,
                 }}
                className={`w-full head-content lg:mx-auto lg:p-4 p-5 lg:px-3 flex flex-row justify-between lg:justify-around items-center`}>
            
            <div>
                <div className={`w-16 h-16 relative`}>
                <Link href={`/`}><a><Image src={require('../../assets/images/panasa-logo.png')} alt={`Panasa Logo`} layout="fill" objectFit="cover"/></a></Link>
                </div>
            </div>


            <div className={styles.navigation}>
                
                <div className="nav__menu flex justify-around items-center " ref={menuRef} onClick={toggleMenu}>
                    {
                        NAV_LINKS.map((item, i) => (
                            <div key={i}>
                                
                                {/* Larger Devices */}
                                <div className="group hidden lg:block">
                                    <div className="flex justify-center items-center my-3 lg:m-0">
                                        <Link href={item.path}>
                                            {item.display}
                                        </Link>
                                        {item.children && <i className={`${show ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} lg:-ml-2 transition-all duration-300 ease-in-out cursor-pointer  hover:text-deep`}></i>} 
                                    </div>

                                {item.submenu && 
                                        <div className="hidden lg:absolute top-14 bg-ash group-hover:md:block hover:md:block transition-all duration-300 ease-in-out dropdown-menu rounded-md lg:shadow-md shadow-deep overflow-hidden sub__menu z-20">
                                            {item.children.map((sublink, i) => 
                                                <div className="lg:w-full lg:mx-0 mx-4 flex justify-around items-center hover:bg-deep px-2" key={i}>
                                                    <i class="ri-medal-line block text-2xl text-darkblue"></i>
                                                    <Link href={sublink.path}>
                                                        {sublink.display}
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                }

                                </div>

                                {/* Mobile Devices */}

                                <div className="lg:hidden z-40">
                                    <div className="flex justify-start items-center my-3 lg:m-0">
                                        <Link href={item.path}>
                                            <a onClick={(e) => handleOpen(e, item.display
                                                )}>{item.display}</a>
                                        </Link>

                                        {item.children && <i className={`${(open === item.display) ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} lg:-ml-2 transition-all duration-300 ease-in-out cursor-pointer  hover:text-deep`}></i>} 
                                    </div>

                                    {(open === item.display) && item.submenu && 
                                        <div className="bg-white sub__menu">
                                            {item.children.map((sublink, i) => 
                                                <div className="lg:w-full lg:mx-0 mx-10 flex lg:justify-around items-center hover:bg-deep p-2" key={i}>
                                                    <i class="ri-medal-line block text-2xl text-darkblue"></i>
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

                <span className="lg:hidden mobile_menu">
                    <i className="ri-menu-3-line" onClick={toggleMenu}></i>
                </span>
            </div>
          </motion.div>  

        </header>

        
        




        </>
    )
}

export default Header