
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faBook } from "@fortawesome/free-solid-svg-icons";


function SubTitle(props){
    return (
        <>
        
          <div className="flex justify-around items-center lg:w-[40%] lg:p-0 px-5">
            <div className="border-2 border-solid border-deep rounded-md w-2/12 h-20 mr-4 p-4 flex justify-center items-end mt-14">
                <FontAwesomeIcon icon={faBook} style={{ fontSize: 35, display: 'block' }} className="text-deep"/>
            </div>

            <div className="rounded-md  pt-20">
                <h5 className="text-[#000] font-medium text-left text-lg tracking-widest uppercase">Get Material</h5>
                <h3 className="text-darkblue text-left text-2xl lg:text-3xl font-bold ">{props.subtitle}</h3>
            </div>
        </div>

        <hr className="border-t-[1px] border-solid border-boldash my-4 lg:mx-0 mx-4 w-9/12 lg:w-10/12 block"/>
        
        </>
    )
}

export default SubTitle