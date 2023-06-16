import { statementData } from "../../../pages/api/statementData"
import MajorText from "../Ui/MajorText"
import Statement from "./Statement"




function Statements() {
    return (
        <section className={`my-16 lg:p-1 p-4`}>
            <MajorText miniText={`What We Aim At`} majorText={`Vision and Mission`}/>
            <div className="my-16 lg:max-w-[70%] lg:mx-auto grid grid-cols-1  lg:grid-cols-2 justify-center items-center gap-5">
               
                {
                    statementData.map((item, i) => (
                        <div className="my-4" key={i}>
                            <Statement {...item}/>
                        </div>
                    ))
                }
                
                
            </div>
        </section>
    )
}

export default Statements