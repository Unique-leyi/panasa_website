


function InputBox({element, data, type, name, error, label, placeholder, value, defaultValue, handleChange, show}) {
    
    return (

        <>
            {
                element == "input" && show &&
                <div className="w-full my-1 lg:my-2">
                    <label htmlFor={name} className="mb-2 block text-sm font-medium text-black dark:text-white">{label}</label>
                        <input type={type} name={name} value={value} className={`bg-[#f2f2f2] border-[rgba(255,0,0,0.85)] ${error ? "!border-[1px] !border-solid !border-[rgba(228,8,8,0.75)] !rounded-md" : "border-[rgba(0,0,0,0.5)]"}  text-gray-900 text-sm rounded-sm focus:ring-2 focus:outline-none focus:ring-blue-300 block !w-full p-2.5`} placeholder={placeholder} onChange={handleChange}/>
                       
                    {error && <p className="text-sm text-[rgba(255,0,0,0.85)] my-2">{error}</p>}
                </div>
            }
        


            {
                element == "select" &&

                <div className="w-full my-3 lg:my-2">
                    

                <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label}
                </label>


                <div className="flex">
                    
                    <label htmlFor={label} className="sr-only">{label}</label>
                    <select name={name} className={`bg-[#f2f2f2] border-[rgba(0,0,0,0.5)] ${error ? "!border-[rgba(255,0,0,0.85)]" : "!border-[rgba(255,0,0,0.85)]"}  text-black text-sm rounded-r-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 cursor-pointer`} value={value}  onChange={handleChange} >

                        <option>{ defaultValue }</option>
                        {
                            data.length > 0 && (
                                data.map((item, i) => (
                                    <option value={item.value} key={i} className="my-2">
                                        {item.value}
                                    </option>
                                ))
                            )
                        }
                    </select>
                </div>
                {error && <p className="text-sm text-[rgba(255,0,0,0.85)] my-2">{error}</p>}


                </div>
            }
        
        
        </>

    )
}

export default InputBox