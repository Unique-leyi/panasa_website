import { useState } from "react";
import Link from 'next/link';
import MajorText from "../Ui/MajorText"
import ResourceList from '../Ui/ResourceList';


const RESOURCES = [


    {
        id: 1,
        title: "Resources For Player",
        resources: [
                {
                    title: 'WESPA Rules Version 4',
                    path: 'https://www.wespa.org/wesparulesv4.pdf',
                },

                {
                    title: 'PANASA Result Slip',
                    path: '/docs/result_slip.pdf',
                },

                {
                    title: 'Zyzzyva',
                    path: 'https://www.collinsdictionary.com/games/scrabble/tools',
                },

                {
                    title: 'Quackle',
                    path: 'http://people.csail.mit.edu/jasonkb/quackle/',
                },
        ],

    }
];

function Resource() {

    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

   
    return (
        <section className={`bg-lightash w-full block lg:flex lg:justify-center items-center flex-col py-16 px-6`}>
           
            <MajorText miniText={`Rules and Materials `} majorText={`Resources`}/>


             <div className="lg:w-[80%] lg:mx-auto my-4">
                {
                    RESOURCES.map((item, i) => (
                        <ResourceList key={i} {...item} accordionOpen={open} handleOpen={() => handleOpen(item.id)}/>
                    ))
                }
             </div> 

             <div className='py-1'>
                <div className='bg-darkpink hover:bg-sitegreen gallery_carousel w-full lg:mx-auto text-white py-4 px-10 rounded-lg flex justify-center items-center cursor-pointer'>
                    <Link href={`/resources`}>CheckOut More Resources</Link>
                </div>
            </div>      

        </section>
    )
}

export default Resource