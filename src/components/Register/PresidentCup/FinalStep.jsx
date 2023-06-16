import { useContext } from "react";
import { RegisterContext } from "../contexts/RegisterContext.jsx";
import InputBox from "../Auth/InputBox.jsx";
import Payments from "../Payments/Payments"

const FinalStep = () => {

   const { formData, setFormData, errors } = useContext(RegisterContext);

   const getAmount = (band) => {

     switch(band) {

        case "Gold Badge ($300)":
            formData.amount_payed = "$300";
            return "$300"

        case "Silver Badge ($265)":
            formData.amount_payed = "$265";
            return "$265"

        case "Blue Badge ($50)":
            formData.amount_payed = "$50";
            return "$50"

        case "Orange Badge ($250)":
            formData.amount_payed = "$250";
            return "$250"

        case "Purple Badge ($215)":
            formData.amount_payed = "$215";
            return "$215"

        default:
          break;
     }
    
}



    const inputs = [

        {   
            element: "input",
            show: true,   
            type: "text",
            name: "amount_payed",
            label: "Amount Payable",
            placeholder: "E.g. $000",
            error: errors.amount_payed,
            value: getAmount(formData.registration_band),
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },
        
         
    ];


 


  return (
        <form  className="w-full py-6 lg:py-8">
            <h3 className="mb-4 text-xl font-bold leading-none text-deep">Step 4</h3>
                <div className="w-full grid gap-6 mb-4 sm:grid-cols-2">
                   {
                        inputs.map((input, i) => (
                            <InputBox key={i} {...input}/>
                        ))
                   } 

                   <div className="w-full my-3 lg:my-2">
                    <label htmlFor={"interest"} className="mb-2 block text-sm font-medium text-black">Choose a Payment Method</label>

                        <div className="flex flex-col gap-y-2">

                            <label className="block text-sm font-medium text-black">
                                <input type={"radio"} name={"payment_method"} value={"paypal"} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.85)] ${errors.payment_method ? "!border-[rgba(255,0,0,0.85)]" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus-within:ring-blue-600 focus-within:border-blue-600 mx-2`} checked={formData.payment_method == "paypal" ?  true : false} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                Paypal Method
                            </label>

                            {/* <label className="block text-sm font-medium text-black">
                                <input type={"radio"} name={"payment_method"} value={"local_bank"} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.85)] ${errors.payment_method ? "!border-[rgba(255,0,0,0.85)]" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus-within:ring-blue-600 focus-within:border-blue-600 mx-2`} checked={formData.payment_method == "local_bank" ?  true : false} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
                                Local Bank Method
                            </label> */}

                            {errors.payment_method && <p className="text-sm text-[rgba(255,0,0,0.85)] my-2">{errors.payment_method}</p>}

                            <div className="my-6">

                                {
                                    formData.payment_method == "paypal" &&
                                        <Payments show={true} amount={formData.amount_payed}/>
                                }

                                {/* {
                                    formData.payment_method == "local_bank" &&
                                        <div className="bg-ash p-3">
                                            <p>Here is the Account Details to pay to below:</p>
                                            <h4>Bank: <b>GTBank</b></h4>
                                            <p>Account Number: <b>0123456789</b></p>
                                            <p>Then Send a Copy of the Teller to info@panafricanscrabble.com for verification</p>
                                        </div>
                                } */}
                            </div>
                        

                        </div>
                   </div>  

                </div>
        </form>
  );
};

export default FinalStep;