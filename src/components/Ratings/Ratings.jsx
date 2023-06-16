import styles from "./ratings.module.css";
import Table from "../Datatable/Table.jsx"


function Ratings() {


    return (
        <section className={`${styles.ratings_bg} w-full bg-cover bg-no-repeat bg-fixed lg:p-0 p-4`}>

            <div className="w-full lg:w-[50%] lg:mx-auto lg:py-10 flex justify-center items-center flex-col">
                <h4 className="text-white text-center font-bold text-3xl lg:text-5xl">PANASA <span className="text-sitegreen">Player</span> Ratings</h4>
                <p className="text-[0.9rem] font-light my-4 text-ash text-center"> Scrabble is played by millions of people worldwide. Our aim is to encourage players build their mental development process. </p>
            </div>

            <div className="w-full lg:w-[70%] lg:mx-auto lg:py-10 flex justify-center items-center flex-col">
                <Table/>
            </div>

        </section>
    )
}

export default Ratings