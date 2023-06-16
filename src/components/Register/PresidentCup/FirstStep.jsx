import { useState, useContext} from "react";
import { RegisterContext } from "../contexts/RegisterContext.jsx";
import InputBox from "../Auth/InputBox.jsx";


const FirstStep = () => {

   const { formData, setFormData, errors } = useContext(RegisterContext);
   
    
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
            type: "text",
            name: "country",
            label: "Country",
            placeholder: "E.g Nigeria",
            error: errors.country,
            value: formData.country,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },

        {   
            element: "input",
            show: formData.country == "Nigeria" || formData.country == "nigeria",
            type: "text",
            name: "phone_no",
            label: "Phone Number",
            placeholder: "(+234) 0123456789",
            error: errors.phone_no,
            value: formData.phone_no,
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