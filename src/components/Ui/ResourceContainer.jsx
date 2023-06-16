
import { useState } from 'react';
import ResourceList from './ResourceList';
import SubTitle from './SubTitle';
import { Resources } from '../../../pages/api/resource_collection';



function ResourceContainer() {
const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

// bg-[#0c240c]
    return (
        <section className={`bg-white p-0`}>

            <div className="lg:max-w-[70%] lg:mx-auto my-16">
                <h5 className="font-medium text-center text-lg text-[#000]">Rules and Guides</h5>
                <h3 className="font-bold text-center text-4xl lg:text-5xl text-darkblue">Our Resources</h3>
            </div>

            <section className={`bg-ash bg-cover bg-center bg-no-repeat bg-fixed relative z-10`}>
                <div className={`mt-16 lg:mt-8  lg:mx-auto w-full lg:max-w-[90%]`}>

                    {
                        Resources.map((item, i) => (
                            <div key={i} className="py-6">
                                <div className="w-full my-16 lg:my-8" key={i}>
                                    <SubTitle subtitle={item.title}/>
                                </div>

                                <div className="w-full lg:max-w-[98%] lg:mx-auto flex justify-around items-center flex-col md:flex-row px-4 lg:p-0">
                                
                                    <ResourceList key={i} {...item} accordionOpen={open} handleOpen={() => handleOpen(item.id)}/>
                        
                                </div>
                            </div>
                            
    
                        ))
                    }
                    


            </div>

            </section>
           

        </section>
    )
}

export default ResourceContainer