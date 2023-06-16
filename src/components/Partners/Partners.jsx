import { partners } from "../../../pages/api/partners"
import MajorText from "../Ui/MajorText"
import Partner from "./Partner"


const Partners = () => {
    return (
        <section className="py-10">
            <MajorText miniText={`Our most esteemed`} majorText={`Sponsors and Partners`}/>

            <div className="lg:max-w-[80%] lg:mx-auto p-5 my-10 grid grid-cols-1 gap-16 justify-center items-center">
                {
                    partners.map((partner, i) => (
                        <Partner key={i} {...partner}/>
                    ))
                }
            </div>
        </section>
    )
}


export default Partners