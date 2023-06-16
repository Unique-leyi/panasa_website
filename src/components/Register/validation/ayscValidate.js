

export const validateStepOne = (formData) => {
        
    var errors = {};

    if(!formData.surname){
        errors.surname = "Surname is Required";
    } else if(formData.surname.length == 0) {
        errors.surname = "Must contain atleast a character"
    }

    if(!formData.firstname){
        errors.firstname = "Firstname is Required";
    } else if(formData.firstname.length == 0) {
        errors.firstname = "Must contain atleast a character"
    }

    if(!formData.middlename){
        errors.middlename = "Middlename is Required";
    } else if(formData.middlename.length == 0) {
        errors.middlename = "Must contain atleast a character"
    }

    
    if(!formData.email){
        errors.email = "Email is Required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email = "Email is Invalid";
    }

    return errors
};



  export const validateFinalStep = (formData) => {
    let errors = {}

    if(!formData.age){
        errors.age = "Age is Required";
    } else if(formData.age.length == 0) {
        errors.age = "Must contain atleast a character"
    }

    if(!formData.country){
        errors.country = "Country is Required";
    } else if(formData.country.length == 0) {
        errors.country = "Must contain atleast a character"
    }



    if(!formData.sex){
        errors.sex = "Sex is Required";
    } else if(formData.sex.length == 0) {
        errors.sex = "Must contain atleast a character"
    }


    if(!formData.image){
        errors.image = "Image is Required";
    } else if(formData.image.length == 0) {
        errors.image = "Upload Your Image"
    }
    
       
    return errors

 }

