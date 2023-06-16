import { useState, useContext} from "react";
import { RegisterContext } from "../contexts/RegisterContext.jsx";
import InputBox from "../Auth/InputBox.jsx";


const SecondStep = () => {

   const { formData, setFormData, errors } = useContext(RegisterContext);

   const selectData = [
    {
        name: "registration_band",
        value: "Gold Badge ($300)"
    },

    {
        name: "registration_band",
        value: "Silver Badge ($265)"
    },

    {
        name: "registration_band",
        value: "Blue Badge ($50)"
    },

    {
        name: "registration_band",
        value: "Orange Badge ($250)"
    },

    {
        name: "registration_band",
        value: "Purple Badge ($215)"
    },
   ]
   
    
    const inputs = [

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

        {   
          element: "select",
          name: "registration_band",
          label: "Select a Band",
          data: selectData,
          defaultValue: "Choose a Band",
          error: errors.registration_band,
          value: formData.registration_band,
          handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },

        {   
            element: "input",
            show: true,   
            type: "number",
            name: "panasa_rating",
            label: "Panasa Rating",
            placeholder: "E.g. 1234",
            error: errors.panasa_rating,
            value: formData.panasa_rating,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },
        
    ];


 


  return (
        <form  className="w-full py-6 lg:py-8">
            <h3 className="mb-4 text-xl font-bold leading-none text-deep">Step 2</h3>
                <div className="w-full grid gap-6 mb-4 sm:grid-cols-2">

                    <div className="w-full my-3 lg:my-2">
                    <label htmlFor={"sex"} className="mb-2 block text-sm font-medium text-black">Sex</label>

                        <div className="flex flex-col gap-y-2">

                            <label className="block text-sm font-medium text-black">
                                <input type={"radio"} name={"sex"} value={"male"} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.85)] ${errors.sex ? "!border-[rgba(255,0,0,0.85)]" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus-within:ring-blue-600 focus-within:border-blue-600 mx-2`} checked={formData.sex == "male" ?  true : false} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                Male
                            </label>

                            <label className="block text-sm font-medium text-black">
                                <input type={"radio"} name={"sex"} value={"female"} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.85)] ${errors.sex ? "!border-[rgba(255,0,0,0.85)]" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus-within:ring-blue-600 focus-within:border-blue-600 mx-2`} checked={formData.sex == "female" ?  true : false} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                Female
                            </label>

                            
                        
                        {errors.sex && <p className="text-sm text-[rgba(255,0,0,0.85)] my-2">{errors.sex}</p>}

                        </div>
                   </div>   
                   {
                        inputs.map((input, i) => (
                            <InputBox key={i} {...input}/>
                        ))
                   }     
                </div>
        </form>
  );
};

export default SecondStep;