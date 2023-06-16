import { useContext} from "react";
import Image from "next/image";
import { AyscContext } from "../contexts/AyscContext.jsx";
import InputBox from "../Auth/InputBox.jsx";


const FinalStep = () => {

   const { formData, setFormData, errors } = useContext(AyscContext);

    
    const inputs = [

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
            show: true,
            type: "text",
            name: "age",
            label: "Age",
            placeholder: "E.g 19",
            error: errors.age,
            value: formData.age,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },


        {   
            element: "input",
            show: true,
            type: "text",
            name: "amount_payed",
            label: "Amount Payable",
            placeholder: "E.g 0",
            error: errors.amount_payed,
            value: formData.amount_payed,
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

                   <div className="flex flex-col">
                        <div className="relative flex flex-col">
                            <label className="block text-sm font-medium text-black mb-2">Upload Image:</label>
                            {errors.image && <p className="text-sm text-[rgba(255,0,0,0.85)] my-2">{errors.image}</p>}
                            { formData.filePreview !== null ?
                                <div className="relative w-56 h-56 rounded-md overflow-hidden">
                                    <Image src={formData.filePreview}  alt={"Image Preview"} style={{ objectFit: "cover" }} layout={"fill"} />
                                </div>

                                :

                                <div className="relative w-56 h-56 rounded-md overflow-hidden">
                                    <Image src={require("../../../assets/images/avatar.png")}  alt={"Card Image"} style={{ objectFit: "cover" }} layout={"fill"} />
                                </div>

                            }
                            

                            <div className="absolute inline-block left-8 -bottom-4 cursor-pointer group">
                                <input type="file" name="image" className="absolute opacity-0 cursor-pointer overflow-hidden z-[1] bottom-2" onChange={(e) => setFormData(
                                    {...formData, 
                                        [e.target.name]: e.target.files[0], 
                                        filePreview: URL.createObjectURL(e.target.files[0]),
                                    })}/>
                                <label htmlFor="file" className="cursor-pointer group-hover:bg-deep hover:bg-deep bg-[#f3f3f3] group-hover:text-white hover:text-white  inline-block text-black mb-0 pt-2.5 pr-6 pb-2 pl-12 relative font-semibold text-sm rounded-3xl">
                                    <i className="ri-upload-2-line absolute left-6 top-1/2 -translate-y-1/2 text-lg -mt-0.5"></i> Upload Photo
                                </label>
                            </div>
                        </div>
                    </div>

                     
                </div>
        </form>
  );
};

export default FinalStep;