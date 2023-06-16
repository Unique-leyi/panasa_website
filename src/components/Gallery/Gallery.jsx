import Link from 'next/link';
import MajorText from '../Ui/MajorText';
import GalleryItem from './GalleryItem';

const G_ITEMS = [
    {
        image: require('../../assets/images/scrabble_1.png'),
        tournament: "Abuja 2018"
    },

    {
        image: require('../../assets/images/scrabble_2.png'),
        tournament: "Abuja 2018"
    },

    {
        image: require('../../assets/images/scrabble_3.png'),
        tournament: "Edo 2020"
    },

    // {
    //     image: require('../../assets/images/scrabble_3.png'),
    //     tournament: "Edo 2020"
    // },
];

function Gallery() {
   
   
    return (
        <section className={`w-full flex lg:justify-center items-center flex-col mb-20 p-6`}>

            <MajorText miniText={`Our memorable moments`} majorText={`Gallery`}/>

            <div className='my-16 w-full lg:w-[70%] lg:mx-auto flex justify-around items-center flex-col lg:flex-row'>
                {
                    G_ITEMS.map((item, i) => (
                        <GalleryItem {...item} key={i}/>
                    ))
                }
            </div>

            <div className='my-8'>
                <div className='bg-secondary moment text-white py-4 px-10 rounded-lg'>
                    <Link href={`/gallery`}>See More of Our Moments</Link>
                </div>
            </div>

        </section>
    )
}

export default Gallery