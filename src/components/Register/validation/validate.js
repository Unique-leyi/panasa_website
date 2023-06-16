
export const validateStepOne = (formData) => {
        
    let errors = {};

    if(!formData.surname){
        errors.surname = "Surname is Required";
    } else if(formData.surname.trim().length == 0) {
        errors.surname = "Must contain atleast a character"
    }

    if(!formData.firstname){
        errors.firstname = "Firstname is Required";
    } else if(formData.firstname.trim().length == 0) {
        errors.firstname = "Must contain atleast a character"
    }

    if(!formData.middlename){
        errors.middlename = "Middlename is Required";
    } else if(formData.middlename.trim().length == 0) {
        errors.middlename = "Must contain atleast a character"
    }

    if(!formData.country){
        errors.country = "Country is Required";
    } else if(formData.country.trim().length == 0) {
        errors.country = "Must contain atleast a character"
    }

    return errors
};

export const validateSecondStep = (formData) => {
    let errors = {}

    if(formData.phone_no != undefined && !formData.phone_no && !formData.phone_no == ""){
        errors.phone_no = "Phone Number is Required";
    } else if(formData.phone_no != undefined && formData.phone_no == "" && formData.phone_no.trim().length < 14) {
        errors.phone_no = "Phone Number is invalid"
    }

    if(!formData.sex){
        errors.sex = "Sex is Required";
    } else if(formData.sex.trim().length == 0) {
        errors.sex = "Must contain atleast a character"
    }
    

    if(!formData.email){
        errors.email = "Email is Required";
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email = "Email is Invalid";
    }

    if(!formData.registration_band){
        errors.registration_band = "Badge is Required";
    } else if(formData.registration_band.trim().length == 0) {
        errors.registration_band = "Choose a Badge"
    }

    return errors

 }


 export const validateThirdStep = (formData) => {
    let errors = {}

    if(!formData.final_fling){
        errors.final_fling = "Final is Required";
    } else if(formData.final_fling.trim().length == 0) {
        errors.final_fling = "Must contain atleast a character"
    }


    if(!formData.image){
        errors.image = "Image is Required";
    } else if(formData.image.length == 0) {
        errors.image = "Upload Your Image"
    }


    if(formData.room_mate != undefined && !formData.room_mate && !formData.room_mate == ""){
        errors.room_mate = "Room Mate is Required";
    } else if(formData.room_mate != undefined && formData.room_mate == "" && formData.room_mate.trim().length == 0) {
        errors.room_mate = "Must contain atleast a character"
    }
   

    return errors

 }


  export const validateFinalStep = (formData) => {
    let errors = {}

    if(!formData.amount_payed){
        errors.amount_payed = "Amount is Required";
    } else if(formData.amount_payed.trim().length == 0) {
        errors.amount_payed = "Must contain atleast a character"
    }

    if(!formData.payment_method){
        errors.payment_method = "Payment Method is Required";
    } else if(formData.payment_method.trim().length == 0) {
        errors.payment_method = "Choose a Method"
    }        

    return errors

 }

