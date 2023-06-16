import { useState, useEffect } from "react"
import validation from "../Validation/validation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faClose, faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function Form() {
    // Storing all form data 
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: ""
    });



    // Setting form data
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    // Storing Errors
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);

    // Submitting Form data
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(formData));


        // Submitting to an API
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(formData),

        }).then((res, err) => {
            if(res.status === 200){
                setIsDataSubmitted(true);
            }
        });
        
        // setIsDataSubmitted(true);
    }

   

    //Showing Success Result
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isDataSubmitted){
            setIsSubmitted(true);
        }

    }, [errors, isDataSubmitted]);


     //Close Modal
    const handleCloseModal = () => {
        setIsSubmitted(false);
        setFormData({
            fullname: "",
            email: "",
            message: ""
        });  
    }





    return (
        <form className="my-12">

            {isSubmitted && 

                <div className="flex justify-center items-center flex-col fixed z-20 p-6 left-0 top-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
                        <FontAwesomeIcon icon={faClose}  style={{ fontSize: 30, color: 'white', fontWeight: 'bolder' }} className="carousel_btn close" onClick={handleCloseModal}/>

                        

                        {
                            <div className="flex justify-center items-center flex-col modal-content">
                                <h3 className="text-white text-5xl my-6 font-semibold">Thank You!</h3>
                                <div className="flex justify-center items-center flex-col flex-wrap bg-white p-7 rounded-md">
                                    <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '8rem' }} className="text-sitegreen" />
                                </div>
                                    <h5 className="text-white my-4 font-bold text-lg">Message Sent Succesfully</h5>

                            </div>    
                        }

                            

                    </div>
            }


            <div className="flex justify-center lg:justify-start items-start flex-col my-6">
                <label className="font-semibold my-1">Name:<span className="text-[#ee3b3b] text-xl">*</span></label>
                <input type="text" name="fullname" placeholder="Enter your name" className="w-full outline-none border-none py-4 px-8 bg-ash rounded-lg focus-within:border-2 focus-within:border-darkblue focus-within:border-solid font-normal text-[1rem]" value={formData.fullname} onChange={handleChange}/>
                {errors.fullname && <p className="text-sm my-2 text-[#ee3b3b]">{errors.fullname}</p>}
            </div>

            <div className="flex justify-center lg:justify-start items-start flex-col my-6">
                <label className="font-semibold my-1">Email:<span className="text-[#ee3b3b] text-xl">*</span></label>
                <input type="email" name="email" placeholder="Enter your email" className="w-full outline-none border-none py-4 px-8 bg-ash rounded-lg focus-within:border-2 focus-within:border-darkblue focus-within:border-solid font-normal text-[1rem]" value={formData.email} onChange={handleChange}/>
                {errors.email && <p className="text-sm my-2 text-[#ee3b3b]">{errors.email}</p>}
            </div>

             <div className="flex justify-center lg:justify-start items-start flex-col my-6">
                <label className="font-semibold my-1">Message:<span className="text-[#ee3b3b] text-xl">*</span></label>
                <textarea type="text" name="message" cols="5" rows="8" className="w-full outline-none border-none py-4 px-8 bg-ash rounded-lg focus-within:border-2 focus-within:border-darkblue focus-within:border-solid font-medium text-[1rem]" value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <p className="text-sm my-2 text-[#ee3b3b]">{errors.message}</p>}
            </div>

            <div className="flex justify-center items-center flex-col my-6">
                <button className="block w-full font-medium text-lg bg-darkpink text-white outline-none border-none py-4 px-6 rounded-lg hover:bg-darkblue cursor-pointer" onClick={handleFormSubmit}>Send Message</button>
            </div>
        </form>
    )
}

export default Form