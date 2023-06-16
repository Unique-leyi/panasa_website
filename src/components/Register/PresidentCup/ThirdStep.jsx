import { useState, useContext} from "react";
import { RegisterContext } from "../contexts/RegisterContext.jsx";
import InputBox from "../Auth/InputBox.jsx";
import Image from "next/image";

const ThirdStep = () => {

   const { formData, setFormData, errors } = useContext(RegisterContext);

   const checkRoomMate = (band) => {

     switch(band) {

        case "Gold Badge ($300)":
            formData.room_mate = undefined;
            return undefined;

        case "Silver Badge ($265)":
            formData.room_mate = undefined;
            return undefined;

        case "Blue Badge ($50)":
            formData.room_mate = undefined;
            return undefined;

        case "Orange Badge ($250)":
            return formData.room_mate;

        case "Purple Badge ($215)":
            return formData.room_mate;

        default:
          break;
     }
    
}



    const inputs = [

         {   
            element: "input",
            show: true,   
            type: "number",
            name: "wespa_rating",
            label: "Wespa Rating",
            placeholder: "E.g. 1234",
            error: errors.wespa_rating,
            value: formData.wespa_rating,
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },

        {   
            element: "input",
            show: formData.registration_band == "Purple Badge ($215)" || formData.registration_band == "Orange Badge ($250)",   
            type: "text",
            name: "room_mate",
            label: "Name of Your Room mate",
            placeholder: "E.g. Jane",
            error: errors.room_mate,
            value: checkRoomMate(formData.registration_band),
            handleChange: (e)  => setFormData({...formData, [e.target.name]: e.target.value} ),
        },

        
        
    ];


 


  return (
        <form  className="w-full py-6 lg:py-8" encType="form/multi-part">
            <h3 className="mb-4 text-xl font-bold leading-none text-deep">Step 3</h3>
                <div className="w-full grid gap-6 mb-4 sm:grid-cols-2">
                   {
                        inputs.map((input, i) => (
                            <InputBox key={i} {...input}/>
                        ))
                   } 

                   <div className="w-full my-3 lg:my-2">
                    <label htmlFor={"interest"} className="mb-2 block text-sm font-medium text-black dark:text-white">Are you interested in the Final Fling (7-game) tournament on August 27 if you do not make the Semi Final?</label>

                        <div className="flex items-center gap-8">

                            <input type={"radio"} name={"final_fling"} value={"yes"} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.2)] ${errors.final_fling ? "!border-[rgba(255,0,0,0.2)]" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus-within:ring-blue-600 focus-within:border-blue-600`} checked={formData.final_fling == "yes" ?  true : false} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/> Yes
                            <input type={"radio"} name={"final_fling"} value={"no"} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.85)] ${errors.final_fling ? "!border-[rgba(255,0,0,0.85)]" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus-within:ring-blue-600 focus-within:border-blue-600 `} checked={formData.final_fling == "no" ?  true : false} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/> No
                        
                        </div>

                        {errors.final_fling && <p className="text-sm text-[rgba(255,0,0,0.85)] my-2">{errors.final_fling}</p>}
                    </div>    



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

export default ThirdStep;