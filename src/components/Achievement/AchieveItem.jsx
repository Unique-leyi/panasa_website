import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function AchieveItem(props) {
    const [counterOn, setCounterOn] = useState(props.On);


    return (
        <div className="flex justify-center items-center flex-col bg-white overflow-hidden rounded-md mx-4">
        <div className="flex-1 h-f ull py-8">
            <FontAwesomeIcon icon={props.icon} style={{ fontSize: 80 }} className="text-deep "/>
        </div>

        <div className={`w-full bg-siteblue flex-1 h-full flex justify-center items-center  mx-2 py-6 px-12 rounded-md shadow-md flex-wrap flex-col`}>
            
            <div className="flex-1">
                <ScrollTrigger onEnter={() => setCounterOn(props.On)} onExit={() => setCounterOn(!props.On)}>
                    <h3 className='text-5xl font-extrabold text-center text-white'>
                        {counterOn && <CountUp start={props.start} end={props.end} duration={props.duration} delay={props.delay}/>}
                        <span className='mx-1 font-medium'>{props.suffix}</span>
                    </h3>
                    <h5 className='font-semibold text-lg my-3 !text-center text-boldash'>{props.content}</h5>
                </ScrollTrigger>
            </div>

        </div>
        </div>
    )
}

export default AchieveItem