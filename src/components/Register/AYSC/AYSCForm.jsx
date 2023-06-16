import { useEffect, useState } from "react";
import { AyscContext } from "../contexts/AyscContext";
import { validateStepOne,  validateFinalStep } from "../validation/ayscValidate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from  "axios";
import Stepper from "../Auth/Stepper";
import StepperControl from "../Auth/StepperControl";
import FirstStep from "./FirstStep";
import FinalStep from "./FinalStep";
import AuthHeader from  "../Auth/AuthHeader";
import ResponseData from "../Response/Response";

function AyscForm() {

    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({

        surname: "",
        firstname: "",
        middlename: "",
        country: "",
        email: "",
        sex: "",
        age: "",
        image: [],
        amount_payed: "",
        filePreview: null,

    });

    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState({
        success: false,
        message: null,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);

    const steps = [
        "Step 1",
        "Complete",
    ];

    const handleStepOne = () => {
        const formErrors = validateStepOne(formData);
        setErrors(formErrors);
        return formErrors;
    }


    const handleFinalStep = () => {
        const formErrors = validateFinalStep(formData);
        setErrors(formErrors);
        return formErrors
    }


     const validateForm = (currentStep) => {
        switch (currentStep) {
            case 1:
                return handleStepOne();

            case 2:
               return handleFinalStep();

            default:
                break;
        }
  };


    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <FirstStep/>
            
            case 2: 
               return <FinalStep/>
              
            default:
                break;
        }
    }



    //handleFormSubmit
    const handleFormSubmit = async (formErrors) => {
        if(Object.keys(formErrors).length === 0 && currentStep == steps.length){
            
            try{

                const form = new FormData();
        
                form.append("surname", formData.surname);
                form.append("firstname", formData.firstname);
                form.append("middlename", formData.middlename);
                form.append("country", formData.country);
                form.append("sex", formData.sex);
                form.append("email", formData.email);
                form.append("age", formData.age);
                form.append("amount_payed", formData.amount_payed);
                form.append("image", formData.image);
    
                await axios.post("/api/ayscapi", formData)
                    .then(response => {
                        if(response.status == 200){
                            setResponse({
                                success: true,
                                message: "Registration Successful!",
                            });
                            setIsSubmitted(true);
                        }
                    })
                    .catch(err => {
                        const { data } = err.response;
                        if(data.success == false){
                            setResponse({
                                success: false,
                                message: "Something Went Wrong",
                            });
                            setIsSubmitted(false);
                        }
                    })            
            } catch(err){
                console.log(err);
            }


        }

        

}   




    const handleCloseModal = () => {
        setIsSubmitted(false);
        setCurrentStep(1);
        setFormData({
            surname: "",
            firstname: "",
            middlename: "",
            country: "",
            email: "",
            sex: "",
            age: "",
            image: [],
            amount_payed: "",
            filePreview: null,
        });
    }

    

    const handleClick = (direction) => {
        if (currentStep != null && currentStep != undefined) {
            const formErrors = validateForm(currentStep);
            
            if(Object.keys(formErrors).length === 0){
                let newStep = currentStep;
                direction === "next" ? newStep++ : newStep--;
                //check if steps are within bound
                newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

                handleFormSubmit(formErrors);
                
            } else {
                setCurrentStep(currentStep);
            }
        }
    }

    const presidentContext = { formData, setFormData, errors, setErrors };

    return (
        <AyscContext.Provider value={presidentContext}>
            {isSubmitted && 

                <div className="flex justify-center items-center flex-col fixed z-20 p-6 left-0 top-0 bottom-0 right-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
                    <FontAwesomeIcon icon={faClose}  style={{ fontSize: 30, color: 'white', fontWeight: 'bolder' }} className="carousel_btn close" onClick={handleCloseModal}/>

                    <ResponseData response={response.success} message={response.message}/>
                </div>
            }
            <div className="lg:max-w-[50%] lg:mx-auto my-12 rounded-sm p-8">
                <AuthHeader title={"African Youth Cup"} miniTitle={"Expression of Interest Form"}/>
                <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                    />
                <div className="container mx-auto bg-white rounded-md py-4 px-6 lg:px-16 shadow-xl shadow-gray-500 border-t-8 border-solid border-sitepink">

                    { displayStep(currentStep) }
                    
            
                    <StepperControl 
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                </div>
            </div>
        </AyscContext.Provider>
    )
}

export default AyscForm

