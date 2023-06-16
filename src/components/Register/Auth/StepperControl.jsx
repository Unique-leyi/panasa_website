

function StepperControl({isDisabled, handleClick, currentStep, steps}) {
    return (
        
        <div className={"flex justify-between items-center mb-3"}>
            {
             currentStep > 1 &&
            <button type="submit" className={`border-deep border-solid border-2 hover:bg-deep text-deep hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center ${currentStep === 1 || isDisabled ? "opacity-50 cursor-not-allowed" : " "}`} onClick={() => handleClick()} disabled={isDisabled}>
                Previous
            </button>
        }

            <button type="submit" className={`${isDisabled ? "opacity-50 cursor-not-allowed" : " "} text-white bg-deep hover:bg-yellow-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center`} onClick={() => handleClick("next")} disabled={isDisabled}>
              {currentStep === steps.length ? "Confirm" : "Next"}
            </button>
        </div>
    )
}

export default StepperControl