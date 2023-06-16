//Validation for form

const validation = (values) => {
    
    let errors = {};

    if(!values.fullname){
        errors.fullname = "Fullname is required";
    }

    if(!values.email){
        errors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid";
    }

    if(!values.message){
        errors.message = "Message is required";
    }

    return errors;

}

export default validation