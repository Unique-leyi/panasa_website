import { useState, useContext} from "react";
import { validate } from "../validation/validate.js";
import { AyscContext } from "../contexts/AyscContext.jsx";
import InputBox from "../Auth/InputBox.jsx";


const FirstStep = () => {

   const { formData, setFormData, errors } = useContext(AyscContext);
   
    
    const inputs = [

        {   
            element: "input",
            show: true,   
            type: "text",
            name: "surname",
            label: "Surname",
            placeholder: "E.g. John",
            error: errors.surname,
            value: formData.surname,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },


        {   
            element: "input",
            show: true,   
            type: "text",
            name: "firstname",
            label: "Firstname",
            placeholder: "E.g. Doe",
            error: errors.firstname,
            value: formData.firstname,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },


        {   
            element: "input",
            show: true,
            type: "text",
            name: "middlename",
            label: "Middlename",
            placeholder: "E.g. Doe",
            error: errors.middlename,
            value: formData.middlename,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },

        {   
            element: "input",
            show: true,
            type: "email",
            name: "email",
            label: "Email",
            placeholder: "E.g doe@example.com",
            error: errors.email,
            value: formData.email,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },
        
        
    ];



  return (
        <form className="w-full py-6 lg:py-8">
            <h3 className="mb-4 text-xl font-bold leading-none text-deep">Step 1</h3>
                <div className="w-full grid gap-6 mb-4 sm:grid-cols-2">
                   {
                        inputs.map((input, i) => (
                            <InputBox key={i} {...input}/>
                        ))
                   }     
                </div>
        </form>
  );
};

export default FirstStep;