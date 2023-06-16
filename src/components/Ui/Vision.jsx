import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faShieldAlt, faUserFriends, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from './vision.module.css';
import Achieve from '../Achievement/Achieve';
import Link from "next/link"




function Vision() {

    return (
        <section className={`w-full bg-deep lg:py-6 lg:px-1 px-4`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-around items-center">

                <div className="lg:max-w-[70%] lg:mx-auto my-12 lg:p-0 py-4">
                    <span className="text-darkblue text-lg tracking-widest">PANASA</span>
                    <h3 className="font-bold  text-xl lg:text-3xl text-white">Our Metrics Says It All. Success is a Series of Small Wins!</h3>

                    <p className="my-6 text-[1rem] text-ash font-light">Scrabble is played in millions of homes across the African continent. These are some of the key metrics of the sport in Africa: </p>

                    <ul className="my-3">
                       <li className="text-sm text-ash my-3 font-light"> There are currently Twelve (12) member countries under PANASA. They are South Africa, Botswana, Zambia, Uganda, Kenya, Tanzania, Gambia, Liberia, Sierra Leone, Ghana, Cameroun & Nigeria.</li>
                       <li className="text-sm text-ash my-3 font-light">  About Fifteen Thousand people have registered to play in tournaments across all PANASA member countries. </li>
                       <li className="text-sm text-ash my-3 font-light"> Africa has produced a World Scrabble Champion. This was in 2015.</li>
                        <li className="text-sm text-ash my-3 font-light"> PANASA organizes the Bi-Annual Africa Scrabble Championship, East & Central Africa Scrabble Championship & the West Africa Scrabble Championship. The Africa Youth Scrabble Championship and the President’s Cup will be added in 2023.</li>
                         <li className="text-sm text-ash my-3 font-light"> Several tournaments are organized by member nations in their respective countries.</li>
                    </ul>
                  

                </div>

            <Achieve/>


            </div>
        
        </section>
    )
}

export default Vision