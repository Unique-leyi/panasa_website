import { useState, useEffect } from "react"
import validation from "../Validation/validation";



const useForm = () => {
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
        setIsDataSubmitted(true);
    }

        //Showing Success Result
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isDataSubmitted){
            setIsSubmitted(true);
        }

    }, [errors, isDataSubmitted]);

    return {handleChange, errors, handleFormSubmit, formData} 
}

export default useForm